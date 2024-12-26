import styled from 'styled-components';
import { Icon } from '../../../../components';

const LargeText = styled.div`
	font-size: 48px;
	font-weight: 600;
	line-height: 48px;
	margin-top: 17px;
`;

const SmallText = styled.div`
	font-size: 18px;
	font-weight: bold;
`;

export const LogoContainer = ({ className }) => (
	<div className={className}>
		<Icon size="70px" margin="0 10px 0 0" id="fa-code" />
		<div>
			<LargeText>Блог</LargeText>
			<SmallText>веб-разработчик</SmallText>
		</div>
	</div>
);

export const Logo = styled(LogoContainer)`
	display: flex;
	margin-top: -14px;
`;
