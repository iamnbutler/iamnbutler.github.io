import { IProject } from "@/types/project";
import Link from "next/link";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

function Card({ title, url, tagline, preview, date, cover, tags }: IProject) {
    return (
        <div className="flex flex-col h-full">
            {cover && (
                <Link href={url} className="aspect-square flex shrink-0 items-center border-b border-black bg-black/5">
                    <img
                        src={cover.src}
                        alt={cover.alt}
                        className="w-full"
                    />
                </Link>
            )}
            <div className="flex flex-col flex-grow p-4 prose">
                <Link href={url}>
                    <h2 className="m-0">{title}</h2>
                </Link>
                {tagline && <p className="mb-0 italic font-semibold">{tagline}</p>}
                <ReactMarkdown className="flex-grow overflow-hidden">{preview}</ReactMarkdown>
            </div>
            <div className="flex items-center justify-between p-4">
                <ul className="flex space-x-2">
                    {tags.slice(0, 3).map((tag, i) => (
                        <li key={tag.slug} className="text-sm italic underline">
                            <Link href={tag.url}>{tag.title}</Link>
                            {i < tags.slice(0, 3).length - 1 && <span>, </span>}
                        </li>
                    ))}
                </ul>
                <span className="text-sm">{date.year}</span>
            </div>
        </div>
    );
}

export default Card;
