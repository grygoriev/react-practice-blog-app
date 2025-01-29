import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonContainer = ({ children, className, width, ...props }) => {
	return (
		<button className={className} {...props}>
			{children}
		</button>
	);
};

export const Button = styled(ButtonContainer)`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 18px;
	width: ${({ width = '100%' }) => width};
	height: 32px;
	background-color: #eee;
	border: 1px solid #000;
	border-radius: 5px;

	&:hover {
		cursor: ${({ disabled }) => (disabled ? 'defauold' : 'pointer')};
	}
`;

Button.propTypes = {
	children: PropTypes.node.isRequired,
	width: PropTypes.string,
};
