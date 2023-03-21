import clsx from "clsx";
import { PropsWithChildren } from "react";
import UserMenu from "@/app/(home)/userMenu";
import { projects } from "@/content";
import Card from "@/app/(home)/card";
import NavCard from "./navCard";

interface IGridItem extends PropsWithChildren {
    /** Card should go all the way to the edges */
    e2e?: boolean;
    className?: string;
}

const GridItem = ({ e2e, className, children }: IGridItem) => (
    <section
        className={clsx(
            !e2e && "p-5",
            "bg-white min-h-[780px] flex flex-col justify-between",
            "border-b md:border-b-0 md:border-black",
            className
        )}
    >
        {children}
    </section>
);

export default function Home() {
    return (
        <div
            className={clsx(
                "max-w-[1600px] 2xl:my-10",
                "gap-px bg-black border border-black",
                "sm:flex sm:flex-col md:grid md:mx-auto md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
            )}
        >
            <GridItem className="hidden md:block">
                <NavCard />
            </GridItem>
            <GridItem>
                <div className="prose shrink-1">
                    <h2 className="text-shadow-green">hey ✌️</h2>
                    <p className="italic font-semibold">
                        I’m nate butler, a designer & maker enabling people’s creativity and
                        ability share knowledge.
                    </p>
                    <p>
                        I want to help people create the things important to them—To empower
                        them to create something themselves and feel the euphoria it brings.
                        My goal is always to help the people around me level up, in their
                        careers & lives.
                    </p>
                    <p>
                        I post about all types of things here. You will find a mix of work,
                        top of mind, reflections, & process. Enjoy!
                    </p>
                </div>
                <footer className="flex justify-between shrink-0">
                    <p>more about me &rarr;</p>
                    <UserMenu />
                </footer>
            </GridItem>
            <GridItem>
                <div className="prose shrink-1">
                    <h2 className="text-shadow-yellow">work 🎒</h2>
                    <ul className="-ml-1 mr-3">
                        <li>
                            <h3 className="my-0">Zed Industries</h3>
                            <p>Building the world&apos;s best code editor - 2021++</p>
                        </li>
                        <li>
                            <h3 className="my-0">Facebook Internal Tools</h3>
                            <p>Helping product teams build more efficiently – 2020</p>
                        </li>
                        <li>
                            <h3 className="my-0">Facebook Avatars</h3>
                            <p>Laying groundwork for an identity system for billions – 2018</p>
                        </li>
                        <li>
                            <h3 className="my-0">Facebook News Feed</h3>
                            <p>
                                Helping people find their voice in an increasinly visual feed – 2016
                            </p>
                        </li>
                        <li>
                            <h3 className="my-0">Format</h3>
                            <p>
                                Enabling people to create the sites they want – 2014
                            </p>
                        </li>
                    </ul>
                </div>
                <footer className="flex justify-between shrink-0">
                    <p>more work &rarr;</p>
                    <a href="https://read.cv/natebutler" className="underline">
                        read.cv
                    </a>
                </footer>
            </GridItem>
            {projects.map((project) => (
                <GridItem e2e key={project.url}>
                    <Card {...project} />
                </GridItem>
            ))}
        </div>
    );
}
