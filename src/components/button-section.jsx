import React, {useState} from 'react'
import styled from 'styled-components';
import Arrow from '../images/arrow-right.svg';
import Logomark from './logomark';

const Section = styled.section`
display:flex;
justify-content:center;
margin:5rem 0;
`
const Container = styled.div`
width:80%;
position:relative;
`
const Row =  styled.div`
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
    grid-template-columns:repeat(1,1fr);
    grid-gap:1rem;
    justify-content:space-between;
    @media(min-width:${props=>props.theme.breakPoints.lg}){
        grid-gap:0 1rem;
        grid-template-columns:repeat(4,1fr);
    }
}
.dropdown-btn{
    background: none;
    border:1px solid white;
    color:white;
    text-transform:uppercase;
    text-decoration:none;
    letter-spacing:0.5px;
    transition:1000ms ease-in-out;
    padding:1rem 3rem;
    border-radius:5rem;
    font-size:0.95rem;
    cursor:pointer;
    display:flex;
    justify-content:center;
    position:relative;
    align-items:center;
    z-index:99;
    width:100%;
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
.dropdown-content-region, .dropdown-content-product, .dropdown-content-industries{
    position:absolute;
    top:0;
    left:0;
    visibility:hidden;
    background:rgba(0,43,255,1);
    border:1px solid white;
    padding:4rem 2rem 1rem 2rem;
    border-radius:25px;
    opacity:0;
    transition:300ms;
    width:100%;
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
@media (min-width:${props=>props.theme.breakPoints.lg}){
    background:rgba(0,43,255,.7);
}
}
.open-dropdown{
    visibility:visible;
    opacity:1;
    transform:translate(0,0);
}
.hide-btn{
    transform:translate(0px,70px);
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
    transition:700ms;
    padding:1rem 2rem;
    border-radius:5rem;
    font-size:0.95rem;
    cursor:pointer;
    display:flex;
    justify-content:center;
    position:relative;
    align-items:center;
    z-index:99;
    width:100%;
    &:hover{
        background:${props=>props.theme.primaryColors.oceanBlue};
    }
    svg{
        padding:0 0 0 10px;
    }
}
.run-search{
    background:white;
    color:${props=>props.theme.primaryColors.oceanBlue};
    &:hover{
        background:white;
    }
}
.run-search-icon{
   stroke: ${props=>props.theme.primaryColors.oceanBlue};
}
.search-section{
    display:flex;
}
.search-input{
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
    &::placeholder{
        color:white;
        text-transform:uppercase;
    }
}
#search-line,#search-chevron{
    transition:1s;
}
.open-search{
    width:100%;
    opacity:1;
    visibility:visible;
}

`

