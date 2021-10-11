import React from 'react';
import styled from 'styled-components';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faUserGraduate,
	faTruck,
	faShip,
} from '@fortawesome/free-solid-svg-icons';

function Service() {
	return (
		<StyledService>
			<h3>Select a service</h3>
			<StyledBox>
				<div style={{ backgroundColor: '#0646A7' }} className='styled_box'>
					<h3>Air Freight</h3>
					<div className='icon_service air'>
						<LocalAirportIcon className='box_icon box_icon-air' />
					</div>
				</div>

				<div className='styled_box'>
					<h3>Sea Freight</h3>

					<div className='icon_service ship'>
						<FontAwesomeIcon
							className='box_icon box_icon-ship'
							icon={faShip}
							size='2x'
						/>
					</div>
				</div>
				<div className='styled_box'>
					<h3>Inland (Truck&Barge)</h3>
					<div className='icon_service truck'>
						<FontAwesomeIcon
							className='box_icon box_icon-truck'
							icon={faTruck}
							size='2x'
						/>
					</div>
				</div>
				<div className='styled_box'>
					<h3>Customs Clearance</h3>
					<div className='icon_service custom'>
						<FontAwesomeIcon
							className='box_icon box_icon-custom'
							icon={faUserGraduate}
							size='2x'
						/>
					</div>
				</div>
			</StyledBox>
		</StyledService>
	);
}

const StyledService = styled.div`
	margin: 2rem 0rem;
	border: 1px solid transparent;
	box-shadow: -2px -1px 12px -2px rgba(0, 0, 0, 0.32);
	-webkit-box-shadow: -2px -1px 12px -2px rgba(0, 0, 0, 0.32);
	-moz-box-shadow: -2px -1px 12px -2px rgba(0, 0, 0, 0.32);
	background-color: white;
	width: 100%;
	padding: 2rem 4rem;

	h3 {
		font-weight: 700;
		font-size: 1.3rem;
	}
`;

const StyledBox = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media (max-width: 1135px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 2rem;
	}

	@media (max-width: 600px) {
		grid-template-columns: 1fr;
	}

	.styled_box {
		flex: 1;
		margin-top: 2rem;
		margin-right: 2rem;
		border: 1px solid #eeeeee;
		border-radius: 0.5rem;
		position: relative;
		overflow: hidden;
		height: 10rem;
		cursor: pointer;

		&:last-of-type {
			margin-right: 0rem;
		}

		@media (max-width: 1135px) {
			margin-right: 0rem;
		}

		h3 {
			margin-top: 4rem;
			margin-left: 1rem;
			color: gray;

			@media (max-width: 1420px) {
				width: 40%;
			}
		}

		.icon_service {
			position: absolute;
			top: 40%;
			right: -2rem;

			@media (max-width: 1250px) {
				top: 60%;
				right: -1.5rem;
			}

			.box_icon {
				font-size: 6rem;
				color: grey;
				@media (max-width: 1250px) {
					font-size: 4rem;
				}
			}
		}

		.truck {
			right: -1.5rem;
		}

		.air {
			top: 25%;
			right: -3rem;
			@media (max-width: 1250px) {
				top: 38%;
				right: -2rem;
			}
			.box_icon-air {
				font-size: 10rem;
				color: white;
				@media (max-width: 1250px) {
					font-size: 8rem;
				}
			}
		}
	}
	/* 

	 */
`;
export default Service;
