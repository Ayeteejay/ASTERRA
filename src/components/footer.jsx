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
grid-template-columns: 1fr 2fr;
`

const AddressColumn = styled.div`
display:grid;
grid-template-columns:repeat(3, 1fr);
grid-gap:4rem;
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
`

const LinkColumn = styled.div`
ul{
    list-style:none;
}
li{
font-size:0.8125rem;
line-height:1.6;
}
li:first-child{
    font-weight:bold;
}
`


const LegalRow = styled.div`
display:flex;
justify-content:space-between;
padding:1rem 0;
`

const LegalColumn = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
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
                      <Link to="/products/masterplan">MasterPlan</Link>
                  </li>
                  <li>
                      <Link to="/products/recover">Recover</Link>
                  </li>
                  <li>
                      <Link to="/products/earthworks">EarthWorks</Link>
                  </li>
                  </ul> 
             </LinkColumn>
            </LinkRow>
            <LegalRow>
                <img src={BlueLogo} alt="ASTERRA logo"/>
                <LegalRow>
                    <p>2021 Utilis Corp. All rights reserved.</p>
                    <LegalColumn>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                    <Link to="/terms-of-use">Terms of Use</Link>
                    </LegalColumn>
                </LegalRow>
            </LegalRow>
        </Container>
    )
};
export default Footer