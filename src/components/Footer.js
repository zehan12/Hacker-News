import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledFooter = styled.footer`
  margin: 20px;
  padding-top: 20px;
  border-top: solid 2px #FE7139;
  height: 100px;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
`

const FooterTitle = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
`;

const Nav = styled.nav`
	margin-top: 15px;
`

const NavList = styled.ul`
  font-size: 14px;
	font-weight: 400;
	padding: 0;
	font-style: normal;
  color: ${({ theme }) => theme.colors.text};
`

const NavListItem = styled.li`
  display: inline-block;

	&:not(:last-of-type):after {
    content: '\\007c';
    padding: 0 5px;
  }

	a:link {
		text-decoration: none;
		color: black;
	}

	a:visited {
		text-decoration: none;
		color: ${({ theme }) => theme.colors.text};
	}

	a:active {
		text-decoration: none;
	}
`

export default function Footer() {
  return (
    <StyledFooter>
			<FooterTitle>Hacker News</FooterTitle>
			<Nav>
				<NavList>
					<NavListItem>
						<Link to="/">latest</Link>
					</NavListItem>
					<NavListItem>
						<Link to="/starred">starred</Link>
					</NavListItem>
				</NavList>
			</Nav>
    </StyledFooter>
  )
}