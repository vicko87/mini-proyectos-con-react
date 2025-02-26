import { useMemo } from "react";
import styled from "styled-components";

const StyleMarker = styled.span`
background-color: yellow;
font-weight: bolder;
border-radius: 2px;
`

const StyleItem = styled.button`
color: black;
display: block;
padding: 10px;
border: none;
text-decoration: none;
&:hover{
backgroung-color: #4c91ba;
color: white;
}
&:hover span {
color: black;
}`

export default function MarkedItem({ item, query, onClick }) {
    const { left, center, right } = useMemo(() => getPositions(item, query),
        [item, query]
    );

    function getPositions(item, query) {
        const index = item.title.toLowerCase().indexOf(query);
        const left = item.title.slice(0, index);
        const right = item.title.slice(index + query.length);
        const center = item.title.slice(index, index + query.length);
        console.log(left, center, right)
        return {
            left,
            center,
            right,
        }
    }
    return <StyleItem>
        {left}
        <StyleMarker>{center}</StyleMarker>
        {right}
    </StyleItem>
}