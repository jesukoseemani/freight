import React from 'react';
import styled from 'styled-components';
import { styled as styledy } from '@mui/system';
import SwitchUnstyled, {
	switchUnstyledClasses,
} from '@mui/core/SwitchUnstyled';

const Root = styledy('span')(`
  font-size: 0;
  position: relative;
  display: inline-block;
  width: 42px;
  height: 25px;
  
  margin: 10px;
  cursor: pointer;

  &.${switchUnstyledClasses.disabled} {
    opacity: 0.4;
    cursor: not-allowed;
  }

  & .${switchUnstyledClasses.track} {
    background: #B3C3D3;
    border-radius: 15px;
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
  }

  & .${switchUnstyledClasses.thumb} {
    display: block;
    width: 18px;
    height: 18px;
    top: 3px;
    left: 3px;
    border-radius: 16px;
    background-color: #FFF;
    position: relative;
    transition: all 200ms ease;
  }

  &.${switchUnstyledClasses.focusVisible} .${switchUnstyledClasses.thumb} {
    background-color: rgba(255,255,255,1);
    box-shadow: 0 0 1px 8px rgba(0,0,0,0.25);
  }

  &.${switchUnstyledClasses.checked} { 
    .${switchUnstyledClasses.thumb} {
      left: 22px;
      top: 3px;
      background-color: #FFF;
    }

    .${switchUnstyledClasses.track} {
      background: #0646A7;
    }
  }

  & .${switchUnstyledClasses.input} {
    cursor: inherit;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 1;
    margin: 0;
  }`);

function CangoDetails() {
	const label = { componentsProps: { input: { 'aria-label': 'Demo switch' } } };
	return (
		<StyledCargo>
			<div className='cargo_detail'>
				<h3>Cargo Details</h3>

				<div className='cargo_switch'>
					<div className='cargo_switch-icon'>
						<SwitchUnstyled component={Root} {...label} defaultChecked />
					</div>
					<div className='cargo_switch-content'>
						Dangerous Cargo(ex. Chemicals, Battery)
					</div>
				</div>
			</div>
			<div className='cargo_boxes'>
				<span className='cargo_span'>
					<h4>Total Dimensions</h4>
				</span>
				<h4 className='cargo_h4'>Package Details</h4>
			</div>

			<div className='cargo_wv'>
				<div className='cargo_wv-box'>
					<h4>Total Volume</h4>

					<input type='text' />

					<p>cbm</p>
				</div>

				<div className='cargo_wv-box'>
					<h4>Total Weight</h4>

					<input type='text' />

					<p>kg</p>
				</div>
			</div>
		</StyledCargo>
	);
}
const StyledCargo = styled.div`
	margin: 2rem 0rem;
	border: 1px solid transparent;
	box-shadow: -2px -1px 12px -2px rgba(0, 0, 0, 0.32);
	-webkit-box-shadow: -2px -1px 12px -2px rgba(0, 0, 0, 0.32);
	-moz-box-shadow: -2px -1px 12px -2px rgba(0, 0, 0, 0.32);
	background-color: white;
	width: 100%;
	padding: 2rem 4rem;

	.cargo_detail {
		display: flex;
		justify-content: space-between;
		align-items: center;

		@media (max-width: 940px) {
			flex-direction: column;
			align-items: flex-start;
		}

		h3 {
			font-weight: 700;
			font-size: 1.3rem;
			@media (max-width: 940px) {
				margin-bottom: 1rem;
			}
		}

		.cargo_switch {
			display: flex;
			align-items: center;

			.cargo_switch-content {
				font-size: 1.3rem;
				margin-top: -0.4rem;
			}
		}
	}

	.cargo_boxes {
		border-radius: 0.5rem;
		border: 1px solid #eeeeee;
		margin: 2rem 0rem;
		font-size: 1.2rem;
		width: 24%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #efefef;

		@media (max-width: 1640px) {
			width: 30%;
		}

		@media (max-width: 1400px) {
			width: 40%;
		}

		@media (max-width: 1150px) {
			width: 50%;
		}

		@media (max-width: 1030px) {
			width: 60%;
		}

		@media (max-width: 930px) {
			width: 50%;
		}

		@media (max-width: 775px) {
			width: 60%;
		}

		@media (max-width: 680px) {
			width: 80%;
		}

		@media (max-width: 560px) {
			width: 100%;
		}

		.cargo_span {
			border-radius: 0.5rem;
			border: 1px solid #eeeeee;
			padding: 1.1rem 2rem;
			font-size: 1.2rem;
			color: #3e537f;
			background-color: #fafafa;

			@media (max-width: 400px) {
				padding: 1.1rem 1rem;
				font-size: 1rem;
			}
		}

		.cargo_h4 {
			padding-right: 2rem;

			@media (max-width: 400px) {
				font-size: 1rem;
			}
		}
	}

	.cargo_wv {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 30%;
		margin: 4rem 0rem 2rem 0rem;

		@media (max-width: 1550px) {
			width: 50%;
		}

		@media (max-width: 1100px) {
			width: 60%;
		}

		@media (max-width: 990px) {
			width: 100%;
		}
		@media (max-width: 520px) {
			flex-direction: column;
			margin: 0rem;
		}

		.cargo_wv-box {
			position: relative;
			display: flex;
			align-items: center;
			@media (max-width: 520px) {
				width: 100%;
				margin: 1rem 0rem;
			}

			h4 {
				position: absolute;
				top: -0.6rem;
				left: 3rem;
				background-color: white;
				padding: 0rem 0.5rem;
				z-index: 12;
				font-size: 1.2rem;
				@media (max-width: 520px) {
					font-size: 1rem;
				}
			}

			input {
				padding: 1rem 1rem;
				border: 1px solid #eeeeee;
			}

			p {
				margin-left: -3rem;
			}
		}
	}
`;

export default CangoDetails;
