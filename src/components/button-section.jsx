import React from 'react'
import styled from 'styled-components';
import Arrow from '../images/arrow-right.svg';

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
}
`

const Buttons = () =>{
    return (
        <Section>
            <Container>
            <div className="title"><h2>Buttons</h2></div>
                <Row>
                    <div className="subsection">
                        <a href="/" className="primary-btn">Learn More</a>
                        <a href="/" className="secondary-btn">Learn More</a>
                        <a href="/" className="tertiary-btn">Learn More</a>
                        <a href="/" className="ghost-btn">Learn More</a>
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