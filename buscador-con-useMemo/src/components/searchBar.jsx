import { useState } from "react";
import Results from "./results";

import styled from "styled-components"

const SearchBarContainer = styled.div`
position: relative;
width: 400px;
margin: 0 auto;
`;

const StyledInput = styled.input`
padding: 10px;
border-radius:5px;
min-width: 400px;
box-sizing: border-box;
border: solid 1px #222;
outline: none;
`

export default function SearchBar({ items, onItemSelected }) {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    function handleChange(e) {
        const value = e.target.value;
        setQuery(value);
    }

    function handleResults(items) {
        setResults(items);
    }

    function handleItemSelected() {

    }
    return (
        <SearchBarContainer>
            {results && <div>{results.length} results</div>}
            <StyledInput type="text" onChange={handleChange} value={query}></StyledInput>
            <Results items={items}
                onItemSelected={handleItemSelected}
                query={query}
                onResultsCalculated={handleResults} />
        </SearchBarContainer>
    )
}