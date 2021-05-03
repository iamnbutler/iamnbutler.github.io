---
status: published
title: Facebook Page Plugin
subtitle: Bringing Facebook pages to the web.
slug: 2015-03-12-facebook-page-plugin
custom_slug: facebook-social-plugins
date: '2015-03-12'
company: Facebook
section: Developer Experience
project_type:
  - Product Thinking
  - Prototyping
summary: >-
  Replacing the dated Like Box, the Page Plugin lets developers Embed portions
  of their Facebook Page onto their website. It allows them to pull page content
  from Facebook, direct people to their page and more. Getting billions of daily
  impressions across the web, this is easily the biggest project I've worked on
  to date!
role: Protyping & product design.
goal: |
  Launch an improved version of the Like Box with at least feature parity
team: 1 DES, 1 ENG
wrapup: >-
  The possibilities of what we can do with the page plugin is nearly endless.
  Additional pages integrations, messenger, even pairing with payments.


  Imagine people being able to interact with businesses directly via messenger,
  right on their site. 


  Mark discussed this in his F8 keynote regarding the future of messenger as a
  platform, and here we can extend it to sites.


  Imagine being able to talk with an airline directly about your flights, or ask
  a question when something is going wrong on your site.


  Imagine being able to buy or add items to a cart directly from your sidebar,
  or link users through to a shop on Facebook itself or elsewhere.


  Imagine people being able to sample, play and purchase tracks directly from
  artists, from the sidebar of their site, through facebook + spotify and other
  services. 


  The possibilities are truly endless!
outcome: Shipped the Page Plugin to vastly positive metrics & reception.
link_one: https://developers.facebook.com/docs/plugins/page-plugin/
link_one_title: The Page Plugin on Facebook Developers
link_two: >-
  https://thenextweb.com/news/facebook-is-retiring-its-like-box-plugin-on-june-23
link_two_title: More on The Next Web
show_thumbnail: true
thumbnail: >-
  https://storage.googleapis.com/yaminateo-image-bucket/img/thumbnail/page_plugin_1x1.jpg
wide_thumbnail: >-
  https://storage.googleapis.com/yaminateo-image-bucket/img/thumbnail/page_plugin_2x1.jpg
---
## The Problem

[Add Intro]

The like box was a plugin for pages to show their content and direct people to engage with their Facebook page, however pages could only showcase posts and faces of people that like the page (usually complete strangers to the person viewing the plugin), and a clear sense of a page's identity was lacking.

[Insert screenshot]

This is what the like box looks like today. I'm sure you have seen it before out in the wild.

It gets billions of daily impressions across the web, the second highest of all Facebook plugins today after the like button. However, while it gets a lot of impressions it isn't particularly good at what it does.

[Insert screenshot]

There were some major problems with the like box. It has been the same for a very long time--the outdated style and lack of content shows. There are also many inconsistencies and strange decisions, such as the like count moving when friend's faces are visible or the repeated avatar/page title when posts are enabled.

## Enter the page plugin

[Insert screenshot]

The Page Plugin lets developers Embed portions of their Facebook Page onto their website. We decided to rename the plugin rather than create a new version of the like box to clearly show that this is a new direction that we are dedicated to taking into the future.

Our goals were to clarify the intent of the plugin (pull page content from FB, direct users to their FB page), visually improve what already exists, and to lay the framework for plugin extension going forward. That means being able to add cards to share more types of content from pages in new ways. 
## The Process

We validated with the pages team to verify that the plugin was beneficial to them and to page owners to reaffirm our goals.

[Insert screenshot]

The MVP page plugin. An interesting set of considerations we have to make when designing plugins for developers are that they will use our product in a large variety of settings. Each page plugin can look different based on the environment it is in and the configuration used. Here are just a few examples of the many configurations a developer could use.  Another consideration was that when designing this plugin we had to make this fit the many already-existing configurations on the web as the Page Plugin will later replace any existing like boxes out in the wild. This gave us some problems and things to think about.  Designing in this kind of environment was an interesting challenge for me.

## Ship Day

[Insert screenshot]

Despite the whirlwind schedule we were able to ship the plugin MVP for F8 day including an updated docs page with examples of the different configs.

We made sure that the page plugin we shipped had parity with the Like Box (with a few additions!) so that we could safely swap out the Like Boxes around the web in a few months.

On F8 day we shipped! Originally the Page Plugin was a stretch goal for F8, but we made progress week over week and were able to get it out with the rest of the plugins that shipped for F8 2015.

## Next Steps & the Future

- Get developers to update their plugins
- Watch the metrics
- Get new partners on board

### Growing Our Partnerships

[Add intro to this section]

By working with MSN to convince them that the page plugin will help improve their Facebook Page's activity we can gain a very large boost to plugin impressions. Here you can see what a page plugin might look like on the MSN homepage.

There are many other high profile partners that we work with that we could get into talks with to add the page plugin to their sites. These are just a few examples. By embedding their own page plugin partners gain potential increased FB page activity and social proof through friend's faces displayed, as well as access to the future content in the page plugin such as photos, videos, events and reviews.

### Growing the Plugin

Once some of the next steps are done we have experimented briefly with some really powerful new features that could be added into the page plugin.

The next steps for the plugin are to ship some of the things we had to cut for launch, such as the about section. Shortly after cards like photos, reviews, events and videos should follow. Finally, introducing more interaction, such as inline photo & video viewing, animation and inline commenting could come in the future.