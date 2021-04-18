---
title: Airtable Test
metaDescription: This is a sample meta description. If one is not present in your page/post's front matter, the default metadata.desciption will be used instead.
date: 2017-01-01T00:00:00.000Z
permalink: /airtest/index.html
eleventyNavigation:
  key: Airtable Test
  order: 5
---

<section class="home-featured">
  {% for item in all %}
  {{ item.title }}
  ({{ item }}
  <article class="home-feature-list">
    <a href="" class="layout-tile">
      <div class="thumbnail">
        <img src="" alt="Image Placeholder">
      </div>
      <div class="post-preview">
        <div class="preview-content">
          <h3 class="layout-space">
            {{ item.title }}
          </h3>
          <p class="layout-space subtitle">{{ item.subtitle }}</p>
          <p class="preview-summary layout-space-large">{{ item.summary }}</p>
        </div>
      </div>
    </a>
  </article>
  {% endfor %}
</section>
