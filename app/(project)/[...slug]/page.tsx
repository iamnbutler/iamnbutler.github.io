import { projects } from "@/content";
import { IProject } from "@/types/project";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

// Assuming IProject is already defined and imported
function findProject(slug: string, projects: IProject[]): IProject {
    const project = projects.find((project) => project.slug === slug);
    if (!project) {
        throw new Error(`
      Coudn't find project with slug: ${slug}.
    )}).
    `);
    }
    return project;
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
    /** slug must be converted to a string or it won't match the project slug */
    const slug = params.slug.toString();
    const project: IProject = findProject(slug, projects);

    return (
        <div className="p-5 mx-auto prose" id="project">
            <h1>{project.title}</h1>
            <ReactMarkdown>{project.content}</ReactMarkdown>
        </div>
    );
}
