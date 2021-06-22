import React, {useState} from 'react';
import styled from 'styled-components';


const Container =  styled.div`
.subsection{
    margin:4rem 0;
    display:flex;
    justify-content:space-between;
    flex-flow:column;
    .btn-row{
        margin:1rem 0;
        padding:1rem;
        display:flex;
        flex-wrap:wrap;
        a{
      
            margin:0.5rem 1rem 0.5rem 0;
        }
        @media(min-width:${props=>props.theme.breakPoints.lg}){
            a{
                margin:0 1rem 0 0;
            }
        }
    }
}
.filter-row{
    display:grid;
    grid-template-columns:repeat(4,1fr);
    grid-gap:0 1rem;
}
.dropdown-btn{
    background: none;
    border:1px solid white;
    color:white;
    text-transform:uppercase;
    text-decoration:none;
    letter-spacing:0.5px;
    transition:${props=>props.theme.animationSpeeds.normal};
    padding:1rem 3rem;
    border-radius:5rem;
    font-size:0.95rem;
    cursor:pointer;
    display:flex;
    justify-content:center;
    position:relative;
    align-items:center;
    z-index:99;
    width:275px;
    &:hover{
        background:${props=>props.theme.primaryColors.oceanBlue};
    }
    svg{
        padding:0 0 0 10px;
    }
}

.dropdown-section{
    position:relative;    
}
.dropdown-content-region{
    position:absolute;
    top:0;
    left:0;
    visibility:hidden;
    background:rgba(0,43,255,.7);
    border:1px solid white;
    padding:4rem 2rem 1rem 2rem;
    border-radius:25px;
    opacity:0;
    transition:300ms;
    
    width:275px;
    ul{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-flow:column;
    }
    li{
        padding:0.2rem 0;
        cursor:pointer;
        
        &::before{
            content:"";
        }
    }

}
.open-dropdown{
    visibility:visible;
    opacity:1;
    transform:translate(0,0);

}
.hide-btn{
    transform:translate(0,20px);
    visibility:hidden;
    opacity:0;
}
.show-btn{
    transform:(0,0);
    visibility:visible;
    opacity:1;
}

.search-btn{
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
    display:flex;
    justify-content:center;
    position:relative;
    align-items:center;
    z-index:99;
    width:275px;
    &:hover{
        background:${props=>props.theme.primaryColors.oceanBlue};
    }
    svg{
        padding:0 0 0 10px;
    }
}
.search-section{
    display:flex;
justify-self:flex-end;
}
.search-field{
    background:rgba(0,43,255,.7);
    border:1px solid white;
    width:0%;
    border-radius:25px;
    display:flex;
    padding:1rem 3rem; 
    align-items:center;
    position:absolute;
    right:0;
    visibility:hidden;
    opacity:0;
    transition:1s;
    font-size:0.95rem;
    color:white;
}
.open-search{
    width:100%;
    opacity:1;
    visibility:visible;
}
`


const Section = () =>{
    return (
        <Container>
          <div className="subsection">
                            <div className="filter-row">
                            <div className="dropdown-section">
                                                <button className="dropdown-btn" onClick={()=>openDropdown()}>{filterRegion}<svg xmlns="http://www.w3.org/2000/svg" width="30" height="16.707" viewBox="0 0 28.635 16.707">
                                        <g id="dropdown-icon" data-name="Group 39419" transform="translate(-1272.365 13934.225)">
                                            <g id="Group_39276" data-name="Group 39276" transform="translate(4237.936 -23484.371)">
                                            <line id="dropdown-line" data-name="Line 24" x1="28" transform="translate(-2965.571 9558.5)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"/>
                                            <path id="dropdown-chevron" data-name="Path 61563" d="M-2937.5,9566.5l8-8-8-8" transform="translate(-8.143)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"/>
                                            </g>
                                        </g>
                                        </svg></button>
                                                <div className="dropdown-content-region">
                                                    <ul>                                
                                                    <li onClick={()=>filterSelected("Africa")}>Africa</li>
                                                        <li onClick={()=>filterSelected("Asia")}>Asia</li>
                                                    <li onClick={()=>filterSelected("Europe")}>Europe</li>
                                                    
                                                    <li onClick={()=>filterSelected("USA")}>USA</li>
                                                    </ul>
                                                </div>
                                            </div>
                                 <button className="dropdown-btn">{filterProduct}<svg xmlns="http://www.w3.org/2000/svg" width="30" height="16.707" viewBox="0 0 28.635 16.707">
                        <g id="dropdown-icon" data-name="Group 39419" transform="translate(-1272.365 13934.225)">
                            <g id="Group_39276" data-name="Group 39276" transform="translate(4237.936 -23484.371)">
                            <line id="dropdown-line" data-name="Line 24" x1="28" transform="translate(-2965.571 9558.5)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"/>
                            <path id="dropdown-chevron" data-name="Path 61563" d="M-2937.5,9566.5l8-8-8-8" transform="translate(-8.143)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"/>
                            </g>
                        </g>
                        </svg></button>


                        <button className="dropdown-btn">Industries<svg xmlns="http://www.w3.org/2000/svg" width="30" height="16.707" viewBox="0 0 28.635 16.707">
                        <g id="dropdown-icon" data-name="Group 39419" transform="translate(-1272.365 13934.225)">
                            <g id="Group_39276" data-name="Group 39276" transform="translate(4237.936 -23484.371)">
                            <line id="dropdown-line" data-name="Line 24" x1="28" transform="translate(-2965.571 9558.5)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"/>
                            <path id="dropdown-chevron" data-name="Path 61563" d="M-2937.5,9566.5l8-8-8-8" transform="translate(-8.143)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"/>
                            </g>
                        </g>
                        </svg></button>
      
                        <div className="search-section">
                                 <button className="search-btn" onClick={()=>searchSelected()}>Search<svg xmlns="http://www.w3.org/2000/svg" width="30" height="16.707" viewBox="0 0 28.635 16.707">
                        <g id="dropdown-icon" data-name="Group 39419" transform="translate(-1272.365 13934.225)">
                            <g id="Group_39276" data-name="Group 39276" transform="translate(4237.936 -23484.371)">
                            <line id="dropdown-line" data-name="Line 24" x1="28" transform="translate(-2965.571 9558.5)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"/>
                            <path id="dropdown-chevron" data-name="Path 61563" d="M-2937.5,9566.5l8-8-8-8" transform="translate(-8.143)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"/>
                            </g>
                        </g>
                        </svg></button>
            
                        <input className="search-field" placeholder="Input search terms"></input>
             
                </div>
                            </div>
                    </div>
        </Container>
    )
};
export default Section