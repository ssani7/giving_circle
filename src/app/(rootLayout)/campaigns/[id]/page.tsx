import photo from '@/assets/banner.jpg';
import DonationAcions from '@/components/UI/DonationAcions';
import { Box, Container, Divider, LinearProgress, Typography } from '@mui/material';
import Image from 'next/image';
import data from '../../../../../public/campaigns.json';

const CampaignsPage = ({ params }: { params: { id: string } }) => {
	const campaign = data.find((c) => c._id === Number(params.id));
	return (
		<Container className="py-10 max-w-[80%]">
			<Box className="flex w-full gap-7">
				<Box className="w-full h-[70vh]">
					<Image className="w-full h-full object-cover" src={photo} alt="" />
				</Box>
				<Box className="w-full">
					<Typography className="capitalize" gutterBottom variant="h3" fontWeight={700}>
						{campaign?.title}
					</Typography>
					<Typography variant="body1">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur eveniet similique velit eligendi culpa mollitia magni! Quos perspiciatis, deleniti officiis culpa ut distinctio magni
						omnis quis non, cumque ad iusto!
					</Typography>
					<Box>
						<LinearProgress
							sx={{
								'& .MuiLinearProgress-bar1Determinate': { bgcolor: '#6bcc97' },
								bgcolor: '#edf3f0',
								marginTop: '20px',
								height: '6px',
							}}
							variant="determinate"
							value={72}
						/>
						<Box className="flex items-center justify-between gap-2 w-full mt-4">
							<Typography variant="body1" fontWeight={600}>
								{72}% Donated
							</Typography>
							<Typography variant="body1" fontWeight={600}>
								Goal: {20000}
							</Typography>
						</Box>
						<Divider className="my-7" />
						<Box className="flex items-center gap-20 w-full mt-4">
							<Box>
								<Typography variant="h4" component="p" fontWeight={700}>
									{72}
								</Typography>
								<Typography variant="body1" component="p" fontWeight={600}>
									Donors
								</Typography>
							</Box>
							<Box>
								<Typography variant="h4" component="p" fontWeight={700}>
									{17000}
								</Typography>
								<Typography variant="body1" component="p" fontWeight={600}>
									Donated
								</Typography>
							</Box>
						</Box>
						<DonationAcions />
					</Box>
				</Box>
			</Box>
			<Box className="flex ">
				<Box className="py-10 flex flex-col gap-5">
					<Typography variant="h5" component="p" fontWeight={700}>
						How did this come to our attention?
					</Typography>
					<Typography className="whitespace-pre-wrap" variant="body1" component="p">
						{`During the 19th century a profusion of charitable organizations emerged to alleviate the awful conditions of the working class in the slums. The Labourer’s Friend Society, chaired by Lord Shaftesbury in the United Kingdom in 1830, aimed to improve working-class conditions. It promoted, for example, the allotment of land to labourers for “cottage husbandry” that later became the allotment movement. In 1844 it became the first Model Dwellings Company.

There was strong growth in municipal charities. The Brougham Commission led on to the Municipal Corporations Act 1835, which reorganized multiple local charities by incorporating them into single entities under supervision from local government.`}
					</Typography>
				</Box>
				<Box>{/* <CustomPieChart /> */}</Box>
			</Box>
		</Container>
	);
};

export default CampaignsPage;
