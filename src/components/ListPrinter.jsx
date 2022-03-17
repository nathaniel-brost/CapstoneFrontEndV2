import React from 'react';
import styled from "styled-components"


const Container = styled.div`
    display: grid;
    place-content: center;

`

// new style component in charge of side by side
const Spread = styled.div`
    margin-right: 3rem;

`

const Card = styled.div`
    display: flex;
    flex-wrap: wrap;
    place-content: left;
    width: 50rem;
    margin: 1rem;
    padding: 2rem 1rem;
    border-radius: 3px;
    box-shadow: 3px 3px 6px grey;
    background-color: aqua;

    `
// 1, 2, 3, 
const ListPrinter = ({items, resourceName1, resourceName2, resourceName3, itemComponent1: ItemComponent1, itemComponent2: ItemComponent2, itemComponent3: ItemComponent3}) => {
    return ( 
        <>
        <Container>
            {items && items.map (item => (
                <Card>
                    <Spread>
                    <ItemComponent1 {...{[resourceName1] : item}}/>
                    </Spread>
                    <Spread>
                    <ItemComponent2 {...{[resourceName2] : item}}/>
                    </Spread>
                    <Spread>
                    <ItemComponent3 {...{[resourceName3] : item}}/>
                    </Spread>

                </Card>
            ) ) } 

        </Container>

        </>);
}

export default ListPrinter
