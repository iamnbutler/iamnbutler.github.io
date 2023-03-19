import { mixblocks } from "./mixblocks";
import { designDocsV2 } from "./designDocsV2";
import { figGen } from "./fig-gen";
import { IProject } from "@/types/project";
import { zedPublicBeta } from "./zed-public-beta";
import { dalleWorlds } from "./dalleWorlds";
import { zedDotDev } from "./zed-dot-dev";

export const projects: IProject[] = [
    zedPublicBeta,
    dalleWorlds,
    designDocsV2,
    zedDotDev,
    figGen,
    mixblocks,
];