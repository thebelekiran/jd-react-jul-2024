import axios from 'axios';
import { useState, useEffect } from 'react';

export const getServerSideProps = async () => {
	console.log( 'sessions::getServerSideProps' );
	
	const response = await axios.get( `https://workshops-server.onrender.com/sessions` );

	return {
		props: {
			sessions: response.data
		}
	};
};

export default ( { sessions } ) => {
	const [ sessionsData, setSessionsData ] = useState( sessions );

	useEffect(
		() => {
			if( !sessions ) {
				const helper = async () => {
					const response = await axios.get( `https://workshops-server.onrender.com/sessions` );
					setSessionsData( response.data );
				}

				helper();
			}
		},
		[]
	);

	return (
		<main>
			<h2>List of sessions</h2>
			<div>
				{
					sessionsData.map( session => <div key={session.id}>{session.name}</div> )
				}
			</div>
		</main>
	);
};