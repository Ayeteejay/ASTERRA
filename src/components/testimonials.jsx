import React, {useState} from 'react';
import styled from 'styled-components';
import Data from '../data/testimonials.js';
import LeftArrow from '../images/arrow-left.svg';
import RightArrow from '../images/arrow-right.svg';

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-flow: column;
padding:${props=>props.theme.sectionSpacing.standard};
`;

const Row = styled.div`
 width:75%;
 padding:0 0 2rem 0;
 border-bottom:1px solid ${props=>props.theme.secondaryColors.granite};
overflow:hidden;
`

const Slider = styled.div`
display:flex;
overflow-x:auto;
scroll-snap-type: x mandatory;
`

const Quote = styled.div`
min-width:100%;
p.quote{
    font-size:3.75rem;
    line-height:1.35;
    &::before{
        content: '"';
        margin-left: -0.4em;
    }
    &::after{
        content: '"';
    }
}
p.title-info{
    font-size:1.25rem;
    padding:0;
}
`

const Title = styled.div`
display:flex;
flex-flow:column;
align-items:flex-end;
`

const NavigationRow = styled.div`
display:flex;
justify-content:center;
p{
    padding:1rem;
}
`

const Testimonials = () =>{
    const [testimonialData, setTestimonialData] = useState(Data);
    return (
        <Container>
            <Row>
                <Slider>
                {testimonialData.map((value)=>{
                    return (
                        <Quote>
                            <p className="quote">{value.quote}</p>
                            <Title>
                                <h4>{value.author}</h4>
                                <p className="title-info">{value.title}</p>
                            </Title>
                        </Quote>
                    )
                })}
                </Slider>
            </Row>
            <NavigationRow>
                <img src={LeftArrow}/>
                <p>/{testimonialData.length}</p>
                <img src={RightArrow}/>
            </NavigationRow>
        </Container>
    )
};

export default Testimonials