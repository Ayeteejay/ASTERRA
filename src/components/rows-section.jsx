import React, {useState} from 'react';
import styled from 'styled-components';
import Data from '../data/country.js';
import CountryRow from './country-block.jsx';
import CountryBlock from './country-block.jsx';

const Container = styled.div`
width:80%;
position:relative;
`

const Section = styled.section`
display:flex;
justify-content:center;
margin:5rem 0;
`

const LocationRow = styled.div`
display:grid;
grid-template-columns:repeat(2,1fr);
grid-gap:2rem;
`


const Rows = () =>{
    const [countryData, setCountryData ] = useState(Data);
    return (
        <Section>
            <Container>
                <div className="title"><h2>Arrows</h2></div>
                <LocationRow>
                        {countryData.map((value)=>{
                            return(
                                <CountryBlock key={value.id} data={value}></CountryBlock>
                            )
                        })}
                </LocationRow>
            </Container>
        </Section>
    )
};
export default Rows