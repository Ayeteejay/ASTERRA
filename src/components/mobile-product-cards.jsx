import React, {useState} from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';
import Data from '../data/product.js'

const Container = styled(Link)`
padding:1.5rem;
margin:1.5rem 0;
border:1px solid ${props=>props.theme.secondaryColors.stone};
background:${props=>props.theme.primaryColors.spaceBlack};
color:${props=>props.theme.primaryColors.clearWhite};
display:flex;
align-items:center;
transition:${props=>props.theme.animationSpeeds.normal};
h4,p{
    text-transform:none;
}
p{
    padding:0 !important;
}
&:hover{
    border:1px solid ${props=>props.hoverColor};
}
}
`

const Icon = styled.div`
padding:0 2rem 0 0.75rem;
`

const Content = styled.div`

`

const Card = (props) =>{
    const [products, setProducts] = useState(Data);
    return (
        <div>
            {products.map((value)=>{
                return (                    
                    <Container hoverColor={value.color} to={value.headerLink}>
                        <Icon>
                            <img src={value.icon}/>
                        </Icon>
                        <Content>
                        <h4 style={{color:value.color}}>{value.title}</h4>
                        <p>{value.subtitle}</p>
                        </Content>
                    </Container>
                )
            })}
        </div>
    )
};
export default Card;