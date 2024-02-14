'use client';

import { setUser } from '@/redux/features/users/userSlice';
import { useAppDispatch } from '@/redux/hooks';
import MenuIcon from '@mui/icons-material/Menu';
import UserIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Button, IconButton } from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import UserDrawer from './UserDrawer';

const pages = [
	{ title: 'Home', link: '/' },
	{ title: 'Donate', link: '/campaigns' },
	{ title: 'My Donations', link: '/user/donations' },
];
const settings = [
	{ title: 'Dashboard', requireAdmin: false, link: '/user/dashboard' },
	{ title: 'Admin Pannel', requireAdmin: false, link: '/admin/dashboard' },
	{ title: 'Logout', requireAdmin: false, link: '/logout' },
];

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
	open?: boolean;
}

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(['width', 'margin'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

function Navbar({ session, open = false, handleDrawerOpen }: { session: any; open?: boolean; handleDrawerOpen?: () => void }) {
	const pathname = usePathname();
	const inAdminLayout = pathname.includes('/admin');

	const dispatch = useAppDispatch();
	dispatch(setUser(session?.user));

	const navOptions = pages.filter((page) => {
		const requireAuth = page.link.includes('/user');

		if (!requireAuth || (requireAuth && session)) return page;
	});

	return (
		<AppBar open={open} position={inAdminLayout ? 'fixed' : 'sticky'} sx={{ bgcolor: 'white', color: 'black', boxShadow: 'none', borderBottom: '1px solid lightgray' }}>
			<Container maxWidth="xl">
				<Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
					<Box display={'flex'}>
						{inAdminLayout && (
							<IconButton
								color="inherit"
								aria-label="open drawer"
								onClick={handleDrawerOpen}
								edge="start"
								sx={{
									marginRight: 5,
									...(open && { display: 'none' }),
								}}>
								<MenuIcon />
							</IconButton>
						)}
						<Typography
							variant="h6"
							noWrap
							component="p"
							sx={{
								mr: 2,
								fontFamily: 'inter',
								fontWeight: 700,
							}}>
							<Link href={'/'}>Giving Circle</Link>
						</Typography>
					</Box>

					<Box sx={{ flexGrow: 1, justifyContent: 'end', paddingRight: '20px', display: { xs: 'none', md: 'flex', color: 'black' } }}>
						{navOptions.map((page) => (
							<Box
								key={page.title}
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
						<Link href={'/auth/login'}>
							<Button color="info" sx={{ textTransform: 'capitalize', paddingX: '12px', color: 'black' }} startIcon={<UserIcon />}>
								Sign Up
							</Button>
						</Link>
					) : (
						<Box display="flex" alignItems="center">
							<UserDrawer isAdmin={session?.user?.role === 'admin'} pages={navOptions} />
						</Box>
					)}
				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default Navbar;
