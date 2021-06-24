import React from 'react';
import styled from 'styled-components';

const Card = styled.div`

.profile-row{
}

img {
    width: 100%;
    filter: grayscale(100%);
    transition: ${(props) => props.theme.animationSpeeds.normal};
    &:hover{
        transform: translate(-10px, -20px);
        filter: grayscale(0%);
        box-shadow: 15px 15px ${(props) => props.theme.primaryColors.oceanBlue};
      }
  }
.title-row{
 .name{
     font-size:1.2rem;
     font-weight:bold;
     color:${props=>props.theme.secondaryColors.orange};
    }
    p{
        padding:0;
    }
}
` 

const LeadershipCard = (props) => {
    return (
        <Card>        
            <div className="profile-row">
                <img src={props.profile.img} alt={props.profile.name}/>
            </div>
            <div className="title-row">
            <p className="name">{props.profile.name}</p>
            <p>{props.profile.title}</p>
            </div>
        </Card>
    )
};
export default LeadershipCard