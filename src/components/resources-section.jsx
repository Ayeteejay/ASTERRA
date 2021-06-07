import React from 'react';
import styled from 'styled-components';
import City from '../images/homepage/daytime-city.jpg';

const Section = styled.section`
display:flex;
justify-content:center;
.title {
    border-bottom: 1px solid #5d5d5d;
    padding: 0 0 1.5rem 0;
    margin: 0 0 2rem 0;
  }
`

const Container = styled.div`
width:80%;
`

const CardRow = styled.div`
display:grid;
grid-template-columns:repeat(3,1fr);
grid-gap:1rem;
`

const Card = styled.div`
border:1px solid ${props=>props.theme.secondaryColors.rock};
transition:${props=>props.theme.animationSpeeds.normal};
&:hover{
    background:${props=>props.theme.secondaryColors.lime};
    border:1px solid ${props=>props.theme.secondaryColors.lime};
    h6,h4{
        color:black;
    }
    color:black;
    a{
        background:white;
        color:black;
        &:hover{
            background:none;
            color:white;
        }
    }
}
h6{
    color:${props=>props.theme.secondaryColors.lime};
    text-transform:uppercase;
    letter-spacing:1px;
    font-weight:200;
    transition:${props=>props.theme.animationSpeeds.normal};
}
h4{
    color:${props=>props.theme.primaryColors.clearWhite};
    transition:${props=>props.theme.animationSpeeds.normal};
}
a{
    border:1px solid white;
    text-decoration:none;
    padding:1rem 2rem;
    border-radius:5rem;
    color:white;
    transition:${props=>props.theme.animationSpeeds.normal};
}
.image-row{
background:url(${City});
background-size:cover;
background-repeat:no-repeat;
height:150px;
}
.content-row{
    padding:3rem;
}
p{
    padding:0.5rem 0 3rem 0;
}
`


const Resources = () => {
    return (
        <Section>
            <Container>
               <div className="title"> </div>
                    <CardRow>
                            <Card>
                                <div className="image-row">
                                    
                                </div>
                                <div className="content-row">
                                    <h6>Lorem Ipsum</h6>
                                <h4>Something goes here</h4>     
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde blanditiis autem distinctio cupiditate repellat voluptatum sunt. Perspiciatis numquam aspernatur eos, reprehenderit natus dolores.</p>  
                            <a href="/">Learn More</a>   
                                </div>
                    
                            </Card>
              
                    </CardRow>
            </Container>            
        </Section>
    )
};
export default Resources