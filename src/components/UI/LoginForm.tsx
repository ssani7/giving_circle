'use client';

import { Divider, OutlinedInput } from '@mui/material';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';

const LoginForm = () => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const handleLogin = async () => {
		try {
			const res = await signIn('givingCircle', {
				email,
				password,
				callbackUrl: '/',
			});
			console.log('🚀 ~ handleLogin ~ res:', res);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className="lg:w-1/2 bg-white px-10">
			<p className="text-2xl font-medium py-6 text-center">Giving Circle</p>
			<Divider />
			<div className="pb-10">
				<p className="text-center text-lg pt-5">Login</p>
				<div className="mt-6">
					<p className="mb-2 text-sm">Email Address</p>
					<OutlinedInput
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="admin@gmail.com"
						sx={{
							'& .MuiOutlinedInput-notchedOutline': { border: '#f1f5f9' },
						}}
						className="w-full bg-[#f1f5f9] border-0"
					/>
				</div>
				<div className="mt-6">
					<p className="mb-2 text-sm">Password</p>
					<OutlinedInput
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						type="password"
						placeholder="Enter Pasword"
						sx={{
							'& .MuiOutlinedInput-notchedOutline': { border: '#f1f5f9' },
						}}
						className="w-full bg-[#f1f5f9] border-0"
					/>
				</div>

				<p className="text-sm font-light text-center mt-5">
					Don’t have an account?{' '}
					<Link className="hover:underline ml-1" href={'/auth/register'}>
						Sign Up
					</Link>
				</p>

				<button onClick={handleLogin} className="bg-[#6366f1] text-white px-6 py-4 w-full mt-6 rounded-sm">
					{/* {isLoading ? <CircularProgress sx={{ color: 'white' }} size="sm" /> : 'Login'} */}
					Login
				</button>
			</div>
		</div>
	);
};

export default LoginForm;
