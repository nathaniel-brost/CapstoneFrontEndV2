import React from 'react';
import styled from "styled-components"


const Container = styled.div`
    display: grid;
    place-content: center;

`

const Card = styled.div`
    display: grid;
    place-content: center;
    width: 30rem;
    margin: 1rem;
    padding: 7rem;
    border-radius: 3px;
    box-shadow: 3px 3 px 6px grey;

    `

const ListPrinter = ({items, resourceName, itemComponent: ItemComponent}) => {
    return ( 
        <>
        <Container>
            {}

        </Container>

        </>);
}

export default ListPrinter
