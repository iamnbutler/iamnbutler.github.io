import { mixblocks } from "./mixblocks";
import { embeddingVideosInMarkdown } from "./embeddingVideosInMarkdown";
import { designDocsV2 } from "./designDocsV2";
import { IProject } from "@/types/project";

export const projects: IProject[] = [
  embeddingVideosInMarkdown,
  designDocsV2,
  mixblocks,
];
