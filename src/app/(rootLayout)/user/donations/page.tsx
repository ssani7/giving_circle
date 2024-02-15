import BasicTable from '@/components/UI/MUI/Table';
import RecentCards from '@/components/UI/RecentCard';
import { LineChart } from '@/components/UI/charts/AreaChart';
import { Box, Container, Typography } from '@mui/material';

const DonationPage = () => {
  return (
    <Container maxWidth="xl">
      <p className="sectionTitle">My Donations</p>
      <Box className="flex text-lg gap-5 mt-8">
        <div className="w-full">
          <Typography className="mb-3" variant="body1" fontWeight={600}>
            My Donations
          </Typography>
          <BasicTable />
        </div>
        <Box className="w-2/5">
          <Typography className="mb-3" variant="body1" fontWeight={600}>
            Recently Donated
          </Typography>
          <RecentCards />
        </Box>
      </Box>
      <div className="mt-24">
        <LineChart />
      </div>
    </Container>
  );
};

export default DonationPage;
