import React, { useState } from 'react';
import styled from 'styled-components';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

function Destination() {
	const [value, setValue] = useState(null);
	const [incoterms, setIncoterms] = useState(null);
	return (
		<StyledDestination>
			<div className='icon_destination'>
				<ErrorOutlineIcon sx={{ fontSize: 20 }} />
			</div>
			<div className='input_destination'>
				<div className='input_destination-button'>
					<div className='button-import'>Import</div>
					<div className='button-export'>Export</div>
				</div>
				<div className='input_destination-from'>
					<div className='icon_location'>
						<LocationOnIcon sx={{ fontSize: 20 }} />
						<span>From</span>
					</div>
					<input className='from' type='text' placeholder='City or Port' />
				</div>
				<div
					style={{ marginLeft: '3rem' }}
					className='input_destination-from to'>
					<div className='icon_location'>
						<LocationOnIcon sx={{ fontSize: 20 }} />
						<span>To</span>
					</div>
					<input className='to' type='text' placeholder='City or Port' />
				</div>
			</div>
			<div className='form_destination'>
				<div className='input_date'>
					<LocalizationProvider dateAdapter={AdapterDateFns}>
						<DatePicker
							label='Ready Date'
							value={value}
							renderInput={(params) => <TextField {...params} />}
						/>
					</LocalizationProvider>
				</div>

				<div className='input_select'>
					<FormControl fullWidth>
						<InputLabel id='demo-simple-select-label'>Incoterms</InputLabel>
						<Select
							labelId='demo-simple-select-label'
							id='demo-simple-select'
							value={incoterms}
							label='incoterms'>
							<MenuItem value={10}>Term 1</MenuItem>
							<MenuItem value={20}>Term 2</MenuItem>
							<MenuItem value={30}>Term 3</MenuItem>
						</Select>
					</FormControl>
				</div>

				<div className='input_value'>
					<input
						className='value'
						type='text'
						placeholder='Total Cargo Value'
					/>
				</div>
			</div>
		</StyledDestination>
	);
}

const StyledDestination = styled.div`
	margin: 2rem 0rem;
	border: 1px solid transparent;
	box-shadow: -2px -1px 12px -2px rgba(0, 0, 0, 0.32);
	-webkit-box-shadow: -2px -1px 12px -2px rgba(0, 0, 0, 0.32);
	-moz-box-shadow: -2px -1px 12px -2px rgba(0, 0, 0, 0.32);
	background-color: white;
	width: 100%;
	padding: 2rem 4rem;

	.form_destination {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 2.5rem 0rem;

		@media (max-width: 1000px) {
			flex-direction: column;
			justify-content: center;
			width: 100%;
		}

		.input_date {
			flex: 1;
		}

		.input_select {
			flex: 1;
			margin: 0rem 4rem;

			@media (max-width: 1000px) {
				margin: 2rem 4rem;
				width: 70%;
			}
			.destination_select {
				/* width: 2rem;
				height: 2rem; */
				width: 50%;
			}
		}

		.input_value {
			flex: 1;
			.value {
				width: 100%;
				padding: 1rem 2rem;
				border: 1px solid #eeeeee;
				background-color: #efefef;
				color: black;
				outline: none;
			}
		}
	}

	.input_destination {
		display: flex;
		justify-content: space-between;
		align-items: center;

		@media (max-width: 1350px) {
			flex-direction: column;
			align-items: flex-start;
		}
		.input_destination-button {
			flex-basis: 20%;
			display: flex;
			align-items: center;
			.button-export {
				border-radius: 0.2rem;
				border: 1px solid #eeeeee;
				padding: 1.1rem 2rem;
				font-size: 1.2rem;
				border-left: none;
				border-bottom-left-radius: 0;
				border-top-left-radius: 0;
			}
			.button-import {
				border-radius: 0.2rem;
				border: 1px solid #eeeeee;
				padding: 1.1rem 2rem;
				font-size: 1.2rem;
				border-bottom-right-radius: 0;
				border-top-right-radius: 0;
			}
		}

		.input_destination-from {
			flex: 1;
			display: flex;
			align-items: center;
			position: relative;
			@media (max-width: 1350px) {
				margin: 1rem 3rem;
			}

			@media (max-width: 1000px) {
				margin: 1rem 0rem;
			}
			.icon_location {
				display: flex;
				align-items: center;
				position: absolute;
				top: 0.8rem;
				left: 0.2rem;
			}

			input {
				width: 100%;
				padding: 1rem 5rem;
				border: 1px solid #eeeeee;
				background-color: #efefef;
				color: black;
				outline: none;
			}
		}

		.to {
			@media (max-width: 1350px) {
				margin: 0rem 8rem;
			}

			@media (max-width: 1000px) {
				margin: 0rem 0rem;
			}

			.icon_location {
				@media (max-width: 1350px) {
					left: 8.2rem;
				}
				@media (max-width: 1000px) {
					left: 0.2rem;
				}
			}
		}
	}
`;

export default Destination;
