import clsx from "clsx";
import Link from "next/link";
import { PropsWithChildren } from "react";
import UserMenu from "@/app/(home)/userMenu";
import { projects } from "@/content";
import Card from "@/app/(home)/card";
import NavCard from "./navCard";

interface IGridItem extends PropsWithChildren {
    /** Card should go all the way to the edges */
    e2e?: boolean;
}

const GridItem = ({ e2e, children }: IGridItem) => (
    <section
        className={clsx(
            !e2e && "p-5",
            "bg-white min-h-[700px] flex flex-col justify-between"
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
            <GridItem>
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
                    <ul>
                        <li>
                            <h3 className="my-0">Design at Zed</h3>
                            <p>Building the world&apos;s best code editor - 2021++</p>
                        </li>
                        <li>
                            <h3 className="my-0">Design at Facebook</h3>
                            <p>Helping product teams build more efficiently – 2020</p>
                        </li>
                        <li>
                            <h3 className="my-0">Avatars at Facebook</h3>
                            <p>The groundwork for an identity system for billions – 2018</p>
                        </li>
                        <li>
                            <h3 className="my-0">News Feed at Facebook</h3>
                            <p>
                                In an increasingly visual feed, how can we help people level up
                                their posts? – 2016
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
