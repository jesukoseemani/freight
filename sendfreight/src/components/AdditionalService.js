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

function AdditionalService() {
	const label = {
		componentsProps: { input: { 'aria-label': 'Demo switch' } },
	};
	return (
		<StyledAddedService>
			<h3>Additional Services</h3>

			<div className='added_grid'>
				<div className='added_services'>
					<div className='switch-icon'>
						<SwitchUnstyled component={Root} {...label} />
					</div>
					<div className='added_content'>
						<h4>Export Forwarding</h4>
						<p>We handle customs clearance and documentation.</p>
					</div>
				</div>

				<div className='added_services'>
					<div className='switch-icon'>
						<SwitchUnstyled component={Root} {...label} />
					</div>
					<div className='added_content'>
						<h4>Import Customs Clearance</h4>
						<p>
							We handle import customs clearance and regulatory requirements.
						</p>
					</div>
				</div>

				<div className='added_services'>
					<div className='switch-icon'>
						<SwitchUnstyled component={Root} {...label} />
					</div>
					<div className='added_content'>
						<h4>Cargo Insurance</h4>
						<p>
							Protect your cargo from logistics risks up to it's full value.
						</p>
					</div>
				</div>

				<div className='added_services'>
					<div className='switch-icon'>
						<SwitchUnstyled component={Root} {...label} />
					</div>
					<div className='added_content'>
						<h4>Transport/Delivery</h4>
						<p>We deliver the cargo to your door step from the ports.</p>
					</div>
				</div>
			</div>
		</StyledAddedService>
	);
}

const StyledAddedService = styled.div`
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
		margin: 2rem 0rem;
	}

	.added_grid {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;

		@media (max-width: 1100px) {
			display: grid;
			grid-template-columns: 1fr;
			grid-gap: 1rem;
		}
	}

	.added_services {
		flex-basis: 40%;
		display: flex;
		/* justify-content: space-between; */
		align-items: center;
		margin: 2rem;
		@media (max-width: 520px) {
			flex-basis: 80%;
			margin: 0.5rem;
		}

		.switch-icon {
			margin-top: -1rem;
		}

		.added_content {
			margin-left: 1rem;
			h4 {
				font-size: 1.3rem;
				margin-bottom: 1rem;
			}

			p {
				color: gray;
				font-size: 1.1rem;
			}
		}
	}
`;

export default AdditionalService;
