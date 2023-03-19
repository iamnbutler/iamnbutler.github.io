import { IProject } from "@/types/project";

// Post object
export const zedDotDev: IProject = {
    title: "zed.dev",
    slug: "zed-dot-dev",
    url: "/zed-dot-dev",
    tagline: "You want your editor how fast?",
    preview:
        "We shipped our first site for Zed! We are currently in deep development, but wanted a way for people to learn more about what we are building, and have a way to know when new info drops.",
    date: {
        raw: new Date("2021-03-19"),
        year: "2021",
        mmddyy: "03/19/23",
        relative: "Over a year ago", // Replace with an actual relative date calculation
    },
    cover: {
        src: "/project/zed-dot-dev/thumbnail.png",
        alt: "A white zed logo on a black background",
    },
    tags: [
        { title: "dev", slug: "dev", url: "/tags/dev" },
    ],
    content: `We shipped our first site for Zed!

We are currently in deep development, but wanted a way for people to learn more about what we are building, and have a way to know when new info drops.

Check it out at [zed.dev](https://zed.dev)!

## Designs & unreleased directions

Some of these made it in and have since been replaced, others didn't make the cut. Thought they would be fun to share!

### 0.2

![](https://raw.githubusercontent.com/iamnbutler/iamnbutler.github.io/main/public/project/zed-dot-dev/0_2_home.jpg)
![](https://raw.githubusercontent.com/iamnbutler/iamnbutler.github.io/main/public/project/zed-dot-dev/0_2_mobile.jpg)
![](https://raw.githubusercontent.com/iamnbutler/iamnbutler.github.io/main/public/project/zed-dot-dev/0_2_1.jpg)
![](https://raw.githubusercontent.com/iamnbutler/iamnbutler.github.io/main/public/project/zed-dot-dev/0_2_alt_dark.jpg)
![](https://raw.githubusercontent.com/iamnbutler/iamnbutler.github.io/main/public/project/zed-dot-dev/0_2_alt_light.jpg)

### 0.3

![](https://raw.githubusercontent.com/iamnbutler/iamnbutler.github.io/main/public/project/zed-dot-dev/0_3_blog.jpg)
![](https://raw.githubusercontent.com/iamnbutler/iamnbutler.github.io/main/public/project/zed-dot-dev/0_3_docs.jpg)
![](https://raw.githubusercontent.com/iamnbutler/iamnbutler.github.io/main/public/project/zed-dot-dev/0_3_home.jpg)
![](https://raw.githubusercontent.com/iamnbutler/iamnbutler.github.io/main/public/project/zed-dot-dev/0_3_mobile.jpg)

`,
};
