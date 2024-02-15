'use server';

import { IUser } from '@/interfaces';

export const registerUser = async (userData: { email: string; password: string }): Promise<any> => {
	try {
		const resp = await fetch(process.env.BACKEND_URL + '/auth/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(userData),
			cache: 'no-store',
		});

		const user = await resp.json();
		return user as IUser;
	} catch (error) {
		console.error(error);
		return error as IUser;
	}
};
