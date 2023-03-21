import CopyToClipboard from "@/components/CopyToClipboard";
import MotionHeadline from "@/components/MotionHeadline";
import { projects } from "@/content";
import { IProject } from "@/types/project";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

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
        <div>
            <header className="relative border-b border-black">
                <div className="absolute top-5 right-5">
                    <CopyToClipboard />
                </div>
                <div className="mx-auto p-5 prose">
                    <MotionHeadline initial={{
                        rotate: -1,
                        originX: 0, // Relative to the left edge (0%)
                        originY: 1, // Relative to the bottom edge (100%)
                    }}>
                        <ul className="text-shadow-cyan flex space-x-2 m-0 p-0">
                            {project.tags.slice(0, 3).map((tag, i) => (
                                <li key={tag.slug} className="text-sm list-none m-0 p-0">
                                    {tag.title}
                                    {i < project.tags.slice(0, 3).length - 1 && <span>, </span>}
                                </li>
                            ))}
                        </ul>
                        <h1 className="text-shadow-cyan mb-0">{project.title}</h1>
                    </MotionHeadline>
                    {project.tagline && <p>{project.tagline}</p>}
                    <div>Posted {project.date.mmddyy} ({project.date.relative})</div>
                </div>
            </header>
            <article className="p-5 mx-auto prose" id="project">
                <ReactMarkdown>{project.content}</ReactMarkdown>
            </article>
        </div>
    );
}
