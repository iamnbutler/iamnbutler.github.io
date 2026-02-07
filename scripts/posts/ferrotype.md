# Ferrotype

[Ferrotype](https://github.com/iamnbutler/ferrotype) is a Rust-to-TypeScript type generator. The existing options in this space mostly produce basic, flat types — `Record<string, any>` everywhere, no discriminated unions, no generics, none of the type-level features that make TypeScript actually good. The generated types compile, technically, but they're not types you'd want to write by hand. Ferrotype tries to close that gap.

```bash
cargo add ferro-type
```

## The basics

Derive `TS` on a struct, get a TypeScript type:

```rust
#[derive(TS)]
#[ts(rename_all = "camelCase")]
struct UserProfile {
    display_name: String,
    avatar_url: Option<String>,
    post_count: u32,
    is_verified: bool,
}
```

```typescript
type UserProfile = {
  displayName: string;
  avatarUrl: string | null;
  postCount: number;
  isVerified: boolean;
};
```

`rename_all` respects casing conventions — your Rust stays `snake_case`, your TypeScript gets `camelCase`. `Option<T>` becomes `T | null`, not `T | undefined` or some wrapper type. The basics should just feel right.

## Discriminated unions

This is where most typegens fall apart. Rust enums are sum types — they should generate proper discriminated unions, not `string | object` or some untyped mess.

```rust
#[derive(TS)]
#[ts(tag = "kind")]
enum ApiResponse {
    Loading,
    Success { data: Vec<Post>, total: u32 },
    Error { code: i32, message: String },
}
```

```typescript
type ApiResponse =
  | { kind: "Loading" }
  | { kind: "Success"; data: Post[]; total: number }
  | { kind: "Error"; code: number; message: string };
```

TypeScript narrows these automatically in `switch` statements and `if` checks. The `tag` attribute controls the discriminant field name — default is `type`, but `kind`, `variant`, whatever you want.

For adjacently tagged enums (serde's `tag` + `content` style):

```rust
#[derive(TS)]
#[ts(tag = "type", content = "data")]
enum Event {
    Click { x: f64, y: f64 },
    Keypress(String),
    Blur,
}
```

```typescript
type Event =
  | { type: "Click"; data: { x: number; y: number } }
  | { type: "Keypress"; data: string }
  | { type: "Blur" };
```

Untagged unions work too — `#[ts(untagged)]` gives you a plain `A | B | C` union.

## Generics

Generic structs produce generic types:

```rust
#[derive(TS)]
#[ts(rename_all = "camelCase")]
struct Paginated<T> {
    items: Vec<T>,
    total_count: u32,
    has_next_page: bool,
}
```

```typescript
type Paginated<T> = {
  items: T[];
  totalCount: number;
  hasNextPage: boolean;
};
```

So `Paginated<User>` in Rust gives you `Paginated<User>` in TypeScript. The generic constraint carries through — you don't lose the relationship between the two sides.

## Composition and extension

`flatten` inlines fields from a nested struct, the same way serde does:

```rust
#[derive(TS)]
struct Timestamps {
    created_at: String,
    updated_at: String,
}

#[derive(TS)]
struct Post {
    title: String,
    #[ts(flatten)]
    timestamps: Timestamps,
}
```

```typescript
type Post = {
  title: string;
  createdAt: string;
  updatedAt: string;
};
```

For extending external types you don't control, `extends` generates intersection types:

```rust
#[derive(TS)]
#[ts(extends = "BaseEntity")]
struct User {
    name: String,
    email: String,
}
```

```typescript
type User = BaseEntity & { name: string; email: string };
```

## Template literals and branded types

This is the kind of thing no other typegen even attempts. TypeScript has template literal types — ferrotype can generate them:

```rust
#[derive(TS)]
struct Order {
    #[ts(pattern = "order-${string}")]
    id: String,
    #[ts(pattern = "${number}px")]
    width: String,
}
```

```typescript
type Order = {
  id: `order-${string}`;
  width: `${number}px`;
};
```

Now your TypeScript compiler rejects `"abc123"` as an order ID but accepts `"order-abc123"`. The type system does the validation.

## Indexed access types

Reference a field's type from another type, keeping them in sync:

```rust
#[derive(TS)]
struct Comment {
    #[ts(index = "User", key = "id")]
    author_id: String,
    body: String,
}
```

```typescript
type Comment = {
  authorId: User["id"];
  body: string;
};
```

If `User["id"]` changes from `string` to `number`, every type referencing it updates automatically. No manual syncing.

## The registry

Types aren't generated in isolation. `TypeRegistry` collects everything, deduplicates, and renders in dependency order:

```rust
let mut registry = TypeRegistry::new();
registry.register::<ApiResponse>();  // pulls in Post, User, etc.
let output = registry.render();
```

If `ApiResponse` references `Post` which references `User`, all three get emitted in the right order. No forward reference issues, no duplicates.

## Everything else

A few more things that matter for real-world usage: `#[ts(skip)]` omits fields, `#[ts(default)]` marks fields optional (`?`), `#[ts(type = "Date")]` overrides the generated type when you need an escape hatch, `#[ts(inline)]` inlines a type definition instead of emitting a reference, and `#[ts(transparent)]` on a newtype wrapper dissolves it into its inner type.

Named it after the [tintype photography process](https://en.wikipedia.org/wiki/Tintype) — ferro for iron/Rust, type for types.
