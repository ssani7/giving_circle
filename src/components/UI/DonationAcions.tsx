'use client';

import { Box, InputAdornment, TextField } from '@mui/material';
import { useState } from 'react';
import SquareButton from './SquareButton';

const amounts = [10, 25, 50, 100];

const DonationAcions = () => {
	const [amount, setAmount] = useState<number>(10);
	return (
		<Box className="mt-8">
			<TextField
				InputProps={{ sx: { borderRadius: 0 }, startAdornment: <InputAdornment position="start">$</InputAdornment> }}
				type="number"
				onChange={(e) => setAmount(Number(e.target.value))}
				id="outlined-basic"
				// label="Donation Amount"
				variant="outlined"
				value={amount}
			/>

			<Box className="flex gap-3 my-5">
				{amounts.map((amount) => (
					<SquareButton key={amount} onClick={() => setAmount(amount)} className="bg-white border border-white text-black hover:bg-white hover:border-primary">
						{amount}
					</SquareButton>
				))}
			</Box>
			<SquareButton>Donate Now</SquareButton>
		</Box>
	);
};

export default DonationAcions;
