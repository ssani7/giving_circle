import education from '@/assets/Education.png';
import food from '@/assets/Food.png';
import health from '@/assets/Health.png';
import DetailedCard from './DetailedCard';
import SliderClient from './Slider';

const CampaignSection = async () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: false,
		responsive: [
			{
				breakpoint: 1670,
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
			<p className="sectionTitle">Donate To Campaigns</p>

			<SliderClient className="mx-auto campaignSlider" {...settings}>
				{data.map((campaign) => (
					<DetailedCard key={campaign._id} campaign={campaign} />
				))}
			</SliderClient>
		</div>
	);
};

export default CampaignSection;
