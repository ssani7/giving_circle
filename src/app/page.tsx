import CampaignSlider from '@/Components/UI/CampaignSlider';
import Carousel from '@/Components/UI/Slider';

export default function Home() {
	return (
		<div>
			<Carousel />

			<p className="sectionTitle">Donate To Campaigns</p>

			<CampaignSlider />
		</div>
	);
}
