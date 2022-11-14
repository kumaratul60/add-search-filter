import React, { useMemo, useRef, useState } from "react";

const EfficientSearch = () => {
    const [items, setItems] = useState([]);
    const [query, setQuery] = useState("");

    const inputRef = useRef();

    // efficient approach

    // const filteredItem = items.filter((item) =>
    //     item.toLowerCase().includes(query.toLowerCase())
    // );

    // using useMemo for performance optimization
    const filteredItem = useMemo(() => {
        return items.filter((item) =>
            item.toLowerCase().includes(query.toLowerCase())
        );
    }, [items, query]);

    function onSubmit(e) {
        e.preventDefault();

        const value = inputRef.current.value;
        if (value === "") return;
        setItems((prev) => {
            return [...prev, value];
        });

        inputRef.current.value = "";
    }

    return (
        <div className="App">
            <label htmlFor="searchInput"> Search</label>
            <input
                type="text"
                id="searchInput"
                placeholder="search"
                value={ query }
                onChange={ (e) => setQuery(e.target.value) }
            />
            <br />
            <br />
            <br />
            <form onSubmit={ onSubmit }>
                New Item: <input type="text" ref={ inputRef } />
                <button type="submit">Add</button>
            </form>
            <h3>Items:</h3>
            { filteredItem.map((itemElement, index) => (
                <div key={ index }>{ itemElement }</div>
            )) }
        </div>
    );
};

export default EfficientSearch;
