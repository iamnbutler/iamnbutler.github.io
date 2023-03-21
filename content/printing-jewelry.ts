import { IProject } from "@/types/project";

// Post object
export const printingJewelry: IProject = {
    title: "Printing Jewelry",
    slug: "printing-jewelry",
    url: "/printing-jewelry",
    tagline: "Combining modeling and 3D printing to create jewelry",
    preview:
        `My wife is a huge Kingdom Hearts fan, so when I discovered that 3D printing metal was not only possible but also not overly expensive, I decided to make her a custom Keyblade piece...`,
    date: {
        raw: new Date("2018-11-15"),
        year: "2018",
        mmddyy: "11/15/18",
        relative: "5 years ago", // Replace with an actual relative date calculation
    },
    cover: {
        src: "/project/printing-jewelry/thumbnail.jpg",
        alt: "A 3D model of a custom Keyblade necklace",
    },
    tags: [
        { title: "art", slug: "art", url: "/tags/art" },
    ],
    content: `My wife is a huge Kingdom Hearts fan, so when I discovered that 3D printing metal was not only possible but also not overly expensive, I decided to make her a custom Keyblade piece. The project involved sketching, 3D renders, prototyping, and final printing.

![](https://storage.googleapis.com/yaminateo-image-bucket/img/attachments/3d-jewelry/IMG_0217.jpg)

For the sketching stage, I used Procreate and various key and Kingdom Hearts references. Sketching on the iPad with the pencil felt great, and the portability allowed me to sketch on a flight from San Francisco to St. Louis. As it was a personal piece, I included hidden meanings in the symbols of the concept sketches. I also did a shading pass to work out the texture, feel, and weight, which resulted in some happy accidents and a final design that reminded me of Majora's Mask.

![](https://storage.googleapis.com/yaminateo-image-bucket/img/attachments/3d-jewelry/IMG_0218.jpg)

Moving on to 3D renders, I used C4D and Octane to create them. I tend to make all my own metal materials, as it's fun to tinker with the exact values. For this project, I used some materials from one of the GSG material packs. The renders turned out great, and I was excited to see them come to life in the final print.

![](https://uploads-ssl.webflow.com/60453108a750bf32c24d79eb/604588f4a750bf39b64f0c2e_1432.jpg)

![](https://uploads-ssl.webflow.com/60453108a750bf32c24d79eb/604588753fdb244e04e47e20_emc_test.jpg)

Next came the prototyping stage, where I printed a cheap plastic copy to get a feel for the size and iterate on some small details. The prototype was printed in a smooth fine detail plastic for around $10. I was glad I printed a prototype first, as I realized that the wheel spokes in the design ended up looking far too fine in the printed design. So, I went back to the model and beefed them up a bit.

![](https://uploads-ssl.webflow.com/60453108a750bf32c24d79eb/60458ad47914e40a5f9786c6_IMG_0460.jpeg)

For the final prints, I used Shapeways and found a chain to match. The final print was in a rose gold-plated brass and cost around $34. It was on my doorstep within two weeks of hitting order, which was super reasonable. Holding the cold metal of a physical object that I designed entirely in 3D felt awesome, and I definitely plan on exploring this space further.

![](https://uploads-ssl.webflow.com/60453108a750bf32c24d79eb/60458a217f4f0738e4383d9e_IMG_0531.jpg)

![](https://uploads-ssl.webflow.com/60453108a750bf32c24d79eb/60458aa42205df690e2e48cd_ezgif-2-e53e6f075123_small.gif)

Overall, this project was a great experience that allowed me to combine my skills in design, 3D modeling, and printing. It also provided me with a new hobby and sparked my interest in exploring more creative projects.`,
};
