import React, {useState} from 'react';
import styled from 'styled-components';
import ArrowImage from '../images/arrow-right-black.svg';

const Card = styled.div`
display:flex;
transition:${props=>props.theme.animationSpeeds.normal};
cursor:pointer;
justify-content:space-between;
align-items:flex-start;
&:hover{
color:${props=>props.theme.primaryColors.oceanBlue};
}
`

const Content = styled.div`
.solution-row{
display:flex;
}
.solution-id{
    padding:0.5rem 1rem 0 0;
}
.solution-dropdown{

}
.solution-title{
    p{
        font-size:3.375rem;
        font-weight:bold;
        padding:0;
    }
}
.solution-description{
    display:none;
}
`

const Arrow = styled.div`
padding:2rem 0 0 0;
`



const Solution = (props) =>{
    const [activeSolution,setActiveSolution] = useState(false);
    const solutionSwitch = () =>{
        if(!activeSolution){
            setActiveSolution(true);
            console.log("true")
        }else{
            setActiveSolution(false);
            console.log("false")
        }
    }
    return (
        <Card onClick={()=>solutionSwitch()}>
            <Content>
            <div className="solution-row">
                 <div className="solution-id">
                <p>0{props.solution.id}</p>
                </div>
                <div className="solution-dropdown">
                <div className="solution-title">
                    <p>{props.solution.name}</p>       
                    </div>
                   <div className="solution-description" style={{display:activeSolution ? "block" : "none"}}>
                   <p>{props.solution.description}</p>
                   </div>
                </div>
            </div>
            </Content>
            <Arrow>
                <img src={ArrowImage} alt="Solution link button"/>
            </Arrow>
        </Card>
    )
};
export default Solution;