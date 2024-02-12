'use client';

import { Button } from '@mui/material';

const SquareButton = (props: any) => {
	return (
		<Button
			{...props}
			className={props?.className ?? `bg-primary shadow-md  hover:bg-primary`}
			variant="contained"
			color="primary"
			sx={{
				paddingX: '20px',
				paddingY: '10px',
				fontWeight: 700,
				letterSpacing: '1.2px',
				borderRadius: '0',
			}}>
			{props.children}
		</Button>
	);
};

export default SquareButton;
