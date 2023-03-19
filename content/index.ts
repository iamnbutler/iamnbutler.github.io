import { mixblocks } from "./mixblocks";
import { designDocsV2 } from "./designDocsV2";
import { figGen } from "./fig-gen";
import { IProject } from "@/types/project";
import { zedPublicBeta } from "./zed-public-beta";
import { dalleWorlds } from "./dalleWorlds";

export const projects: IProject[] = [
    zedPublicBeta,
    dalleWorlds,
    designDocsV2,
    figGen,
    mixblocks,
];
