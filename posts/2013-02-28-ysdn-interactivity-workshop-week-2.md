---
post_visible: true
status: published
title: YSDN Interactivity Workshop – Week 2
subtitle: Continuing to learn some web basics for building things like portfolios.
slug: 2013-02-28-ysdn-interactivity-workshop-week-2
date: '2013-02-28'
author: Nate Butler
primary_tag: education
tags:
  - education
  - dev
summary: >-
  Welcome to the YSDN Interactivity Workshop. Here we will learn how to build a
  simple website using Bootstrap, and learn some important basics about web
  development. Hopefully you are excited to get learning, so lets get to it!
featured: true
---
Welcome back everyone!

This week we are going be covering interaction, and learning how to work with jQuery and CSS animations. We'll also be adding a page or two to the site we made in the last workshop.

Having attended the previous workshop is recommended, but not required. I will try to write this week's content with zero assumptions, but it might be a good to read through the [week one](https://github.com/iamnbutler/YSDN-Interactivity-Workshop/wiki/Week-1) wiki page.

## Before Starting

Download this week's Resources

* [Resources Zip](http://www.mediafire.com/download.php?wd24iiutgsc5b72)
* [Complete Site Zip](http://www.mediafire.com/download.php?btvbmrjd447k0zz) 

Final Product for this Week

http://iamnbutler.com/demo/ysdn/workshop-1/week-2/

## Workshop

### Getting Started

All right, here we go! Let's start by grabbing the resources we need for this week. [Grab them here](http://www.mediafire.com/download.php?wd24iiutgsc5b72)

Also, if you need some help, or are working on this outside of the workshop, for your benefit I've included a complete version of what we will finish this week for you to dissect, or check your own code against. [Grab it here](http://www.mediafire.com/download.php?btvbmrjd447k0zz) 

Make a new folder and extract `ysdn_workshop_week_2_resources.zip` directly inside of it. You should see the following files/folders in that folder:

* `css`
  * `bootstrap.min.css` - *This holds the main Bootstrap CSS*
  * `bootstrap-responsive.min.css` - *This holds the CSS that makes Bootstrap responsive*
  * `style.css` - *This is our custom CSS*
* `img`
  * (Images)
* `js`
  * `bootstrap.min.js` - *This holds all of Bootstrap's custom scripts*
* `index.html`

***

### What is Responsive Web Design?

Before we start, let's make sure everyone is one the same page here. What does it mean when we say "make some (site) responsive"?

Well here is a fun example by [Masayuki Kido](http://roxik.com/), a web developer/interaction designer to help illustrate:

[Responsive Cat](http://roxik.com/cat/)

Another example from the A List Apart responsive web design (RWD) article:

[Smashing RWD Example](http://alistapart.com/d/responsive-web-design/ex/ex-site-flexible.html)

Essentially, Responsive Web Design is an effort to make web pages *respond* better to the current size of the browser. This can range from changing the size of images to entirely new layouts based on width and height of the current window.

Since we are using Bootstrap we have access to its responsive style sheet, which will deal with most of this automagically.

If you are interested in learning more about RWD, I've included some links in the Additional Resources section at the bottom of this page.

### Making Our Site Responsive

Now enough about RWD itself, let's get our site running responsive. 

Open up your `index.html` file in your text editor of choice and find line 17:

```html
<!-- <link href="css/bootstrap-responsive.min.css" rel="stylesheet" media="screen"> -->
```

We are going to remove the html comment block (`<!--` and `-->`)

```html
<link href="css/bootstrap-responsive.min.css" rel="stylesheet" media="screen">
```

Now open up `index.html` in the browser if you do not have it open already. (Make sure to refresh the page if you already had it open!) Now try re-sizing the width of your browser. Try making it wider, and try making in narrower.

How exactly does this work?

Well in the time we have it would be difficult to go through it all, but to put it simply, bootstrap's `.span` classes and its structure take care of the layout when we re size it. Elements of a certain `.span` width eventually become one column at what is known as a "break point."

***

### Getting Started with jQuery

Let's learn some jQuery! jQuery (or jQ for here on out) is not a language of its own, but a 'framework' built on top of Javascript (JS.) We won't be touching any pure Javascript in this workshop, but just be aware that they are not the same thing!

Navigate to the `scripts` folder and find `scripts.js`. We are going to open that up in our text editor.

You should see a section like this:

```javascript
$(document).ready(function() {

	// jQuery goes inside here!
	// This makes it so that our scripts don't load before the page is ready

});
```

This is called the "document ready" block. What it does is it makes sure that our scripts don't load before the elements on the page load. Say I want to run a script on one of the images we have on our page. If I try to `show()` that element, or `hide()` it but it has not yet loaded, the command will simply do nothing. 

To prevent this behavior we put 99% of our jQ code inside the "document ready" block. You can copy + paste this block from project to project, but eventually typing it out will become natural. 

### Making Elements Fade In

Let's make the sections of our simple site fade in using the handy jQ function `fadeIn()`. 

Before we get started, the jQuery documentation is one of the best places you can go when you get stuck on a jQuery problem. You can check it out [here](http://api.jquery.com/).

Before we get into the jQ magic to make this work we need to make some changes to our `html` and `css` files.

`index.html` (first line is the original, second is the new line)

Line 44
```html
<div class="row blog">

<div class="row blog" id="blog">
```

Line 59
```html
<div class="row">

<div class="row gallery" id="gallery">
```

Line 99
```html
<div class="row well">

<div class="row about well" id="about">
```

Here we are adding `id`s to our major sections so we can use them as "targets" in our jQuery (Also fixing up a few of my slip-ups from last lesson.)

`style.css`

Add the following in the bottom of the Body section:

```css
.blog, .gallery, .about {
	display: none;
}
```
This hides the main sections so we can fade them in. Try refreshing now and make sure nothing but the header is visible.

Now that everything is ready, time to write our first jQuery.

Add this line inside your "document ready" block:

`$('#blog').fadeIn(800);`

So it should look something like:

`scripts.js`
```js
$(document).ready(function() {

	$('#blog').fadeIn(800);

});
```

The function that we are running is called `fadeIn` and the length is `800` or 800ms (0.8 seconds.)

Good!

Now we are still missing one thing before this will work. Our scripts file currently isn't linked.

Let's un-comment the following line:

`index.html` Line 124

```html
<!-- <script src="js/scripts.js"></script> -->

<script src="js/scripts.js"></script>
```

All right! Refresh your page and you should finally see your effect run.

Let's get the other two sections fading in. To get them to `fadeIn` after the first one is finished we are going to use a `delay`. If we set the `delay` to `800`, the same length as the previous animation, then our animation will wait that long before running.

`scripts.js`
```js
$(document).ready(function() {

	$('#blog').fadeIn(800);
        $('#gallery').delay(800).fadeIn(800);
});
```

Then we will do the same for the final section, adding the additional 800ms.

```js
$(document).ready(function() {

	$('#blog').fadeIn(800);
        $('#gallery').delay(800).fadeIn(800);
        $('#about').delay(1600).fadeIn(800);
});
```

Awesome, we got all three sections fading in. So what else can we do with jQuery?
***

### Creating Gallery Interaction

Let's add a bit of interaction to our gallery.

To show of the `hover()` capabilities of jQuery, let's create an on-hover effect for the thumbnails to make the one you are hovering stand out more.

We need to add a little css to make this work.

`style.css`
```css
.gallery li {
	opacity: 0.55;
}
```

Once that is done, we are ready to add some jQuery. This might look a little complicated, but I'll explain each part!

`script.js`
```js
$('#gallery li').hover(                 //This is our 'selector'
  function() {                          //The first function is on mouse enter
    $(this).animate({                   //.animate() means we want to animate something
      opacity: 1                        //This is any CSS property (margin-left becomes marginLeft)
    }, 800);                            //This is the animation length
  },

  function() {                           //The second function is on mouse exit
    $(this).animate({
      opacity: 0.55
    }, 800);
  }
);
```

So that is a huge chunk of code, so lets break it down. 

```js
$('#gallery li').hover(

);
```

The first part is the selector. We want the `.hover()` affect to apply to all `li` elements under the `#gallery` id.

```js
$('#gallery li').hover(
  function() {
    $(this).animate({
      opacity: 1
    }, 800);
  }
});
```

The first `function` we add in is the instructions we want to give when the mouse overs in over the element. A `function` is essentially a set of directions, and can be given names so that they can be used over and over.

```js
$('#gallery li').hover(
  function() {
    $(this).animate({
      opacity: 1
    }, 800);
  }, 

  function() {
    $(this).animate({
      opacity: 0.55
    }, 800);
  }
});
```

The second function is what we want to do when the mouse leaves the object. In this case, we want the element to animate back to the opacity we set in the css.

Finally the number `800` in both functions is the length of the animation in milliseconds. Changing the number will change the length of the animation. (Generally the browser won't process animations faster than 300-400ms.) The standard number (if none is specified) is 400ms.
***

## Additional Resources

### Responsive Web Design

* http://coding.smashingmagazine.com/2011/01/12/guidelines-for-responsive-web-design/
* http://www.abookapart.com/products/responsive-web-design
* http://mattkersley.com/responsive/

## Navigation

[<-- Week 1](https://github.com/iamnbutler/YSDN-Interactivity-Workshop/wiki/Week-1) | [Week 3 -->](https://github.com/iamnbutler/YSDN-Interactivity-Workshop/wiki/Week-3)

[Schedule](https://github.com/iamnbutler/YSDN-Interactivity-Workshop/wiki/Schedule) | [Welcome](https://github.com/iamnbutler/YSDN-Interactivity-Workshop/wiki/Welcome) | [Week 1](https://github.com/iamnbutler/YSDN-Interactivity-Workshop/wiki/Week-1) | Week 2 | [Week 3](https://github.com/iamnbutler/YSDN-Interactivity-Workshop/wiki/Week-3) | [Credits](https://github.com/iamnbutler/YSDN-Interactivity-Workshop/wiki/Sample-Work-Sources)