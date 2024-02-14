import AccountCircle from '@mui/icons-material/AccountCircle';
import { Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import * as React from 'react';

const UserDrawer = ({ isAdmin, pages }: { isAdmin: boolean; pages: { title: string; link: string }[] }) => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

	const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<div>
			<IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleMenu} color="inherit">
				<AccountCircle />
			</IconButton>
			<Menu
				id="menu-appbar"
				anchorEl={anchorEl}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'right',
				}}
				keepMounted
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				open={Boolean(anchorEl)}
				onClose={handleClose}>
				{pages.map((page, index) => (
					<MenuItem className="min-[900px]:hidden" key={index} sx={{ paddingx: '20px' }} onClick={handleClose}>
						<Link href={page.link}>
							<Typography textAlign="center" color="black" variant="body2" fontWeight={600}>
								{page.title}
							</Typography>
						</Link>
					</MenuItem>
				))}
				<MenuItem sx={{ paddingx: '20px', display: isAdmin ? 'block' : 'none' }} onClick={handleClose}>
					<Link href={'/admin/dashboard'}>
						<Typography textAlign="center" color="black" variant="body2" fontWeight={600}>
							Admin Pannel
						</Typography>
					</Link>
				</MenuItem>
				<MenuItem sx={{ paddingx: '20px' }} onClick={handleClose}>
					<Link href={'/auth/logout'}>
						<Typography textAlign="center" color="black" variant="body2" fontWeight={600}>
							Sign Out
						</Typography>
					</Link>
				</MenuItem>
			</Menu>
		</div>
	);
};

export default UserDrawer;
