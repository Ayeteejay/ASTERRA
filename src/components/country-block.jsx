import React, {useState}  from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
border-bottom: 1px solid #5d5d5d;
padding: 0 0 0.75rem 0;
display:flex;
justify-content:space-between;
cursor:pointer;
align-items:flex-end;
.title-col{
    transition:all 250ms;
}
.country-name{
    transition:all 250ms;
}
.arrow-col{
    position:relative;
    height:30px;
    width:30px;
    transition:all 500ms;
    .line{
        height:1px;
        width:30px;
        background:white;
        position:absolute;
        top:50%;
        right:0;
        transition:all 500ms;
    }
    .chevron{
        transition:all 250ms;
        position:absolute;
        bottom:9px;
        right:1px;
        display: inline-block;
        border-right: 1px solid white;
        border-bottom: 1px solid white;
        width: 12px; height: 12px;
        transform: rotate(-45deg);
    }
    .chevron-active{
        border-right: 1px solid ${props=>props.theme.secondaryColors.orange};
        border-bottom: 1px solid ${props=>props.theme.secondaryColors.orange};
    }
    .hide-line{
        width:0px;
        opacity:0;
    }
}
.active{
    color:${props=>props.theme.secondaryColors.orange};
}
.rotate{
    transform:rotate(90deg) translate(-6px,0);
}
&:hover{
    .country-name{
        color:${props=>props.theme.secondaryColors.orange};
    }
    .line{
        background:${props=>props.theme.secondaryColors.orange};
    }
    .chevron{
        border-right: 1px solid ${props=>props.theme.secondaryColors.orange};
        border-bottom: 1px solid ${props=>props.theme.secondaryColors.orange};
    }
}
`



const CountryRow = (props) => {
    const toggleArrow = () =>{        
        const lineElem = document.querySelector(".line");
        const chevronElem = document.querySelector(".chevron");
        const countryElem = document.querySelector(".country-name");
        const arrowElem = document.querySelector(".arrow-col");
        lineElem.classList.toggle("hide-line");
        arrowElem.classList.toggle("rotate");
        countryElem.classList.toggle("active");
        chevronElem.classList.toggle("chevron-active");
    }
    return (
        <CardWrapper onClick={toggleArrow}>
           <div className="title-col">
           <h5 className="country-name">{props.data.title}</h5>
           </div>
           <div className="arrow-col">               
               <span className="line"></span>
               <span className="chevron"></span>
           </div>
        </CardWrapper>
    )
};
export default CountryRow;