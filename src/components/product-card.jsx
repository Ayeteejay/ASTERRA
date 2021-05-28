import React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';

const Card = styled.div`
background:${props=>props.theme.primaryColors.spaceBlack};
transition:${props=>props.theme.animationSpeeds.normal};
height:100%;
.hero-img{
  width:100%;
  transition:500ms;
  filter: grayscale(100%);
}    
&:hover{
  transform: translate(-10px, -20px);
  box-shadow: 15px 15px rgba(0,0,0, 0.3);
  .hero-img{
    filter: grayscale(0%);
  }
}
`
const ContentRow = styled.div`
padding:3rem;
display:flex;
flex-flow:column;
`

const DescriptionRow = styled.div`
`
const IconRow = styled.div`
padding:1rem 0 0 0;
`

const CardLink = styled(Link)`
color:white;
text-decoration:none;
`

const Product = (props) =>{

    return (
        <CardLink to={props.data.link}>
        <Card style={{border:`1px solid ${props.data.color}`}}>
          <img className="hero-img" src={props.data.mainImg} alt={props.data.alt}></img>
          <ContentRow>
              <DescriptionRow>
              <h4 style={{color:`${props.data.color}`}}>{props.data.title}</h4>
                <p>{props.data.description}</p>
              </DescriptionRow>
            <IconRow>
            <img src={props.data.icon} alt="Icon"/>
            </IconRow>
          </ContentRow>
        </Card>
        </CardLink>
    )
};
export default Product