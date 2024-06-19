import React, { useEffect, useState } from "react";
import init, { search as wasmSearch } from "./tinysearch";

type SearchResult = [string, string, string | null];

export const TinySearch: React.FC = () => {
  const [initialized, setInitialized] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const initializeWasm = async () => {
      try {
        console.log("Initializing WebAssembly module...");
        await init();
        console.log("WebAssembly initialized");
        setInitialized(true);
      } catch (error) {
        console.error("Error initializing WebAssembly:", error);
      }
    };
    initializeWasm();
  }, []);

  const handleSearch = async () => {
    if (!initialized) return;

    try {
      console.log(`Performing search for query: ${query}`);
      const results: SearchResult[] = wasmSearch(query, 10);
      console.log("Search results:", results);
      setResults(results);
    } catch (error) {
      console.error("Error performing search:", error);
    }
  };

  return (
    <div>
      <p>Initialized: {initialized ? "yes" : "no"}</p>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch} disabled={!initialized}>
        Search
      </button>
      <div>
        {results.length === 0 ? (
          <p>No results found.</p>
        ) : (
          <ul>
            {results.map((result, index) => (
              <li key={index}>
                <h3>{result[0] || "No Title"}</h3>
                <p>{result[2] || "No Description"}</p>
                <a href={result[1]}>Read more</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
