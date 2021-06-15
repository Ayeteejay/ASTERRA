import React from 'react';
import "../styles/global.css";
import styled, {ThemeProvider} from 'styled-components';
import Header from '../components/header';
import Footer from '../components/footer';
import Fade from 'react-reveal'

const theme = {

// Primary Colors
primaryColors: {
    oceanBlue: "#002bff",
    clearWhite: "#fff",
    spaceBlack: "#000",
},

// Secondary Colors
secondaryColors:{
    orange: "#ff4d1d",
    lime: "#13cca8",
    slate: "#282828",
    pavement: "#e5e5e5",
    granite: "#282828",
    stone:"#696969",
    rock:"#707070",
},

// Animation Transisitions
animationSpeeds:{
    slow:"1s",
    normal:"500ms",
    fast: "250ms",
},

// Breakpoints
breakPoints:{
    xs: "450px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    xxl: "1400px",
},

// Font Family
fontFamily:{
    font: "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap'), sans-serif",
},

fontSize:{
    xl: {
        size:"5.9375rem",
        lineHeight:"1.2",
    },
    lg:{
        size:"3.375rem",
        lineHeight:"1.1",
    }
},

// Section Spacing
sectionSpacing: {
    standard: "10rem 0",
    bottomOnly:"0 0 10rem 0",
    topOnly: "10rem 0 0 0",
}
};

