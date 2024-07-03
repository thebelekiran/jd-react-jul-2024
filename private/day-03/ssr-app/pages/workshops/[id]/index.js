import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const apiUrl = `https://workshops-server.onrender.com/sessions`;

export const getStaticPaths = async () => {
	console.log('/workshops/[id]::getStaticPaths');

	const res = await fetch('https://workshops-server.onrender.com/workshops');
	const workshops = await res.json();

	const paths = workshops.map((workshop) => ({
		params: {
			id: "" + workshop.id
		},
	}));

	console.log('paths = ', paths);

	// We'll pre-render only these paths at build time.
	// { fallback: false } means other routes should 404.
	return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
	console.log('/workshops/' + params.id + ' -> getStaticProps');

	const response = await fetch(apiUrl + '?workshopId=' + params.id);
	const sessions = await response.json();

	return {
		props: {
			sessions: sessions
		}
	};
};

export default ({ sessions }) => {
	const router = useRouter();
	console.log('router = ', router);

	return (
		<main>
			<h2>List of sessions</h2>
			<div>
				{
					sessions.map(session => <div key={session.id}>{session.name}</div>)
				}
			</div>
		</main>
	);
};