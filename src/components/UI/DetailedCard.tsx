import { Campaign } from '@/interfaces';
import { Box, CardActionArea, LinearProgress } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

export default function DetailedCard({ campaign }: { campaign: Campaign }) {
	const progress = 70;
	return (
		<Card className="group" sx={{ maxWidth: 400, borderRadius: 0, boxShadow: 'rgba(10, 10, 10, 0.1) 0px 0px 35px' }}>
			<Link href={`/campaigns/${campaign._id}`}>
				<CardActionArea sx={{ minHeight: '460px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'start' }}>
					<div className="w-full h-60 overflow-hidden">
						<Image src={campaign.image} alt="food donation" className="h-full w-full group-hover:scale-110 transition-all duration-500 object-cover" />
					</div>
					<CardContent sx={{ width: '100%', backgroundColor: '#f9f9f9', padding: '30px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
						<Box className="mb-2 flex gap-3 items-center">
							<Typography variant="body2" fontWeight={600} color="gray">
								{moment(campaign.date).format('MMM Do, YYYY')}
							</Typography>
							<Typography variant="body2" fontWeight={600} color="gray">
								•
							</Typography>
							<Box className="bg-green-200 px-2 py-1 text-xs font-semibold">{campaign.type}</Box>
						</Box>
						<Typography gutterBottom variant="h5" fontWeight={700} component="div">
							{campaign.title}
						</Typography>
						<Typography gutterBottom variant="body2" component="p">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui cum nobis temporibus alias iste vel fugiat soluta iusto asperiores in.
						</Typography>
						<Box className="mt-5">
							<LinearProgress sx={{ width: '100%' }} variant="determinate" value={progress} />
							<Box className="flex items-center justify-between gap-2 w-full mt-5">
								<Typography variant="body1" fontWeight={600}>
									Raised: {17000}
								</Typography>
								<Typography variant="body1" fontWeight={600}>
									Goal: {20000}
								</Typography>
							</Box>
						</Box>
					</CardContent>
				</CardActionArea>
			</Link>
		</Card>
	);
}