const Container = styled.div`
font-family:'Inter', sans-serif;
display:flex;
flex-flow:column;
color:${props=>props.theme.primaryColors.clearWhite};
span.gradient{
    background: -webkit-linear-gradient(45deg, ${props=>props.theme.primaryColors.oceanBlue},${props=>props.theme.secondaryColors.orange});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
h1{
    font-size:3.375rem;
    
    padding:0 0 1.5rem 0;
}
h2{
    font-size:1.875rem;
}
h3{
    font-size:1.375rem;
}
h4{
    font-size:1.25rem;
}
h5{
    font-size:1rem;
}
h6{
    font-size:0.95rem;
}
p{
    line-height:1.7;
    font-size:0.95rem;
    font-weight:200;
}
.quotation{
    font-size:1.875rem;
    font-weight:200;
    line-height:1.25;
    &::before{
        content: '"';
        position: absolute;
        margin-left: -.4em;
    }
}
@media (min-width:${props=>props.theme.breakPoints.lg}){
    h1{
        font-size:5.9375rem;
        
        padding:0 0 1.5rem 0;
    }
    h2{
        font-size:3.375rem;
    }
    h3{
        font-size:1.875rem;
    }
    h4{
        font-size:1.375rem;
    }h5{
        font-size:1.25rem;
    }
    h6{
        font-size:1rem;
    }
    .quotation{
        font-size:3.75rem;
        &::before{
            content: '"';
            position: absolute;
            margin-left: -.4em;
        }
    }
}
ul{
    list-style:none;
}
li{
    line-height:1.7;
    &::before{
        content:'•';
        color:red;
        padding:0 0.3rem 0 0;
    }
}

span.emphasis{
    color:${props=>props.theme.primaryColors.oceanBlue};
}
.standard-link{
    color:${props=>props.theme.primaryColors.clearWhite};
    letter-spacing:1px;
    transition:${props=>props.theme.animationSpeeds.normal};
    &:hover{
        color:${props=>props.theme.secondaryColors.orange};
    }  
}
.text-link{
 display:inline-block;
 position:relative;
 color:${props=>props.theme.secondaryColors.orange};
 font-weight:bold;
 text-decoration:none;
 &:after{
     content:'';
     position:absolute;
     width:0%;
     height:1px;
     bottom:0;
     left:0;
     background: ${props=>props.theme.secondaryColors.orange};
     transform-origin:bottom right;
     transition:${props=>props.theme.animationSpeeds.fast};
 }
}
.text-link:hover:after{
       width:100%;
       display:flex;
       justify-content:space-between;
       
}
.arrow-link{
    width:250px;
    justify-content:space-between;
    display:flex;
    align-items:center;
    cursor:pointer;
    p{
        text-transform:uppercase;
        font-weight:bold;
        transition:${props=>props.theme.animationSpeeds.normal};
    }
#arrow-line,#chevron{
    transition:${props=>props.theme.animationSpeeds.normal};
}

 &:hover{
    p{
        color:${props=>props.theme.secondaryColors.orange};
    }
    #arrow-line{
        stroke: ${props=>props.theme.secondaryColors.orange};        
    }
    #chevron{
        stroke:${props=>props.theme.secondaryColors.orange};
    }
 }
}

.arrow-link-normal{
    justify-content:space-between;
    display:flex;
    align-items:center;
    cursor:pointer;
    p{
        text-transform:uppercase;
        font-weight:bold;
        transition:${props=>props.theme.animationSpeeds.normal};
    }
    #arrow-line-normal,#chevron-normal{
        transition:${props=>props.theme.animationSpeeds.normal};
    }
}

.primary-btn-orange{
    background: ${props=>props.theme.secondaryColors.orange};
    border:1px solid ${props=>props.theme.secondaryColors.orange};
    color:black;
    text-transform:uppercase;
    text-decoration:none;
    letter-spacing:0.5px;
    transition:${props=>props.theme.animationSpeeds.normal};
    padding:1rem 2rem;
    border-radius:5rem;
    font-size:0.95rem;
    cursor:pointer;
    &:hover{
        background:rgba(255,77,29,.14);
        color:${props=>props.theme.secondaryColors.orange};
    }
}
.primary-btn-blue{
    background: ${props=>props.theme.primaryColors.oceanBlue};
    border:1px solid ${props=>props.theme.primaryColors.oceanBlue};
    color:white;
    text-transform:uppercase;
    text-decoration:none;
    letter-spacing:0.5px;
    transition:${props=>props.theme.animationSpeeds.normal};
    padding:1rem 2rem;
    border-radius:5rem;
    font-size:0.95rem;
    cursor:pointer;
    &:hover{
        background:rgba(0,43,255,.14);
        color:${props=>props.theme.primaryColors.oceanBlue};
    }
}
.primary-btn-lime{
    background: ${props=>props.theme.secondaryColors.lime};
    border:1px solid ${props=>props.theme.secondaryColors.lime};
    color:black;
    text-transform:uppercase;
    text-decoration:none;
    letter-spacing:0.5px;
    transition:${props=>props.theme.animationSpeeds.normal};
    padding:1rem 2rem;
    border-radius:5rem;
    font-size:0.95rem;
    cursor:pointer;
    &:hover{
        background:rgba(19,204,168,.32);
        color:${props=>props.theme.secondaryColors.lime};
    }
}
.secondary-btn{
    background: none;
    border:1px solid ${props=>props.theme.secondaryColors.lime};
    color:${props=>props.theme.secondaryColors.lime};
    text-transform:uppercase;
    text-decoration:none;
    letter-spacing:0.5px;
    transition:${props=>props.theme.animationSpeeds.normal};
    padding:1rem 2rem;
    border-radius:5rem;
    font-size:0.95rem;
    cursor:pointer;
    &:hover{
        background:rgba(19,204,168,.32);
        color:${props=>props.theme.secondaryColors.lime};
    }
}
.tertiary-btn{
    background: none;
    border:1px solid white;
    color:white;
    text-transform:uppercase;
    text-decoration:none;
    letter-spacing:0.5px;
    transition:${props=>props.theme.animationSpeeds.normal};
    padding:1rem 2rem;
    border-radius:5rem;
    font-size:0.95rem;
    cursor:pointer;
    &:hover{
        background:rgba(255,77,29,.14);
        border:1px solid ${props=>props.theme.secondaryColors.orange};
        color:${props=>props.theme.secondaryColors.orange};
    }
}
.tertiary-btn-alt{
    background: none;
    border:1px solid white;
    color:white;
    text-transform:uppercase;
    text-decoration:none;
    letter-spacing:0.5px;
    transition:${props=>props.theme.animationSpeeds.normal};
    padding:1rem 2rem;
    border-radius:5rem;
    font-size:0.95rem;
    cursor:pointer;
    &:hover{
       background:white;
       color:black;
    }
}
.ghost-btn{
    background: none;
    border:1px solid white;
    color:white;
    text-transform:uppercase;
    text-decoration:none;
    letter-spacing:0.5px;
    transition:${props=>props.theme.animationSpeeds.normal};
    padding:1rem 2rem;
    border-radius:5rem;
    font-size:0.95rem;
    cursor:pointer;
    &:hover{
        background:rgba(255,77,29,.14);
        border:1px solid ${props=>props.theme.secondaryColors.orange};
        color:${props=>props.theme.secondaryColors.orange};
    }
}
.card-btn{
    background: none;
    border:1px solid white;
    color:white;
    text-transform:uppercase;
    text-decoration:none;
    letter-spacing:0.5px;
    transition:${props=>props.theme.animationSpeeds.normal};
    padding:1rem 2rem;
    border-radius:5rem;
    font-size:0.95rem;
    cursor:pointer;
}
span.emphasize{
    color:${props=>props.theme.primaryColors.spaceBlack};
}
.title {
    border-bottom: 1px solid #5d5d5d;
    padding: 0 0 1.5rem 0;
    margin: 0 0 2rem 0;
  }
.section-indicator{
    position:fixed;
    bottom:11em;
    left:-4em;
    transform:rotate(-90deg);
    text-transform:uppercase;
    display:flex;
    justify-content:center;
    align-items:center;
    p{
        font-size:0.8rem;
    }
    .line{
        height:1px;
        width:75px;
        display:block;
        background:white;
        margin-right:0.5em;        
        &:before{
            content:"";
            height:7px;
            width:7px;
            
            border-radius:50%;
            background:white;
            display:block;
            position:absolute;
            top:35%;
        }
    }
    .circle{
        height:8px;
        width:8px;
        border-radius:50%;
        background:white;
    }
}
.img-fluid{
    max-width:100%;
}
`;

const Layout = ({children}) => {
    return (
        
        <ThemeProvider theme={theme}>
            <Fade>
            <Container>
            {/* <Header></Header> */}
                {children}
                <Footer></Footer>
            </Container>
            </Fade>
        </ThemeProvider>
    )
};
export default Layout;