import React from 'react';
import styled from 'styled-components';
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import Service from './Service';
import Destination from './Destination';
import CangoDetails from './CangoDetails';
import AdditionalService from './AdditionalService';

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
			<Service />
			<Destination />
			<CangoDetails />
			<AdditionalService />
		</StyledMain>
	);
}

const StyledMain = styled.div`
	background-color: #f1f2f5;
	padding: 2rem 16rem;

	@media (max-width: 930px) {
		padding: 2rem 5rem;
	}

	@media (max-width: 520px) {
		padding: 2rem 1rem;
	}

	.content_header {
		margin-top: -2.7rem;

		p {
			font-size: 1.3rem;
			padding: 1rem 0rem;
			font-weight: lighter;
		}
	}

	.icon_header {
		margin-left: -8rem;

		@media (max-width: 930px) {
			margin-left: -3rem;
		}
	}
`;

export default Main;
