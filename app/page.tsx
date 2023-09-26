import Image from 'next/image'
import directus from '../lib/directus';
import { rest, readItems, readItem } from '@directus/sdk/rest';

async function getEnquiries() {
	return directus.request(readItems('Enquiries'));
}

export default async function HomePage() {
	const Enquiries = await getEnquiries();
	return (
		<div>
			<h1>{Enquiries.id}</h1>
		</div>
	);
}