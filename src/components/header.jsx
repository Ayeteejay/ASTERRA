import React from 'react';
import styled from 'styled-components';
import BlueLogo from '../images/asterra-blue-logo.svg';
import {Link} from 'gatsby';

const Container = styled.div`
display:flex;
padding:1rem;
justify-content:space-between;
`

const LinkColumn = styled.div`
a{
    color:${props=>props.theme.primaryColors.clearWhite};
    text-decoration:none;
    text-transform:uppercase;
    letter-spacing:0.75px;
    transition:500ms;
    &:hover{
        color:${props=>props.theme.secondaryColors.orange};
    }
}
ul{
    list-style:none;
    display:flex;
}
li{
    padding:0 1.5rem;
}
`

const Header = () =>{
    return (
        <Container>
            <img src={BlueLogo} alt="ASTERRA"/>
          <LinkColumn>
          <ul>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/solutions">Solutions</Link></li>
              <li><Link to="/partners">Partners</Link></li>
              <li><Link to="/resources">Resources</Link></li>
              <li><Link to="/about">About</Link></li>
          </ul>
          </LinkColumn>
        </Container>
    )
};
export default Header