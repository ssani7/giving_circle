import placeHolder from '@/assets/Education.png';
import { Typography } from '@mui/material';
import Image from 'next/image';

const RecentCards = () => {
  return (
    <div className="flex border flex-col overflow-hidden shadow-lg">
      {[1, 2, 3].map(donation => (
        <div
          key={donation}
          className="flex items-center justify-between p-3 border-b last:bottom-0 cursor-pointer hover:bg-green-200"
        >
          <div className="h-16 w-16">
            <Image
              className="object-cover w-full h-full"
              src={placeHolder}
              width={400}
              height={400}
              alt=""
            />
          </div>
          <Typography variant="body1" fontWeight={500} textAlign="center">
            Education for Children
          </Typography>
          <Typography variant="body1" fontWeight={700} textAlign="center">
            ${120}
          </Typography>
        </div>
      ))}
    </div>
  );
};

export default RecentCards;
