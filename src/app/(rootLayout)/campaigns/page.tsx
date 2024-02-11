import education from '@/assets/Education.png';
import food from '@/assets/Food.png';
import health from '@/assets/Health.png';
import DetailedCard from '@/components/UI/DetailedCard';
import { Grid } from '@mui/material';

const CampaignsPage = () => {
	const date = new Date();

	const data = [
		{ _id: 1, title: 'Food for children', image: food, type: 'Food', date },
		{ _id: 2, title: 'Education for children', image: education, type: 'Education', date },
		{ _id: 3, title: 'Health for children', image: health, type: 'Health', date },
		{ _id: 4, title: 'Food for children', image: food, type: 'Food', date },
		{ _id: 5, title: 'Education for children', image: education, type: 'Education', date },
		{ _id: 6, title: 'Health for children', image: health, type: 'Health', date },
		{ _id: 7, title: 'Food for children', image: food, type: 'Food', date },
		{ _id: 8, title: 'Education for children', image: education, type: 'Education', date },
		{ _id: 9, title: 'Health for children', image: health, type: 'Health', date },
	];
	return (
		<div className="">
			<h2 className="sectionTitle">Let&apos;s give to people in need</h2>

			<Grid container spacing={5} justifyContent="center">
				{data.map((campaign) => (
					<Grid item key={campaign._id}>
						<DetailedCard campaign={campaign} />
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default CampaignsPage;
