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
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

const pages = [{ title: 'Donate', link: '/campaigns' }];
const settings = [
	{ title: 'Dashboard', requireAdmin: false, link: '/user/dashboard' },
	{ title: 'Admin Pannel', requireAdmin: false, link: '/admin/dashboard' },
	{ title: 'Logout', requireAdmin: false, link: '/logout' },
];

function Navbar({ session }: { session: boolean }) {
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

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
							<Box key={page.title} onClick={handleCloseNavMenu} sx={{ my: 2, paddingX: '16px', paddingY: '8px', display: 'block', textTransform: 'capitalize', background: '#6bcc97' }}>
								<Link href={page.link}>
									<Typography textAlign="center" color="white" variant="body2" fontWeight={600}>
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
							<Tooltip arrow={true} title="Open settings">
								<IconButton onClick={handleOpenUserMenu} sx={{ p: 0, height: '40px', width: '40px' }}>
									<Image className="h-full w-full object-cover" src={require('@/assets/user.png')} width={400} height={400} alt="user" />
								</IconButton>
							</Tooltip>
							<Menu
								sx={{ mt: '45px' }}
								id="menu-appbar"
								anchorEl={anchorElUser}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								open={Boolean(anchorElUser)}
								onClose={handleCloseUserMenu}>
								{settings.map((setting) => (
									<MenuItem key={setting.title} onClick={handleCloseUserMenu}>
										<Link href={setting.link}>
											<Typography textAlign="center">{setting.title}</Typography>
										</Link>
									</MenuItem>
								))}
							</Menu>
						</Box>
					)}
				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default Navbar;
