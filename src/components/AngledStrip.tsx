import * as React from "react";
import styled from "styled-components";
import {Tween} from "react-gsap";

const Skew = styled.div`
  transform: skewY(-5deg);
  position: relative;
  z-index: 2;
`;

const UnSkew = styled.div`
  transform: skewY(5deg);
  position: relative;
  z-index: 2;
`;

const Strip = styled.div`
  width: 100%;
  height: auto;
  min-height: 5rem;
  margin-top: -10rem;
  position: absolute;
  background: linear-gradient(90deg, ${props => props.theme.strips.gradient.from} 10%, ${props => props.theme.strips.gradient.to} 90%);
  z-index: 1000 !important;
`;

const Content = styled.div`
  padding-top: 4rem;
  text-align: center;
`;

const Title = styled.h2`

font-weight: normal;
color: ${props => props.theme.typography.strips.color};
margin: 0;

`;

const Description = styled.p`
  white-space: pre-wrap;
  width: 80%;
  margin: 5% auto 5rem;
  color: ${props => props.theme.typography.strips.color};
`;

export interface AngledStripProps {
    title: string;
    description: string;
}

class AngledStrip extends React.Component<AngledStripProps> {
    render() {
        return (
            <div>
                <Tween from={{y: "50px", opacity: 0}}>
                    <Skew>
                        <Strip>
                            <UnSkew>
                                <Content>
                                    <Title>
                                        {this.props.title}
                                    </Title>
                                    <Description>
                                        {this.props.description}
                                    </Description>
                                </Content>
                            </UnSkew>
                        </Strip>
                    </Skew>
                </Tween>
            </div>
        );
    }
}

export default AngledStrip;