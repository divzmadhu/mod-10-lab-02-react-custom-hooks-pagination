import useDebounce from "../../hooks/useDebounce";

import { useState, useEffect } from "react";

import fruits from "../../data/fruits";

export default function DebounceSearchDemo() {
    const [searchText, setSearchText] = useState("");
    const [searchResults, setSearchResults] = useState<typeof fruits>([]);
    const debouncedValue = useDebounce(searchText, 500);

    useEffect(() => {
        const results = fruits.filter((fruit) =>
            fruit.name.toLowerCase().includes(debouncedValue.toLowerCase())
        );
        setSearchResults(results);
    }, [debouncedValue]);


    return (
        <div>
            <h2>Debounce Search Demo</h2>
            <input
                type="text"
                placeholder="Enter your search..."
                value={searchText}
                onChange={(event) => setSearchText(event.target.value)}
            />
            <p>Current Input : {searchText}</p>
            <p>Debounced Value (after 500 ms) : {debouncedValue}</p>
            <p>Simulated Search Results :</p>
            <div>
                {searchResults.map((fruit) => (
                    <p key={fruit.name}>
                        {fruit.name} - Family: {fruit.family} - Calories: {fruit.calories} - Sugar: {fruit.sugar}g
                    </p>
                ))}
            </div>
        </div>

    );
}