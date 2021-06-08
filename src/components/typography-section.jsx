import React from 'react'
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
}
`

const Typography = () =>{
    return (
        <Section>
            <Container>
                <div className="title"><h2>Typography</h2></div>
                <Row>
                    <div className="subsection">
                    <h1>h1.Bootstrap heading</h1>
                    <h2>h2.Bootstrap heading</h2>
                    <h3>h3.Bootstrap heading</h3>
                    <h4>h4.Bootstrap heading</h4>
                    <h5>h5.Bootstrap heading</h5>
                    <h6>h6.Bootstrap heading</h6>
                    </div>
                    <div className="subsection">
                    <p>Normal paragraph. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.</p>
                    </div>
                    <div className="subsection">
                        <ul>
                            <li>Bullet examples below</li>
                            <li>Lorem ipsum dolor</li>
                            <li>Lorem ipsum dolor</li>
                            <li>Lorem ipsum dolor</li>
                            <li>Lorem ipsum dolor</li>
                        </ul>
                    </div>
                    <div className="subsection">
                        <p className="quotation">This is a quotation. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. You can use a <span className="emphasis">span class around words</span> to highlight specific ones. Vivamus sagittis lacus vel augue laoreet.”</p>
                        </div>
                </Row>
            </Container>
        </Section>
    )
};
export default Typography