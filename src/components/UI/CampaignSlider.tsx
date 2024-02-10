'use client';

import education from '@/assets/Education.png';
import food from '@/assets/Food.png';
import health from '@/assets/Health.png';
import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import moment from 'moment';
import Image from 'next/image';
import Slider from 'react-slick';

const CampaignSlider = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 850,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	const date = new Date();

	const data = [
		{ title: 'Food for children', image: food, type: 'Food' },
		{ title: 'Education for children', image: education, type: 'Education' },
		{ title: 'Health for children', image: health, type: 'Health' },
		{ title: 'Food for children', image: food, type: 'Food' },
		{ title: 'Education for children', image: education, type: 'Education' },
		{ title: 'Health for children', image: health, type: 'Health' },
		{ title: 'Food for children', image: food, type: 'Food' },
		{ title: 'Education for children', image: education, type: 'Education' },
		{ title: 'Health for children', image: health, type: 'Health' },
	];
	return (
		<div className="">
			<Slider className="mx-auto campaignSlider" {...settings}>
				{data.map((campaign) => (
					<Card key={campaign.title} sx={{ maxWidth: '90%', height: '100%', margin: '40px 0', borderRadius: 0, border: 0, boxShadow: 'rgba(10, 10, 10, 0.1) 0px 0px 35px' }}>
						<CardActionArea>
							<Image className="w-full h-full object-cover" src={campaign.image} width={500} height={500} alt={campaign.title} />
							<CardContent>
								<div className="mb-1 flex gap-3">
									<Typography variant="body2" fontWeight={600} color="gray">
										{moment(date).format('MMM Do, YYYY')}
									</Typography>
									<Typography variant="body2" fontWeight={600} color="gray">
										•
									</Typography>
									<Typography variant="body2" fontWeight={600} color="gray">
										{campaign.type}
									</Typography>
								</div>
								<Typography gutterBottom variant="h6" fontWeight={700} component="div">
									{campaign.title}
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				))}
			</Slider>
		</div>
	);
};

export default CampaignSlider;
