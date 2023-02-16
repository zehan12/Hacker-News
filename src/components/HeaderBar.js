import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const brandColor = '#FE7139';

const Header = styled.header`
  border-top: solid 4px ${brandColor};
  padding: 0 45px;
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const Logo = styled.img `
  margin-right: 18px;
  width: 33px;
  height: 33px;
`

const Title = styled.h1`
  font-size: 32px;
  margin: 0;
`;

const Nav = styled.nav`
  margin-left: 40px;
`

const NavList = styled.ul`
  padding: 0;
  margin-top: 20px
`

const NavListItem = styled.li`
  padding: 0;
  display: inline-block;
  font-family: 'Open Sans';
  font-size: 16px;

  &:not(:last-of-type):after {
    content: '\\007c';
    padding: 0 8px;
  }

  a:link {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }

   a:visited {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }

   a:active {
    text-decoration: none;
  }

  .active {
    font-weight: 800;
    color: ${brandColor};
  }
`

const ThemeButton = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.background};

  &:focus {
    outline: 0;
  }

  span {
    color: ${({ theme }) => theme.colors.text};
  }
`

export default function HeaderBar(props) {
	let activeClassName = "active";

	return (
		<Header>
      <Wrapper><Logo src="https://news.ycombinator.com/y18.gif"/>
      <Title>Hacker News</Title>
			<Nav>
				<NavList>
					<NavListItem>
						<NavLink to="/">
            {({ isActive }) => (
              <span
                className={
                  isActive ? activeClassName : undefined
                }
              >
                latest
              </span>
            )}
          </NavLink>
					</NavListItem>
					<NavListItem>
						<NavLink to="/starred">
            {({ isActive }) => (
              <span
                className={
                  isActive ? activeClassName : undefined
                }
              >
                starred
              </span>
            )}
          </NavLink>
					</NavListItem>
				</NavList>
			</Nav>
      </Wrapper>
      <ThemeButton onClick={props.toggleTheme}>
        {props.isDarkTheme ?
          <span aria-label="Light mode" role="img">&#x2600;</span> :
          <span aria-label="Dark mode" role="img">&#x263E;</span>}
      </ThemeButton>
		</Header>
	)
}