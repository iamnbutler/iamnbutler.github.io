---
post_visible: true
status: published
title: Post Style Guide
subtitle: Test of all post styles
slug: 2021-05-14-post-style-guide
date: '2021-05-14'
date_updated: '2021-05-21'
author: Nate Butler
primary_tag: editorial
tags:
  - design
  - education
  - thought
series: Advanced Origami
series_number: 1
summary: >-
  Recommendations for hardware, peripherals and other desk setup stuff from
  years of buying and trying far too many things!
edit: >-
  A test of what edits look like. These could potentially take up a few lines,
  or even a lot of lines.
featured: true
hero_image: >-
  https://storage.googleapis.com/yaminateo-image-bucket/img/thumbnail/origami-components-hero-4x1.jpg
---
## Style Guide

Markdown is a markup language which is, in comparison to XML and HTML, supposed to be read as is. Therefore it's very important that it is already formatted for maximum readability in its source form.

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in RFC 2119.

![Example Image](https://storage.googleapis.com/yaminateo-image-bucket/img/desk_guide_hero.jpg)

Lines MUST not be longer than 80 characters, except they contain a link which can not be wrapped.

One SHOULD try, however, to shorten the link by stripping unnecessary parts of the link and using a provided URL shortener. (E.g. https://youtu.be/0qo78R_yYFA instead of https://www.youtube.com/watch?v=0qo78R_yYFA)


### Headlines


# H1 Heading

## H2 Subheading

### H3 Subheading

#### H4 Subheading

##### H5 Subheading


# H1 Heading

Markdown is a markup language which is, in comparison to XML and HTML, supposed to be read as is. Therefore it's very important that it is already formatted for maximum readability in its source form.


## H2 Subheading

Markdown is a markup language which is, in comparison to XML and HTML, supposed to be read as is. Therefore it's very important that it is already formatted for maximum readability in its source form.


### H3 Subheading

Markdown is a markup language which is, in comparison to XML and HTML, supposed to be read as is. Therefore it's very important that it is already formatted for maximum readability in its source form.


#### H4 Subheading

Markdown is a markup language which is, in comparison to XML and HTML, supposed to be read as is. Therefore it's very important that it is already formatted for maximum readability in its source form.


##### H5 Subheading

Markdown is a markup language which is, in comparison to XML and HTML, supposed to be read as is. Therefore it's very important that it is already formatted for maximum readability in its source form.


### Text Styles

*Italic* MUST be used instead of _Italic_. Some text in the middle of a *sentence* might be italicized. It could also be Bold, which is made like this: `**Bold**`.

[Links](foo.com) are made like this: `[Links](foo.com)` and can [appear anywhere](google.com)...

Text can be ~~struck out~~ within a paragraph. It can be achieved with `~~struck out~~`.


#### More on Links

Wrap text in [brackets] and the link destination in parens (http://...) such as:

Visit [this site](http://example.com/) for more examples.
Links can also use references to obtain URLs from elsewhere in the same document. This style can be useful if the same URL needs to be mentioned multiple times, is too long to cleanly place within text, or the link is within a table cell:

Search for [markdown style][1] examples.
`Search for [markdown style][1] examples.`

[1]: https://www.google.com/?gws_rd=ssl#q=markdown+style+guide
References can be simplified if the text alone is sufficient:

Visit [Google] to search the web.

[Google]: https://www.google.com/

```
Visit [Google] to search the web.

[Google]: https://www.google.com/
```

Automatic hyperlinking can be used where the link text should obviously also be the URL:

Use https://www.google.com/ to search the web.


#### Named anchors
Explicit anchors can be inserted anywhere in the document using `<a name="tag"></a>`, or `{#tag}` if markdown.namedanchor is true.

Implicit anchors are automatically created for each heading. For example ## Section 1 will have the anchor Section-1.

Anchor generation

- letters and digits, after removing accents (á → a)
- spaces are replaced with hyphens (-)
- other characters are replaced with underscores (_)
- runs of hyphens and underscores are collapsed

When placed in a section header the explicit anchor will override the automatic anchor. The following are identical and associate the anchor live-examples with the section header instead of the automatically generated name Examples.

`## Examples {#live-examples}`
`## Examples <a name="live-examples"></a>`


## Images

Similar to links but begin with ! to denote an image reference:

![diffy the kung fu review cuckoo](http://commondatastorage.googleapis.com/gerrit-static/diffy-w200.png)

`![diffy the kung fu review cuckoo](http://commondatastorage.googleapis.com/gerrit-static/diffy-w200.png)`

For images the text in brackets will be included as the alt text for screen readers.


### Lists

#### Unordered Lists

This is what an unordered list looks like:

- Item one
- Item two
- Item three

And with longer text:

- Markdown is a markup language which is, in comparison to XML and HTML, supposed to be read as is. Therefore it's very important that it is already formatted for maximum readability in its source form.
- Lines MUST not be longer than 80 characters, except they contain a link which can not be wrapped.
- The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in RFC 2119.


#### Ordered Lists

This is what an ordered list looks like:

1. Item one
1. Item two
1. Item three

1.  Foo.
1.  Bar.
    1.  Foofoo.
    1.  Barbar.
1.  Baz.

And with longer text:

1. Markdown is a markup language which is, in comparison to XML and HTML, supposed to be read as is. Therefore it's very important that it is already formatted for maximum readability in its source form.
1. Lines MUST not be longer than 80 characters, except they contain a link which can not be wrapped.
1. The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in RFC 2119.


### Rules

A horizontal rule looks like this:

---

It can be rendered like this: `---`.


### Code Blocks

An example code block:

```java
// Import some code
import java.util.ArrayList;
import java.security.*;
```


### Block Quotes

Sir Winston Churchill once said:

> A lie gets halfway around the world before the truth has a
> chance to get its pants on.


### Images

#### A single image

![Example Image](https://storage.googleapis.com/yaminateo-image-bucket/img/desk_guide_hero.jpg)


#### Image with Caption

![Example Image](https://storage.googleapis.com/yaminateo-image-bucket/img/desk_guide_hero.jpg)

This is a caption


#### Multiple Images

![Example Image](https://storage.googleapis.com/yaminateo-image-bucket/img/desk_guide_hero.jpg)
![Example Image](https://storage.googleapis.com/yaminateo-image-bucket/img/3d-jewelry-hero.jpg)
![Example Image](https://storage.googleapis.com/yaminateo-image-bucket/img/desk_guide_hero.jpg)
![Example Image](https://storage.googleapis.com/yaminateo-image-bucket/img/3d-jewelry-hero.jpg)


#### Text Before

Markdown is a markup language which is, in comparison to XML and HTML, supposed to be read as is. Therefore it's very important that it is already formatted for maximum readability in its source form.

![Example Image](https://storage.googleapis.com/yaminateo-image-bucket/img/desk_guide_hero.jpg)


#### Text After

![Example Image](https://storage.googleapis.com/yaminateo-image-bucket/img/desk_guide_hero.jpg)

Markdown is a markup language which is, in comparison to XML and HTML, supposed to be read as is. Therefore it's very important that it is already formatted for maximum readability in its source form.


#### After Headline

![Example Image](https://storage.googleapis.com/yaminateo-image-bucket/img/desk_guide_hero.jpg)


