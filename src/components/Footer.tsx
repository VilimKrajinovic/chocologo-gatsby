import * as React from 'react';
import styled from 'styled-components'
import Row from 'react-bootstrap/Row'
import {Link} from 'gatsby';
import {lighten} from 'polished';

import '../../static/styles/bootstrap.css';

const FooterStyle = styled.footer`
  background: #f77700;
  color: ${props => props.theme.colors.footer.main};
  padding: 40px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: -1000;
  height: 10vh;
`;

const FooterRow = styled(Row)`
  max-width: 640px;
  margin: 0 auto;
`;

const StyledA = styled.a`
  color: ${props => props.theme.colors.footer.main};
  
  :hover{
    color: ${props=> props.theme.colors.footer.dark};
  }
`;

const StyledLi = styled.li`
  position: absolute;
  left: 0;
  margin-left: 40px;
`;

const StyledUl = styled.ul`
  list-style-type: circle;
`;

const Footer = () => {
    return (
        <FooterStyle>
            <Row className={'justify-content-center text-center'}>
                <div className={"col-auto"}>
                    <strong>FIND US ON</strong>
                    <StyledUl>
                        <StyledLi>
                            <StyledA href={"https://www.facebook.com/chocologo.hr/"}>
                                Facebook
                            </StyledA>
                        </StyledLi>
                    </StyledUl>
                </div>
                <div className={"col-auto"}>
                    <strong>OTHER LIKS</strong>
                    <StyledUl>
                        <li>
                            <StyledA href={"https://www.facebook.com/chocologo.hr/"}>
                                Facebook
                            </StyledA>
                        </li>
                    </StyledUl>
                </div>
                <div className={"col-auto"}>
                    <strong>CONTACT US</strong>
                    <StyledUl>
                        <li>
                            <StyledA href={"https://www.facebook.com/chocologo.hr/"}>
                                Facebook
                            </StyledA>
                        </li>
                    </StyledUl>
                </div>
            </Row>
        </FooterStyle>
    );
};

export default Footer;