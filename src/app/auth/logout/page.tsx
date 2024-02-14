/* eslint-disable @next/next/no-async-client-component */
'use client';

import { signOut } from 'next-auth/react';
import { useEffect } from 'react';

const LogoutPage = async () => {
	useEffect(() => {
		const handleSignout = async () => {
			const res = await signOut({ callbackUrl: '/' });
		};

		handleSignout();
	}, []);

	return <div>Loging Out</div>;
};

export default LogoutPage;
