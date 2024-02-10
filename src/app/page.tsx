import CampaignSlider from '@/components/UI/CampaignSlider';
import Carousel from '@/components/UI/Slider';

export default function Home() {
	return (
		<div>
			<Carousel />

			<p className="sectionTitle">Donate To Campaigns</p>

			<CampaignSlider />
		</div>
	);
}
