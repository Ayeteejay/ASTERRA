import React from 'react';
import styled, {keyframes} from 'styled-components';
import City from '../images/homepage/daytime-city.jpg';
import Downtown from '../images/downtown.jpg';

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 0%;
  }
  100% {
    background-position: 0% 0%;
  }
`;

const Section = styled.section`
display:flex;
justify-content:center;
margin:5rem 0;
`

const Container = styled.div`
width:80%;
`

const Row = styled.div`
display:grid;
grid-template-columns:repeat(2,1fr);
grid-gap:2rem;

`

const Card = styled.div`

border:1px solid ${props=>props.theme.secondaryColors.rock};
transition:${props=>props.theme.animationSpeeds.normal};
&:hover{
    background:${props=>props.theme.secondaryColors.lime};
    border:1px solid ${props=>props.theme.secondaryColors.lime};
    p.resource-type,h4{
        color:black;
    }
    color:black;
    a{
        background:white;
        color:black;
        &:hover{
            background:none;
            color:white;
            border:1px solid white;
        }
    }
}
p.resource-type{
    color:${props=>props.theme.secondaryColors.lime};
    text-transform:uppercase;
    letter-spacing:1px;
    font-weight:200;
    transition:${props=>props.theme.animationSpeeds.normal};
    padding:0 0 0.75rem 0;
    font-size:0.8125rem;
}
h4{
    color:${props=>props.theme.primaryColors.clearWhite};
    transition:${props=>props.theme.animationSpeeds.normal};
}
.image-row{
background:url(${City});
background-size:cover;
background-repeat:no-repeat;
height:150px;
}
.content-row{
    padding:3.5rem;
}
p{
    padding:0.5rem 0 3rem 0;
}
`

const FeaturedCard = styled.div`

  background-size: 300%;
  transition: 1000ms;
  padding: 3rem;
  display: flex;
  justify-content: space-between;
  flex-flow: column;
  background-image: linear-gradient(
    150deg,
    ${(props) => props.theme.primaryColors.oceanBlue},
    ${(props) => props.theme.secondaryColors.orange}
  );
  p {
    padding: 1rem 0 0 0;
  }
  .featured {
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 0.8rem;
    opacity: 0.6;
  }
  &:hover {
    background-position: 90% 50%;
    a{
        background:white;
        color:black;
        &:hover{
            background:none;
            color:white;
            border:1px solid white;
        }
    }
  }
.description{
    display:flex;
    justify-content:flex-end;
    flex-flow:column;
    height:65%;
}
`;

const ProductCard = styled.div`
border:1px ​solid #5d5d5;
cursor:pointer;
padding:2.5rem;
transition:${props=>props.theme.animationSpeeds.normal};
border: 1px solid #5d5d5d;
h4, p,   #circle-one,#circle-two{
    transition:${props=>props.theme.animationSpeeds.normal};
}

p{
    padding:0.5rem 0 3rem 0;
}
&:hover {
    border: 1px solid ${(props) => props.theme.secondaryColors.orange};
    h4 {
      color: ${(props) => props.theme.secondaryColors.orange};
    }

    #circle-one,#circle-two{
     stroke:${(props) => props.theme.secondaryColors.orange};

    }
  }
`
const ResourceCard=  styled.div`
padding:3rem;
display:flex;
cursor:pointer;
justify-content:center;
align-items:center;
transition:${props=>props.theme.animationSpeeds.normal};
p{
    padding:0.5rem 0 0 0;
}
&:hover{
    background:   ${(props) => props.theme.primaryColors.oceanBlue};
}
`
const SolutionCard = styled.div`
position:relative;
background:url(${Downtown});
background-size:100%;
cursor:pointer;
transition:2s ease-in-out;
padding:10rem 2.5rem 2.5rem 2.5rem;
background-position:center;
height:325px;
p{
    padding:0.5rem 0 0 0;
}