const Buttons = () =>{
    const [active,setActive] = useState(false);
    const [filterRegion,setfilterRegion] = useState("Region");
    const [filterIndustries, setfilterIndustries] = useState("Industries");
    const [filterProduct, setfilterProduct] = useState("Product");
    const [searchBarOpen, setSearchBarOpen] = useState(false);
    const [inputField, setInputField] = useState("");
    const [searchButtonTitle, setSearchButtonTitle] = useState("Search");
 

    // Filter Region
    const openDropdown = (category) => {
        const dropdownContent = document.querySelector(`.dropdown-content-${category}`);
        console.log(dropdownContent);
        console.log(active);
        if(active === false){
            setActive(true);
            dropdownContent.classList.add("open-dropdown");
        }
        else{
            setActive(false);
            dropdownContent.classList.remove("open-dropdown");
        }
    }
    const filterSelected = (filter, category) =>{
        if(category === "industries"){
            setfilterIndustries(filter);
        }else if(category === "region"){
            setfilterRegion(filter);
        }
        else if(category === "product"){
            setfilterProduct(filter)
        }
        const dropdownContent = document.querySelector(`.dropdown-content-${category}`);
        if(active){
            dropdownContent.classList.remove("open-dropdown");
            setActive(false);
        }
    }

    // Search Filter
    const searchSelected = (input) =>{
        const dropdownBtns = document.querySelectorAll(".dropdown-btn");
        const searchBtn = document.querySelector(".search-btn");
        const searchBar = document.querySelector(".search-input");
        const searchLine = document.querySelector("#search-line");
        const searchChevron = document.querySelector("#search-chevron");

        const btnArr = Array.from(dropdownBtns);
        if(searchBarOpen){
            btnArr.forEach((element)=>{
                console.log(element);
                element.classList.remove("hide-btn")
            })
            if(input.length > 0){
               if(input.length > 6){
                   setSearchButtonTitle(`${input.slice(0,5)}...`);
               }
               else{
                setSearchButtonTitle(input);
               }               
            };
            searchBtn.classList.remove("run-search") ;
            searchBar.classList.remove("open-search");
            searchLine.classList.remove("run-search-icon");
            searchChevron.classList.remove("run-search-icon");
            setSearchBarOpen(false);
        }else{
            btnArr.forEach((element)=>{
                console.log(element);
                element.classList.add("hide-btn")
            })
            searchBar.classList.add("open-search");     
            searchBtn.classList.add("run-search") ;
            searchLine.classList.add("run-search-icon");
            searchChevron.classList.add("run-search-icon");
            setSearchBarOpen(true);
        }
console.log(input)
    }
    return (
        <Section>
            <Container>
            <div className="title"><h2>Buttons</h2></div>
                <Row>
                    <div className="subsection">
                 <div className="btn-row">
                     <Logomark></Logomark>
                 </div>
                        <div className="btn-row">
                        <a href="/" className="primary-btn-orange">Primary Link</a>
                        <a href="/" className="primary-btn-blue">Primary Link</a>
                        <a href="/" className="primary-btn-lime">Primary Link</a>
                        </div>
                        <div className="btn-row">
                        <a href="/" className="secondary-btn">Secondary Link</a>
                        </div>
                        <div className="btn-row">
                        <a href="/" className="tertiary-btn">Tertiary Link 1</a>
                        <a href="/" className="tertiary-btn-alt">Tertiary Link 2</a>
                        </div>
                    </div>

                    <div className="subsection">
                                                <div className="arrow-link"><p>Lower Tiered Link</p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="28.635" height="16.707" viewBox="0 0 28.635 16.707">
                        <g id="Group_39419" data-name="Group 39419" transform="translate(-1272.365 13934.225)">
                            <g id="Group_39276" data-name="Group 39276" transform="translate(4237.936 -23484.371)">
                            <line id="arrow-line" data-name="Line 24" x1="28" transform="translate(-2965.571 9558.5)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"/>
                            <path id="chevron" data-name="Path 61563" d="M-2937.5,9566.5l8-8-8-8" transform="translate(-8.143)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"/>
                            </g>
                        </g>
                        </svg>
                        </div>
                        </div>
                    <div className="subsection">
                    <p>
                    Example of a standard <a href="/" className="text-link">hyperlink</a> in text.
                    </p>
                    </div>
                    <div className="subsection">
                    <div className="filter-row">

                        {/* Product Button */}
                        <div className="dropdown-section">
                        <button className="dropdown-btn" onClick={()=>openDropdown("product")}>{filterProduct}<svg xmlns="http://www.w3.org/2000/svg" width="30" height="16.707" viewBox="0 0 28.635 16.707">
                        <g id="dropdown-icon" data-name="Group 39419" transform="translate(-1272.365 13934.225)">
                            <g id="Group_39276" data-name="Group 39276" transform="translate(4237.936 -23484.371)">
                            <line id="dropdown-line" data-name="Line 24" x1="28" transform="translate(-2965.571 9558.5)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"/>
                            <path id="dropdown-chevron" data-name="Path 61563" d="M-2937.5,9566.5l8-8-8-8" transform="translate(-8.143)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"/>
                            </g>
                        </g>
                        </svg></button>
                        <div className="dropdown-content-product">
                                <ul>                                
                                <li onClick={()=>filterSelected("MasterPlan", "product")}>MasterPlan</li>
                                    <li onClick={()=>filterSelected("Recover", "product")}>Recover</li>
                                <li onClick={()=>filterSelected("EarthWorks", "product")}>EarthWorks</li>
                                
                                </ul>
                            </div>
                        </div>

                        {/* Industries Button */}
                        <div className="dropdown-section">
                        <button className="dropdown-btn" onClick={()=>openDropdown("industries")}>{filterIndustries}<svg xmlns="http://www.w3.org/2000/svg" width="30" height="16.707" viewBox="0 0 28.635 16.707">
                        <g id="dropdown-icon" data-name="Group 39419" transform="translate(-1272.365 13934.225)">
                            <g id="Group_39276" data-name="Group 39276" transform="translate(4237.936 -23484.371)">
                            <line id="dropdown-line" data-name="Line 24" x1="28" transform="translate(-2965.571 9558.5)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"/>
                            <path id="dropdown-chevron" data-name="Path 61563" d="M-2937.5,9566.5l8-8-8-8" transform="translate(-8.143)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"/>
                            </g>
                        </g>
                        </svg></button>
                        <div className="dropdown-content-industries">
                                <ul>                                
                                <li onClick={()=>filterSelected("Lorem", "industries")}>Lorem</li>
                                    <li onClick={()=>filterSelected("Ipsum", "industries")}>Ipsum</li>
                                <li onClick={()=>filterSelected("Dolor", "industries")}>Dolor</li>
                                
                                </ul>
                            </div>
                        </div>

                    {/* Region Button */}
                    <div className="dropdown-section">
                        <button className="dropdown-btn" onClick={()=>openDropdown("region")}>{filterRegion}<svg xmlns="http://www.w3.org/2000/svg" width="30" height="16.707" viewBox="0 0 28.635 16.707">
                    <g id="dropdown-icon" data-name="Group 39419" transform="translate(-1272.365 13934.225)">
                        <g id="Group_39276" data-name="Group 39276" transform="translate(4237.936 -23484.371)">
                        <line id="dropdown-line" data-name="Line 24" x1="28" transform="translate(-2965.571 9558.5)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"/>
                        <path id="dropdown-chevron" data-name="Path 61563" d="M-2937.5,9566.5l8-8-8-8" transform="translate(-8.143)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"/>
                        </g>
                    </g>
                    </svg></button>
                            <div className="dropdown-content-region">
                                <ul>                                
                                <li onClick={()=>filterSelected("Africa", "region")}>Africa</li>
                                    <li onClick={()=>filterSelected("Asia", "region")}>Asia</li>
                                <li onClick={()=>filterSelected("Europe", "region")}>Europe</li>
                                
                                <li onClick={()=>filterSelected("USA", "region")}>USA</li>
                                </ul>
                            </div>
                        </div>
      
                        {/* Search Field */}
                        <div className="search-section">
                        <button className="search-btn" onClick={()=>searchSelected(inputField)}>Search<svg xmlns="http://www.w3.org/2000/svg" width="30" height="16.707" viewBox="0 0 28.635 16.707">
                        <g id="dropdown-icon" data-name="Group 39419" transform="translate(-1272.365 13934.225)">
                            <g id="Group_39276" data-name="Group 39276" transform="translate(4237.936 -23484.371)">
                            <line id="search-line" data-name="Line 24" x1="28" transform="translate(-2965.571 9558.5)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"/>
                            <path id="search-chevron" data-name="Path 61563" d="M-2937.5,9566.5l8-8-8-8" transform="translate(-8.143)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="1"/>
                            </g>
                        </g>
                        </svg></button>
                        <input className="search-input" placeholder="Input search terms" onChange={(event)=>setInputField(event.target.value)}></input>
             
                        </div>
                            </div>
                    </div>
                </Row>
            </Container>
        </Section>
    )
};
export default Buttons