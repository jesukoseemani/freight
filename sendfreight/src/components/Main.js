import React from 'react';
import styled from 'styled-components';
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';

function Main() {
	return (
		<StyledMain>
			<div className='icon_header'>
				<ArrowBackSharpIcon sx={{ fontSize: 25 }} />
			</div>
			<div className='content_header'>
				<h1>New Booking</h1>
				<p>
					Fill in the information below to get a quote or create a new booking
				</p>
			</div>
		</StyledMain>
	);
}

const StyledMain = styled.div`
	background-color: #f1f2f5;
	padding: 2rem 16rem;

	.content_header {
		margin-top: -3rem;
	}

	.icon_header {
		margin-left: -8rem;
	}
`;

export default Main;
