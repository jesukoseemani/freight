import React from 'react';
import Header from '../components/Header';
import styled from 'styled-components';
import Main from '../components/Main';

function Home() {
	return (
		<StyledHome>
			<Header />
			<Main />
		</StyledHome>
	);
}

const StyledHome = styled.div`
	width: 100%;
	max-width: 170rem;
	margin: 0 auto;
`;

export default Home;
