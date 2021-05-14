import React from 'react';
import styled from 'styled-components';
import BlueLogo from '../images/asterra-blue-logo.svg';
import {Link} from 'gatsby';

const Container = styled.div`
position: fixed;
// background:${props=>props.theme.primaryColors.spaceBlack};
top: 0;
width: 100%;
display:flex;
padding:2rem;
justify-content:space-between;
align-items:center;
a{
    font-size:0.8125rem;
    text-decoration:none;
    text-transform:uppercase;
}
`

const LinkColumn = styled.div`
display:none;
a{
    color:${props=>props.theme.primaryColors.clearWhite};
    letter-spacing:1px;
    transition:${props=>props.theme.animationSpeeds.normal};
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
@media(min-width:${props=>props.theme.breakPoints.lg}){
display:block;

}
`
const CallToActionColumn = styled.div`
display:none;
a{
    background:${props=>props.theme.primaryColors.clearWhite};
    color:${props=>props.theme.primaryColors.spaceBlack};
    padding:1rem 1.5rem;
    transition:${props=>props.theme.animationSpeeds.normal};
    border-radius:4rem;
}
a:hover{
        background:${props=>props.theme.secondaryColors.orange};
}
@media(min-width:${props=>props.theme.breakPoints.lg}){
display:block;
}
`

const MobileToggle = styled.div`
display:block;
.top-line{
    height:3px;
    width:20px;
    margin: 0 0 4px 0;
    display:block;
    
    background-color:${props=>props.theme.primaryColors.oceanBlue};
    transition:${props=>props.theme.animationSpeeds.normal};
}
.middle-line{
    height:3px;
    width:20px;
    margin:0 0 4px 0;
    display:block;
    transition:${props=>props.theme.animationSpeeds.normal};
    background-color: ${props=>props.theme.primaryColors.oceanBlue};
}
.bottom-line{
    height:3px;
    width:20px;
    margin:0 0 4px 0;
    display:block;
    transition:${props=>props.theme.animationSpeeds.normal};
    background-color: ${props=>props.theme.primaryColors.oceanBlue};
}
@media(min-width:${props=>props.theme.breakPoints.lg}){
    display:none;
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
          <CallToActionColumn>
              <Link to="/demo">Request a Demo</Link>
          </CallToActionColumn>
          <MobileToggle>
              <span className="top-line"></span>
              <span className="middle-line"></span>
              <span className="bottom-line"></span>
          </MobileToggle>
        </Container>
    )
};
export default Header