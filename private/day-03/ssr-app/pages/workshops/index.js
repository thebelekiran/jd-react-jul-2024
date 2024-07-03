import axios from 'axios';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';

const apiUrl = `https://workshops-server.onrender.com/workshops`;

export const getServerSideProps = async () => {
	console.log('/workshops::getServerSideProps');

	const response = await axios.get(apiUrl);

	return {
		props: {
			workshops: response.data
		}
	};
};

export default ({ workshops }) => {
	const [workshopsData, setWorkshopsData] = useState([]);

	useEffect(
		() => {
			const helper = async () => {
				const response = await axios.get(apiUrl);
				setWorkshopsData(response.data);
			}

			helper();
		},
		[]
	);

	return (
		<main>
			<Head>
				<title>List of workshops | Workshops App</title>
			</Head>
			<h2>List of workshops</h2>
			<div>
				{
					workshops.map(workshop => <div key={workshop.id}><Link href={"/workshops/" + workshop.id}>{workshop.name}</Link></div>)
				}
			</div>

			<hr />

			<h2>List of workshops</h2>
			<div>
				{
					workshopsData.map(workshop => <div key={workshop.id}><Link key={workshop.id} href={"/workshops/" + workshop.id}>{workshop.name}</Link></div>)
				}
			</div>
		</main>
	);
};