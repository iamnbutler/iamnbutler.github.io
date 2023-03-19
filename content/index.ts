import { mixblocks } from "./mixblocks";
import { embeddingVideosInMarkdown } from "./embeddingVideosInMarkdown";
import { designDocsV2 } from "./designDocsV2";
import { figGen } from "./fig-gen";
import { IProject } from "@/types/project";
import { zedPublicBeta } from "./zed-public-beta";

export const projects: IProject[] = [
    zedPublicBeta,
    embeddingVideosInMarkdown,
    designDocsV2,
    figGen,
    mixblocks,
];
