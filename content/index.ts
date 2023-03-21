import { mixblocks } from "./mixblocks";
import { designDocsV2 } from "./designDocsV2";
import { figGen } from "./fig-gen";
import { IProject } from "@/types/project";
// import { zedPublicBeta } from "./zed-public-beta";
import { dalleWorlds } from "./dalleWorlds";
import { zedDotDev } from "./zed-dot-dev";
import { designWorkshop } from "./design-workshop";
import { writingWithADHD } from "./writing-with-adhd";
import { printingJewelry } from "./printing-jewelry";

export const projects: IProject[] = [
    // zedPublicBeta,
    dalleWorlds,
    designDocsV2,
    zedDotDev,
    figGen,
    writingWithADHD,
    mixblocks,
    printingJewelry,
    designWorkshop,
];
