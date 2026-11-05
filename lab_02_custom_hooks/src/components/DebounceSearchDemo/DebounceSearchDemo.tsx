import useDebounce from "../../hooks/useDebounce";

import { useState, useEffect } from "react";

import fruits from "../../data/fruits";

export default function DebounceSearchDemo() {
    const [searchText, setSearchText] = useState("");
    const [searchResults, setSearchResults] = useState<typeof fruits>([]);
    const [delay, setDelay] = useState(500);
    const debouncedValue = useDebounce(searchText, delay);

    useEffect(() => {
        const results = fruits.filter((fruit) =>
            fruit.name.toLowerCase().includes(debouncedValue.toLowerCase())
        );
        setSearchResults(results);
    }, [debouncedValue]);

    function increaseDelay() {
        setDelay(delay + 100);
    }

    function decreaseDelay() {
        setDelay(delay - 100);
    }


    return (
        <div className="debounce-search">
            <h2>Debounce Search Demo</h2>
            <div className="delay-control">
                <label>Debounce Delay (ms):</label>

                <input
                    type="number"
                    value={delay}
                    onChange={(event) => setDelay(Number(event.target.value))}
                    min="100"
                    step="100"
                />
            </div>
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
                {debouncedValue.trim() === "" ? (
                    <p>Type any fruits to see the results.</p>
                ) : searchResults.length > 0 ? (
                    searchResults.map((fruit) => (
                        <p key={fruit.name}>
                            {fruit.name} - Family: {fruit.family} - Calories: {fruit.calories} - Sugar: {fruit.sugar}g
                        </p>
                    ))
                ) : (
                    <p>No fruits found.</p>
                )}
            </div>
        </div>

    );
}