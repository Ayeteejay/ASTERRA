import React from 'react'
import styled from 'styled-components'
import BlueLogo from '../images/asterra-blue-logo.svg';
import {Link} from 'gatsby';

const Container = styled.div`
border-top:1px solid ${props=>props.theme.primaryColors.clearWhite};
padding:2rem;
color:${props=>props.theme.primaryColors.clearWhite};
p, a{
    font-size:0.8125rem;
    text-decoration:none;
}
`

const LinkRow = styled.div`
width:100%;
border-bottom:1px solid ${props=>props.theme.primaryColors.clearWhite};
padding:1rem 0;
display:grid;
grid-template-columns: 1fr;
@media (min-width:${props=>props.theme.breakPoints.lg}){
    grid-template-columns:1fr 1fr
}
`

const AddressColumn = styled.div`
display:grid;
grid-template-columns:repeat(2, 1fr);
grid-gap:2rem;
a{
    color:${props=>props.theme.secondaryColors.orange};
    transition: ${props=>props.theme.animationSpeeds.fast};
    &:hover{
        color:${props=>props.theme.primaryColors.oceanBlue};
    }
}
ul{
    list-style:none;
}
li{
font-size:0.8125rem;
line-height:1.6;
}
li:first-child{
    color:${props=>props.theme.primaryColors.oceanBlue};
    font-weight:bold;
}
@media(min-width:${props=>props.theme.breakPoints.lg}){
    grid-template-columns: repeat(3, 1fr);
}
`

const LinkColumn = styled.div`
display:flex;
padding:3rem 0;
ul{
    list-style:none;
    padding:0 3rem 0 0;
}
li{
font-size:0.8125rem;
line-height:2;
}
li:first-child{
    font-weight:bold;
}
@media(min-width:${props=>props.theme.breakPoints.lg}){
padding:1rem 0;
}
`


const LegalRow = styled.div`
display:flex;
justify-content:space-between;
padding:1rem 0;
flex-flow:column;
align-items:center;
.legal-column{
    display:flex;
    justify-content:space-between;
    align-items:center;
    text-align:center;
    > * {
        padding:1rem;
    }
}
@media(min-width:${props=>props.theme.breakPoints.lg}){
    flex-flow:row;
    .legal-column{
        > * {
            padding:1rem 2rem;
        }
    }
}
`


const Footer = () => {
    return (
        <Container>
            <LinkRow>
             <AddressColumn>
                 <ul>
                     <li>Utilis Corporate</li>
                     <li>Amal St. 13, Park Afeg, Building A</li>
                     <li>1st Floor, Rosh Ha'ayin 4809249</li>
                     <li>Israel</li>
                     <li>Phone: <a href="fill-in-phone">+972.3.5108119</a></li>
                     <li>Fax: <a href="fill-in-phone">+972.9.8866006</a></li>
                    <li><a href="mailto:inquiry@utiliscorp.com">inquiry@utiliscorp.com</a></li>
                 </ul>
                 <ul>
                     <li>Utilis USA</li>
                     <li>16885 West Bernardo Drive</li>
                     <li>Suite 305</li>
                     <li>San Diego, CA 92127</li>
                     <li>Phone: <a href="fill-in-phone">+1.858.521.9442</a></li>
                    <li><a href="mailto:inquiry@utiliscorp.com">inquiry@utiliscorp.com</a></li>
                 </ul>
                 <ul>
                     <li>Utilis UK</li>
                     <li>Lynton House</li>
                     <li>7/12 Tavistock Sq</li>
                     <li>London, WC1H 9BQ</li>
                    <li><a href="mailto:inquiry@utiliscorp.com">inquiry@utiliscorp.com</a></li>
                 </ul>
             </AddressColumn>
             <LinkColumn>
              <ul>
                  <li>Products</li>
                  <li>
                      <Link to="/products/masterplan" className="standard-link">MasterPlan</Link>
                  </li>
                  <li>
                      <Link to="/products/recover" className="standard-link">Recover</Link>
                  </li>
                  <li>
                      <Link to="/products/earthworks" className="standard-link">EarthWorks</Link>
                  </li>
                  </ul> 
              <ul>
                  <li>Solutions</li>
                  <li>
                      <Link to="/solutions/water" className="standard-link">Water</Link>
                  </li>
                  <li>
                      <Link to="/solutions/wastewater" className="standard-link">Wastewater</Link>
                  </li>
                  <li>
                      <Link to="/solutions/reclaimed" className="standard-link">Reclaimed</Link>
                  </li>
                  <li>
                      <Link to="/solutions/road-highway" className="standard-link">Road &#38; Highway</Link>
                  </li>
                  <li>
                      <Link to="/solutions/rail" className="standard-link">Rail</Link>
                  </li>
                  <li>
                      <Link to="/solutions/dam-levee" className="standard-link">Dam &#38; Levee</Link>
                  </li>
                  <li>
                      <Link to="/solutions/resistivity" className="standard-link">Resistivity</Link>
                  </li>
                  </ul> 
             </LinkColumn>
            </LinkRow>
            <LegalRow>
                <img src={BlueLogo} alt="ASTERRA logo"/>
                <div className="legal-column">
                    <p>2021 Utilis Corp. All rights reserved.</p>
                    <Link to="/privacy-policy" className="standard-link">Privacy Policy</Link>
                    <Link to="/terms-of-use"  className="standard-link">Terms of Use</Link>
                </div>
            </LegalRow>
        </Container>
    )
};
export default Footer