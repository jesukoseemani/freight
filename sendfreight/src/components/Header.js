import React from 'react';
import styled from 'styled-components';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { grey } from '@mui/material/colors';

function Header() {
	return (
		<StyledHeader>
			<LeftWrapper>
				<div className='logo'>
					{/* <img src='' /> */}
					<h1>sendFreight</h1>
				</div>
				<div className='input'>
					<input type='text' placeholder='Search' />
					<div className='icon_search'>
						<SearchSharpIcon sx={{ color: grey[50], fontSize: 20 }} />
					</div>
				</div>
			</LeftWrapper>
			<RightWrapper>
				<div className='boxes box-1'>
					<a href='#none'>Request Quote</a>
				</div>
				<div className='boxes box-2'>
					<a href='#none'>Book Shipment</a>
				</div>
			</RightWrapper>
		</StyledHeader>
	);
}

const StyledHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 8rem;
	background-color: #0646a7;
	padding: 2rem;
`;

const LeftWrapper = styled.div`
	flex: 1;
	display: flex;
	justify-content: space-between;
	align-items: center;

	.logo {
		flex-basis: 30%;

		h1 {
			font-size: 2rem;
		}
	}

	.input {
		flex-basis: 70%;
		display: flex;
		align-items: center;

		input {
			width: 100%;
			padding: 1rem;
			background-color: #3a6cb8;
			border: none;
			outline: none;

			&::placeholder {
				color: #d3d3d3;
				padding-left: 1.5rem;
			}
		}
		.icon_search {
			margin-left: -3.5rem;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
`;

const RightWrapper = styled.div`
	flex: 1;
	display: flex;
	justify-content: flex-end;
	align-items: center;

	.boxes {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 14rem;
		height: 4rem;
		padding: 1rem 2rem;
		border: 1px solid #84a0da;
		border-radius: 0.5rem;
		margin-right: 2rem;

		a {
			color: #fafafa;
		}
	}

	/* .box-1 {
	} */

	.box-2 {
		background-color: #5cc58c;
	}
`;

export default Header;
