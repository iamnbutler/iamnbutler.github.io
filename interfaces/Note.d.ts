export default interface Note {
  name: string
  uuid: string
  status: "draft" | "published" | "archived"
  slug: string
  date_created: Date
  last_updated?: Date
  description: string
  body: string
}