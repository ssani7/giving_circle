const CampaignsPage = ({ params }: { params: { id: string } }) => {
	return (
		<div>
			<h2>Campaign ID: {params.id}</h2>
		</div>
	);
};

export default CampaignsPage;
