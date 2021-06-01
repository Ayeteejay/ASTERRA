import React, {useState} from 'react';
import styled from 'styled-components';

const Card = styled.div`
display:flex;
transition:${props=>props.theme.animationSpeeds.normal};
cursor:pointer;
&:hover{
    background:${props=>props.theme.primaryColors.oceanBlue};
}
`
const Number = styled.div`
padding:0.5rem 1rem 0 0;
`
const Title = styled.div`
p{
    font-size:3.375rem;
    font-weight:bold;
    padding:0;
}
`
const Description = styled.div`
display:none;
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
            <Number>
                <p>0{props.solution.id}</p></Number>
            <Title>
                <p>{props.solution.name}</p>
            </Title>
        <Description style={{display:activeSolution ? "block" : "none"}}>
            <p>{props.solution.description}</p>
        </Description>
        </Card>
    )
};
export default Solution;