import styled from 'styled-components';
import { Logo } from './components';

export const HeaderContainer = ({ className }) => {
	return (
		<header className={className}>
			<Logo />
		</header>
	);
};

export const Header = styled(HeaderContainer)`
	position: fixed;
	top: 0;
	width: 1000px;
	height: 120px;
	padding: 20px 40px;
	box-shadow: 0px -2px 17px #000;
	background-color: #fff;
`;