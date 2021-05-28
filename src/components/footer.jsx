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
    line-height:1.6;
    text-decoration:none;
}
`

const LinkRow = styled.div`
width:100%;
border-bottom:1px solid ${props=>props.theme.primaryColors.clearWhite};
padding:2rem 0 3rem 0;
display:flex;
justify-content:space-between;
flex-wrap:wrap;
@media (min-width:${props=>props.theme.breakPoints.lg}){
    flex-wrap:nowrap;
    padding:1rem 0 2rem 0;
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
display:grid;
grid-template-columns:repeat(3, 1fr);
ul{
    list-style:none;
    padding:2rem 2rem 0 0;
}
li{
font-size:0.8125rem;
line-height:2;
}
li:first-child{
    font-weight:bold;
}
@media(min-width:${props=>props.theme.breakPoints.md}){
    ul{
        padding:0rem 2rem 2rem 0;
    }
    
}
@media(min-width:${props=>props.theme.breakPoints.xl}){
    grid-template-columns:repeat(5, 1fr);
    ul{
        padding:0 1rem 0 0;
    }
    
}
`


const LegalRow = styled.div`
display:flex;
justify-content:space-between;
padding:2rem 0 0 0;
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
p{
    0.8125rem;
    
}
@media(min-width:${props=>props.theme.breakPoints.lg}){
    flex-flow:row;
    padding:1rem 0 0 0;
    .legal-column{
        > * {
            padding:1rem 2rem;
        }
    }
}
`

const date = () =>{
    const date = new Date();
    const year = date.getFullYear();
    return year;
}

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
                     <li>Phone: <a href="#">+972.3.5108119</a></li>
                     <li>Fax: <a href="#">+972.9.8866006</a></li>
                    <li><a href="mailto:#">inquiry@utiliscorp.com</a></li>
                 </ul>
                 <ul>
                     <li>Utilis USA</li>
                     <li>16885 West Bernardo Drive</li>
                     <li>Suite 305</li>
                     <li>San Diego, CA 92127</li>
                     <li>Phone: <a href="#">+1.858.521.9442</a></li>
                    <li><a href="mailto:#">inquiry@utiliscorp.com</a></li>
                 </ul>
                 <ul>
                     <li>Utilis UK</li>
                     <li>Lynton House</li>
                     <li>7/12 Tavistock Sq</li>
                     <li>London, WC1H 9BQ</li>
                    <li><a href="mailto:#">inquiry@utiliscorp.com</a></li>
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
                        <ul>
                        <li>Partners</li>
                        <li>
                            <Link to="/partners/resellers" className="standard-link">Resellers</Link>
                        </li>
                        <li>
                            <Link to="/partners/partner-program" className="standard-link">Partner Program</Link>
                        </li>
                        <li>
                            <Link to="/partners/leak-detection-teams" className="standard-link">Leak Detection Teams</Link>
                        </li>
                        </ul> 
                            <ul>
                            <li>Resources</li>
                            <li>
                                <Link to="/resources/press" className="standard-link">Press</Link>
                            </li>
                            <li>
                                <Link to="/resources/blog" className="standard-link">Blog</Link>
                            </li>
                            <li>
                                <Link to="/resources/events" className="standard-link">Events</Link>
                            </li>
                            <li>
                                <Link to="/resources/case-studies" className="standard-link">Case Studies</Link>
                            </li>
                            </ul> 
                                <ul>
                                <li>About</li>
                                <li>
                                    <Link to="/about/contact-us" className="standard-link">Contact Us</Link>
                                </li>
                                <li>
                                    <Link to="/about/careers" className="standard-link">Careers</Link>
                                </li>
                                <li>
                                    <Link to="/about/awards" className="standard-link">Awards</Link>
                                </li>
                                <li>
                                    <Link to="/about/leadership" className="standard-link">Leadership</Link>
                                </li>
                                <li>
                                    <Link to="/about/impact" className="standard-link">Impact</Link>
                                </li>
                                </ul> 
             </LinkColumn>
            </LinkRow>
            <LegalRow>
                <Link to="/">
                <img src={BlueLogo} alt="ASTERRA logo"/></Link>
                <div className="legal-column">
                    <p>{date()} Utilis Corp. All rights reserved.</p>
                    <Link to="/privacy-policy" className="standard-link">Privacy Policy</Link>
                    <Link to="/terms-of-use"  className="standard-link">Terms of Use</Link>
                </div>
            </LegalRow>
        </Container>
    )
};
export default Footer