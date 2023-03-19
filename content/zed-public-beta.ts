import { IProject } from "@/types/project";

// Post object
export const zedPublicBeta: IProject = {
    title: "Zed Brand – 2023",
    slug: "zed-public-beta",
    url: "/zed-public-beta",
    tagline: "Giving Zed a fresh new look for its public beta release.",
    preview:
        "In collaboration with Mark Otto and Nathan Sobo we set out to create something that felt a little different than most of today's tech brands.",
    date: {
        raw: new Date("2023-03-19"),
        year: "2023",
        mmddyy: "03/19/23",
        relative: "today", // Replace with an actual relative date calculation
    },
    cover: {
        src: "/project/zed-public-beta/thumbnail.jpg",
        alt: "A white Zed logo on a dark grainy background.",
    },
    tags: [
        { title: "brand", slug: "dev", url: "/tags/brand" },
        { title: "dev", slug: "dev", url: "/tags/dev" },
    ],
    content: `TBD`,
};
