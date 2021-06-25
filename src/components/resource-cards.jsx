import React, {useState} from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';
import Background from '../images/homepage/resources.svg';
import Data from '../data/resources.js';

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-flow: column;
background:url(${Background}) no-repeat center;
background-size:50%;
`
const Row = styled.div`
 width:75%;
`
const Slider = styled.div`
// padding: ${props=>props.theme.sectionSpacing.standard};
display:flex;
overflow:hidden;
`

const Card = styled.div`
margin:0 2rem 0 0;
background:${props=>props.theme.primaryColors.spaceBlack};
.image-row{
 .img{
     width:50%;
 }
}
.content-row{
padding:3rem;
p{
    padding:0.5rem 0 2rem 0;
}
a{
    text-decoration:none;
}
}
`


const Resources = () =>{
    const [resourceData,setResourceData] = useState(Data);
    
    return (
        <Container>
            <Row>
            <h2>Resources</h2>
              <Slider>
                {resourceData.map((value)=>{
                    return (
                        <Card key={value.id}>
                            <div className="image-row">                                
                                <img src={value.img}/>
                            </div>
                            <div className="content-row">
                                <h4>{value.title}</h4>
                                <p>{value.description}</p>
                                <Link className="cta-btn" to={value.link}>Learn More</Link>
                            </div>
                        </Card>
                    )
                })}
              </Slider>
            </Row>            
        </Container>
    )
};
export default Resources