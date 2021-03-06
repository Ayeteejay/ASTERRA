import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

import MobileProductCards from './mobile-product-cards';

import BlueLogo from '../images/asterra-blue-logo.svg';
import Chevron from '../images/chevron.svg';
import Arrow from '../images/arrow-right.svg';
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
ul{
    list-style:none;
    display:flex;
}
.mobile-menu{
    background: ${props=>props.theme.secondaryColors.slate};
    border-top:1px solid ${props=>props.theme.primaryColors.clearWhite};
    opacity:.25;
    width:100%;
    transform:translate(-100%, 0px);
    transition:${props=>props.theme.animationSpeeds.normal};
    position:absolute;
    top:100%;
    left:0;
    padding:2rem 3rem 3rem 3rem;
    ul{
        flex-flow:column;
    }
    li{
        padding:1rem 0 0.6rem 0;
        margin:0.5rem 0;
        width:100%;
        &:not(:last-child){
            border-bottom:1px solid ${props=>props.theme.secondaryColors.stone};
        }
        &:last-child{
            display:flex;
            justify-content:center;
        }
    }
    .drawer{
        display:flex;
        justify-content:space-between;
        cursor:pointer;
        transition:${props=>props.theme.animationSpeeds.fast};
        &:hover{
            color:${props=>props.theme.secondaryColors.orange};
        }
    }
    .drawer-content{
        opacity:0;
        max-height:0;
        display:flex;
        flex-flow:column;
        justify-content:center;
        transition:${props=>props.theme.animationSpeeds.normal};
        visibility:hidden;
    }
    .open{
        max-height:800px;
        opacity:1;
        padding:1.5rem 0;
        visibility:visible;
    }
    .chevron{
        width:6px;
    }
    .arrow{
        width:20px;
        transition:${props=>props.theme.animationSpeeds.fast};
    }
    .rotation{
        transform:rotate(90deg);
    }
    .product-drawer{
        width:100%;
        padding:1.5rem;
        border:1px solid ${props=>props.theme.secondaryColors.stone};
        background:${props=>props.theme.primaryColors.spaceBlack};
        display:flex;
        .product-title{
            p{
                padding:0;
            }
        }
    }
    .standard-drawer{
        width:100%;
        ul{
            list-style:none;
        }
        li{
            border:none;
            padding:0;
            margin:0.2rem 0;
            &:last-child{
                display:block;     
            }
        }
        a{
             text-transform:none;
        }
    }
}
.active-menu{
    opacity:1;
    width:100%;
    transform:translate(0px, 0px);
}
`

const LinkColumn = styled.div`
display:none;
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
cursor:pointer;
position:relative;
.top-line, .middle-line, .bottom-line, .angle-line{
    height:2px;
    width:30px;
    margin: 0 0 4px 0;
    display:block;
    background-color:${props=>props.theme.primaryColors.clearWhite};
    transition:${props=>props.theme.animationSpeeds.normal};
}
.angle-line{
    position:absolute;
    top:6px;
    left:0; 
}
.hide-top{
    opacity:0;
    transform:translate(0,10px);
}
.hide-btm{
opacity:0;
transform:translate(0,-10px);
}
.rotate-1{
    transform:rotate(22.5deg);
}
.rotate-2{
    transform:rotate(45deg);
}
.rotate-3{
    transform:rotate(67.5deg);
}
.rotate-4{
    transform:rotate(90deg);
}
.rotate-5{
    transform:rotate(112.5deg);
}
.rotate-6{
    transform:rotate(135deg);
}
.rotate-7{
    transform:rotate(157.5deg);
}
@media(min-width:${props=>props.theme.breakPoints.lg}){
    display:none;
}
`



const Header = () =>{

    // All events must be wrapped in functions
    
    // Working below
    // const [viewSize, setViewSize] = useState(
    //     window.innerWidth
    // );

    // useEffect(()=>{            
    //   const setSize = () =>{ setViewSize(window.innerWidth)};
    //   window.addEventListener("resize", setSize);
    //   return () => window.removeEventListener("resize",setSize);
    // },[setViewSize]);
  
    // const [isDesktop,setDesktop] = useState(false);
    // useEffect(()=>{
    //     if(viewSize > 991){
    //         setDesktop(true);            
    //     }else{
    //         setDesktop(false);
            
    //     };
    // });
    // Working above
    
    let menuActive = false;
    const openMenu = () => {
        const top = document.querySelector(".top-line");
        const bottom = document.querySelector(".bottom-line");      
        const spiral = Array.from(document.querySelectorAll(".angle-line"));
        const menu = document.querySelector(".mobile-menu");
        if(menuActive === false){            
            top.classList.add("hide-top");
            spiral.forEach((element,index) => {
                element.classList.add(`rotate-${index+1}`);            
            });         
            bottom.classList.add("hide-btm");
            menu.classList.add("active-menu");
            menuActive = true;
        }else{
            menuActive = false;            
            top.classList.remove("hide-top");
            spiral.forEach((element,index) => {
                element.classList.remove(`rotate-${index+1}`);            
            });      
            bottom.classList.remove("hide-btm");
            menu.classList.remove("active-menu");
        }
    };

    const openDrawer = (dropdownSection) =>{
        const icon = document.querySelectorAll(".arrow")[dropdownSection-1];
        const content = document.querySelectorAll(".drawer-content")[dropdownSection-1];
        if(content.classList.contains("open")){
            content.classList.remove("open");
            icon.classList.remove("rotation");
        }else{
            content.classList.add("open");
            icon.classList.add("rotation");
        }
    }
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
          <MobileToggle onClick={()=>openMenu()}>
              <span className="top-line"></span>
              <span className="middle-line"></span>              
              <span className="angle-line"></span>
              <span className="angle-line"></span>
              <span className="angle-line"></span>
              <span className="angle-line"></span>
              <span className="angle-line"></span>
              <span className="angle-line"></span>
              <span className="angle-line"></span>
              <span className="angle-line"></span>            
              <span className="bottom-line"></span>
          </MobileToggle>
                <div className="mobile-menu">
                    <ul>
                    <li><div className="drawer" onClick={()=>openDrawer(1)}>Products<img src={Arrow} className="arrow" alt="Dropdown indicator"/></div>
                        <div className="drawer-content">
                            {/* <div className="product-drawer">
                                <div className="product-title">
                                <h4>MasterPlan</h4>
                                <p>Pipe Deficiency Assessment</p>
                                </div>                             
                            </div> */}
                            <MobileProductCards></MobileProductCards>
                        </div>
                    </li>
                    <li><div onClick={()=>openDrawer(2)} className="drawer">Solutions<img src={Arrow} className="arrow" alt="Dropdown indicator"/></div>
                    <div className="drawer-content">
                        <div className="standard-drawer">
                      
                            <ul>
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
                   
                        </div>
                    </div>
                    </li>
                    <li><div onClick={()=>openDrawer(3)} className="drawer">Partners<img src={Arrow} className="arrow" alt="Dropdown indicator"/></div>
                    <div className="drawer-content">
                        <div className="standard-drawer">
                      
                            <ul>
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
                   
                        </div>
                    </div>
                    </li>
                    <li><div onClick={()=>openDrawer(4)} className="drawer">Resources<img src={Arrow} className="arrow" alt="Dropdown indicator"/></div>
                    <div className="drawer-content">
                        <div className="standard-drawer">
                      
                            <ul>
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
                   
                        </div>
                    </div>
                    </li>
                    <li><div onClick={()=>openDrawer(5)} className="drawer">About<img src={Arrow} className="arrow" alt="Dropdown indicator"/></div>
                    <div className="drawer-content">
                        <div className="standard-drawer">                      
                            <ul>
                            <li>
                                    <Link to="/about" className="standard-link">About Us</Link>
                                </li>
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
                        </div>
                    </div>
                    </li>
                    <li><Link to="/demo" className="cta-btn-ghost">Schedule a demo</Link></li>
                    </ul>
                </div>
        </Container>
    )
};
export default Header