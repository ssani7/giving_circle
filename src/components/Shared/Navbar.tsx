'use client';

import MenuIcon from '@mui/icons-material/Menu';
import UserIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import * as React from 'react';

import { usePathname } from 'next/navigation';

const pages = [
	{ title: 'Home', link: '/' },
	{ title: 'Donate', link: '/campaigns' },
];
const settings = [
	{ title: 'Dashboard', requireAdmin: false, link: '/user/dashboard' },
	{ title: 'Admin Pannel', requireAdmin: false, link: '/admin/dashboard' },
	{ title: 'Logout', requireAdmin: false, link: '/logout' },
];

function Navbar({ session }: { session: boolean }) {
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const pathname = usePathname();

	return (
		<AppBar position="sticky" sx={{ bgcolor: 'white', color: 'black', boxShadow: 'none', borderBottom: '1px solid lightgray' }}>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Typography
						variant="h6"
						noWrap
						component="p"
						sx={{
							mr: 2,
							display: { xs: 'none', md: 'flex' },
							fontFamily: 'inter',
							fontWeight: 700,
						}}>
						<Link href={'/'}>Giving Circle</Link>
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}>
							{pages.map((page) => (
								<MenuItem key={page.title} onClick={handleCloseNavMenu}>
									<Typography textAlign="center" color={'black'}>
										{page.title}
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<Typography
						variant="h5"
						noWrap
						component="a"
						href="#app-bar-with-responsive-menu"
						sx={{
							mr: 2,
							display: { xs: 'flex', md: 'none' },
							flexGrow: 1,
							fontWeight: 700,
							color: 'inherit',
							textDecoration: 'none',
						}}>
						{/* <Link href={'/'}>Giving Circle</Link> */}
						Giving Circle
					</Typography>
					<Box sx={{ flexGrow: 1, justifyContent: 'end', paddingRight: '20px', display: { xs: 'none', md: 'flex', color: 'black' } }}>
						{pages.map((page) => (
							<Box
								key={page.title}
								onClick={handleCloseNavMenu}
								sx={{
									// color: pathname === page.link ? 'white' : 'black',
									color: pathname === page.link ? '#388a69' : 'black',
									borderBottom: pathname === page.link ? '2px solid #388a69' : 'none',
									my: 2,
									display: 'block',
									marginX: '16px',
									marginY: '8px',
									textTransform: 'capitalize',
								}}>
								<Link href={page.link}>
									<Typography textAlign="center" variant="body2" fontWeight={600}>
										{page.title}
									</Typography>
								</Link>
							</Box>
						))}
					</Box>

					{!session ? (
						<Button color="info" sx={{ textTransform: 'capitalize', paddingX: '12px', color: 'black' }} startIcon={<UserIcon />}>
							<Link href={'/login'}>Sign Up</Link>
						</Button>
					) : (
						<Box sx={{ flexGrow: 0 }}>
							<Link href={`/`}>
								<Typography textAlign="center" color="black" variant="body2" fontWeight={600}>
									My Donations
								</Typography>
							</Link>
						</Box>
					)}
				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default Navbar;