.content{
position:absolute;
top:0;
height:325px;
left:0;
background-image: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.8), rgba(0,0,0,0.9));
padding:5rem 2.5rem 2.5rem 2.5rem;
}
.arrow-solution{
    justify-content:space-between;
    display:flex;
    align-items:center;
    opacity:0;
    transform:translate(0,20px);
    transition:${props=>props.theme.animationSpeeds.normal};
    p{
        text-transform:uppercase;
        font-weight:bold;
        transition:${props=>props.theme.animationSpeeds.normal};
    }
}
&:hover{
    background-size:175%;
    background-position:center;
    .arrow-solution{
        opacity:1;
        transform:translate(0,0px);
    }
}
`
const Cards = () => {
    return (
        <Section>
            <Container>
               <div className="title"><h2>Cards</h2></div>
                    <Row>
                     
                            <Card>
                                <div className="image-row">                                    
                                </div>
                                <div className="content-row">
                             <p className="resource-type">Blog</p>
                                <h4>Something goes here</h4>     
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde blanditiis autem distinctio cupiditate repellat voluptatum sunt. Perspiciatis numquam aspernatur eos, reprehenderit natus dolores.</p>  
                            <a href="/" className="ghost-btn">Learn More</a>   
                                </div>                    
                            </Card>              
            
                
                        <FeaturedCard>
              <p className="featured">featured</p>
              <div className="description">
               
    <h3>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod
                </p>
                 

              </div>
        <div>        <a href="/" className="ghost-btn">Learn More</a> </div>
            </FeaturedCard>
                      
<ProductCard>
<div className="description">
    
                <h4>
                MasterPlan
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" width="57.216" height="57.216" viewBox="0 0 57.216 57.216">
  <g id="all-circles" data-name="Group 39425" transform="translate(0.5 0.5)">
    <circle id="circle-one" data-name="Ellipse 764" cx="28.108" cy="28.108" r="28.108" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"/>
    <circle id="circle-two" data-name="Ellipse 765" cx="15.222" cy="15.222" r="15.222" transform="translate(12.886 12.886)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"/>
  </g>
</svg>

              </div>
</ProductCard>

<ResourceCard>
    <div>
        <h4>Lorem ipsum dolor sit amet, consetetur</h4>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
        <div className="arrow-link-normal"><p>Learn More</p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="28.635" height="16.707" viewBox="0 0 28.635 16.707">
                        <g id="Group_39419" data-name="Group 39419" transform="translate(-1272.365 13934.225)">
                            <g id="Group_39276" data-name="Group 39276" transform="translate(4237.936 -23484.371)">
                            <line id="arrow-line-normal" data-name="Line 24" x1="28" transform="translate(-2965.571 9558.5)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"/>
                            <path id="chevron-normal" data-name="Path 61563" d="M-2937.5,9566.5l8-8-8-8" transform="translate(-8.143)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"/>
                            </g>
                        </g>
                        </svg>
                        </div>
        </div>
</ResourceCard>
                            
                            <SolutionCard>
                                <div className="content">
                                <h4>Water</h4>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores</p>
                                <div className="arrow-solution"><p>Learn More</p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="28.635" height="16.707" viewBox="0 0 28.635 16.707">
                        <g id="Group_39419" data-name="Group 39419" transform="translate(-1272.365 13934.225)">
                            <g id="Group_39276" data-name="Group 39276" transform="translate(4237.936 -23484.371)">
                            <line id="arrow-line-normal" data-name="Line 24" x1="28" transform="translate(-2965.571 9558.5)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"/>
                            <path id="chevron-normal" data-name="Path 61563" d="M-2937.5,9566.5l8-8-8-8" transform="translate(-8.143)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"/>
                            </g>
                        </g>
                        </svg>
                        </div>
                                </div>
                            </SolutionCard>
                    </Row>
            </Container>            
        </Section>
    )
};
export default Cards