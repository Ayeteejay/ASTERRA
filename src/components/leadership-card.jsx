import React from 'react';
import styled from 'styled-components';

const Card = styled.div`

.profile-row{

}
.title-row{
 .name{
     font-size:1.2rem;
     font-weight:bold;
     color:${props=>props.theme.secondaryColors.orange};
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