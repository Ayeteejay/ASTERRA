import React from 'react';
import styled from 'styled-components';
import BlueLogo from '../images/asterra-blue-logo.svg';
import {Link} from 'gatsby';

const Container = styled.div`
position: fixed;
z-index:9999;
background:${props=>props.theme.primaryColors.spaceBlack};
top: 0;
width: 100%;
display:flex;
padding:2rem;
justify-content:space-between;
align-items:center;
border-bottom:1px solid ${props=>props.theme.primaryColors.clearWhite};
a{
    font-size:0.8125rem;
    text-decoration:none;
    text-transform:uppercase;
}
`

const LinkColumn = styled.div`
display:none;

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
        <Link to="/"><img src={BlueLogo} alt="ASTERRA"/></Link>
          <LinkColumn>
          <ul>
              <li><Link to="/products" className="standard-link">Products</Link></li>
              <li><Link to="/solutions" className="standard-link">Solutions</Link></li>
              <li><Link to="/partners" className="standard-link">Partners</Link></li>
              <li><Link to="/resources" className="standard-link">Resources</Link></li>
              <li><Link to="/about" className="standard-link">About</Link></li>
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