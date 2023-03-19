"use client";

import React, { useEffect, useState } from "react";

interface IHeading {
  id: string;
  tagName: string;
  textContent: string;
}

interface ITableOfContents {
  id: string;
}

function TableOfContents({ id }: ITableOfContents) {
  const [headings, setHeadings] = useState<IHeading[]>([]);

  useEffect(() => {
    const targetElement = document.getElementById(id);
    if (!targetElement) return;

    const headingElements = targetElement.querySelectorAll<HTMLElement>(
      "h1, h2, h3, h4, h5, h6"
    );
    const foundHeadings = Array.from(headingElements).map((heading) => {
      return {
        id: heading.id,
        tagName: heading.tagName,
        textContent: heading.textContent ?? "",
      };
    });

    setHeadings(foundHeadings);
  }, [id]);

  return (
    <nav className="prose">
      <h2>content</h2>
      <ul>
        {headings.map((heading, index) => (
          <li
            key={index}
            style={{
              marginLeft: `${(parseInt(heading.tagName.slice(1)) - 1) * 20}px`,
            }}
          >
            <a href={`#${heading.id}`}>{heading.textContent}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default TableOfContents;
