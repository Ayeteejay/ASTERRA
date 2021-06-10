import React from 'react'
import styled from 'styled-components';
import Arrow from '../images/arrow-right.svg';
import Logomark from './logomark';

const Section = styled.section`
display:flex;
justify-content:center;
margin:5rem 0;
`
const Container = styled.div`
width:80%;
`
const Row =  styled.div`
.subsection{
    margin:4rem 0;
    display:flex;
    justify-content:space-between;
    flex-flow:column;
    .btn-row{
        margin:1rem 0;
        padding:1rem;
        display:flex;
        a{
            margin:0 1rem 0 0;
        }
    }
}
`

const Buttons = () =>{
    return (
        <Section>
            <Container>
            <div className="title"><h2>Buttons</h2></div>
                <Row>
                    <div className="subsection">
                 <div className="btn-row">
                     <Logomark></Logomark>
                 </div>
                        <div className="btn-row">
                        <a href="/" className="primary-btn-orange">Primary Link</a>
                        <a href="/" className="primary-btn-blue">Primary Link</a>
                        <a href="/" className="primary-btn-lime">Primary Link</a>
                        </div>
                        <div className="btn-row">
                        <a href="/" className="secondary-btn">Secondary Link</a>
                        </div>
                        <div className="btn-row">
                        <a href="/" className="tertiary-btn">Tertiary Link 1</a>
                        <a href="/" className="tertiary-btn-alt">Tertiary Link 2</a>
                        </div>
                    </div>

                                            <div className="subsection">
                                                <div className="arrow-link"><p>Lower Tiered Link</p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="28.635" height="16.707" viewBox="0 0 28.635 16.707">
                        <g id="Group_39419" data-name="Group 39419" transform="translate(-1272.365 13934.225)">
                            <g id="Group_39276" data-name="Group 39276" transform="translate(4237.936 -23484.371)">
                            <line id="arrow-line" data-name="Line 24" x1="28" transform="translate(-2965.571 9558.5)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"/>
                            <path id="chevron" data-name="Path 61563" d="M-2937.5,9566.5l8-8-8-8" transform="translate(-8.143)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"/>
                            </g>
                        </g>
                        </svg>
                        </div>
                        </div>
                    <div className="subsection">
                    <p>
                    Example of a standard <a href="/" className="text-link">hyperlink</a> in text.
            </p>
                    </div>
                </Row>
            </Container>
        </Section>
    )
};
export default Buttons