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
        lineHeight:"1.3",
    },
},

// Section Spacing
sectionSpacing: {
    standard: "10rem 0",
    bottomOnly:"0 0 10rem 0",
    topOnly: "10rem 0 0 0",
}
};

const Container = styled.div`
font-family:'Inter';
display:flex;
flex-flow:column;
color:white;
span.gradient{
    background: -webkit-linear-gradient(45deg, ${props=>props.theme.primaryColors.oceanBlue},${props=>props.theme.secondaryColors.orange});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
h1{
    font-size:5.9375rem;
    line-height:1.1;
    padding:0 0 1.5rem 0;
}
h2{
    font-size:3.375rem;
}
h4{
    font-size:1.25rem;
}
p{
    line-height:1.7;
    font-size:0.95rem;
    font-weight:200;
}
.standard-link{
    color:${props=>props.theme.primaryColors.clearWhite};
    letter-spacing:1px;
    transition:${props=>props.theme.animationSpeeds.normal};
    &:hover{
        color:${props=>props.theme.secondaryColors.orange};
    }  
}
.cta-btn{
    background: ${props=>props.theme.secondaryColors.orange};
    border:none;
    color:white;
    text-transform:uppercase;
    letter-spacing:0.5px;
    transition:800ms;
    padding:1rem 1.5rem;
    border-radius:5rem;
    cursor:pointer;
    &:hover{
        background:blue;
    }
}
.cta-btn-ghost{
    background:none;
    border:1px solid ${props=>props.theme.primaryColors.clearWhite};
    color:white;
    font-size:0.95rem;
    text-transform:uppercase;
    letter-spacing:0.5px;
    transition:800ms;
    padding:1rem 1.5rem;
    border-radius:5rem;
    cursor:pointer;
    &:hover{
        background:${props=>props.theme.secondaryColors.orange};
        border:1px solid ${props=>props.theme.secondaryColors.orange};
    }
}
span.emphasize{
    color:${props=>props.theme.primaryColors.spaceBlack};
}
`;

const Layout = ({children}) => {
    return (
        
        <ThemeProvider theme={theme}>
            <Fade>
            <Container>
            <Header></Header>
                {children}
                <Footer></Footer>
            </Container>
            </Fade>
        </ThemeProvider>
    )
};
export default Layout;