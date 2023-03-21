type TagTitle = "ai" | "design" | "dev" | "art" | "brand"

export interface ITag {
    title: TagTitle;
    slug: string;
    url: string;
}

export interface IProject {
    title: string;
    slug: string;
    url: string;
    tagline?: string;
    preview: string;
    date: {
        raw: Date;
        year: string;
        mmddyy: string;
        relative: string;
    };
    cover?: {
        src: string;
        alt: string;
    };
    tags: ITag[];
    content: string;
}

export type IProjectMeta = Omit<IProject, "content">;
