import axios from 'axios';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export const getServerSideProps = async () => {
	console.log( 'index::getServerSideProps' );

	const response = await axios.get( `https://workshops-server.onrender.com/workshops` );

	return {
		props: {
			workshops: response.data
		}
	};
};

export default ( { workshops } ) => {
	const [ workshopsData, setWorkshopsData ] = useState( [] );

	useEffect(
		() => {
			const helper = async () => {
				const response = await axios.get( `https://workshops-server.onrender.com/workshops` );
				setWorkshopsData( response.data );
			}

			helper();
		},
		[]
	);

	return (
		<main>
			<h2>List of workshops</h2>
			<div>
				{
					workshops.map( workshop => <div key={workshop.id}>{workshop.name}</div> )
				}
			</div>
			<Link href="/sessions">Sessions</Link>
			
			<h2>List of workshops</h2>
			<div>
				{
					workshopsData.map( workshop => <div key={workshop.id}>{workshop.name}</div> )
				}
			</div>
		</main>
	);
};