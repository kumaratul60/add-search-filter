import React, { useRef, useState } from "react";

const NaiveSearch2 = () => {
    const [items, setItems] = useState([]);
    const [filtered, setFiltered] = useState([]);

    const inputRef = useRef();

    // naive approach 2 -> create a filtered items state
    const onChange = (e) => {
        const targetValue = e.target.value;
        setFiltered(
            items.filter((item) =>
                item.toLowerCase().includes(targetValue.toLowerCase())
            )
        );
    };

    function onSubmit(e) {
        e.preventDefault();

        const value = inputRef.current.value;
        if (value === "") return;
        setItems((prev) => {
            return [...prev, value];
        });

        setFiltered((prev) => {
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
                onChange={ onChange }
            />
            <br />
            <br />
            <br />
            <form onSubmit={ onSubmit }>
                New Item: <input type="text" ref={ inputRef } />
                <button type="submit">Add</button>
            </form>
            <h3>Items:</h3>

            { filtered.map((itemElement, index) => (
                <div key={ index }>{ itemElement }</div>
            )) }
        </div>
    );
};

export default NaiveSearch2;
