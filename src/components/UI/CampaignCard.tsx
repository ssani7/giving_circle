'use client';

import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import moment from 'moment';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

const CampaignCard = ({ campaign }: { campaign: { _id: number; type: string; title: string; image: StaticImageData; date: Date } }) => {
	return (
		<Card sx={{ maxWidth: '90%', height: '100%', width: '100%', margin: '40px 0', borderRadius: 0, border: 0, boxShadow: 'rgba(10, 10, 10, 0.1) 0px 0px 35px' }}>
			<Link href={`/campaign/${campaign._id}`}>
				<CardActionArea>
					<Image className="w-full h-full object-cover" src={campaign.image} width={500} height={500} alt={campaign.title} />
					<CardContent>
						<div className="mb-1 flex gap-3">
							<Typography variant="body2" fontWeight={600} color="gray">
								{moment(campaign.date).format('MMM Do, YYYY')}
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
			</Link>
		</Card>
	);
};

export default CampaignCard;
