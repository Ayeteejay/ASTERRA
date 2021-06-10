import React, {useState} from 'react';
import styled from 'styled-components';

const Section = styled.section`
display:flex;
justify-content:center;
margin:5rem 0;
`
const Container = styled.div`
width:80%;
`
const Row =  styled.div`
.subsection{
    margin:4rem 0;
    display:flex;
    justify-content:space-between;
    flex-flow:column;
    .menu-row{
        margin:1rem 0;
        padding:1rem;
        display:flex;
        a{
            margin:0 1rem 0 0;
        }
    }
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
`
const Menu = () =>{

    let menuActive = false;
    const openMenu = () => {
        const top = document.querySelector(".top-line");
        const bottom = document.querySelector(".bottom-line");      
        const spiral = Array.from(document.querySelectorAll(".angle-line"));

        if(menuActive === false){            
            top.classList.add("hide-top");
            spiral.forEach((element,index) => {
                element.classList.add(`rotate-${index+1}`);            
            });         
            bottom.classList.add("hide-btm");   
            menuActive = true;
        }else{
            menuActive = false;            
            top.classList.remove("hide-top");
            spiral.forEach((element,index) => {
                element.classList.remove(`rotate-${index+1}`);            
            });      
            bottom.classList.remove("hide-btm");
      
        }
    };
    return (
  <Section>
      <Container>
      <div className="title"><h2>Menu</h2></div>
      <Row>
                <div className="subsection">
                    <div className="menu-row">
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
                    </div>

                </div>
      </Row>
      </Container>
  </Section>
      
    )
};
export default Menu