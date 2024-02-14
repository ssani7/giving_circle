import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
	providers: [
		CredentialsProvider({
			id: 'givingCircle',
			name: 'Credentials',
			type: 'credentials',

			credentials: {
				email: { label: 'email', type: 'email', placeholder: 'Your email...' },
				password: { label: 'Password', type: 'password' },
				role: { label: 'role', type: 'text' },
			},

			async authorize(credentials, req): Promise<any> {
				try {
					const res = await fetch(`${process.env.BACKEND_URL}/auth/login`, {
						method: 'POST',
						body: JSON.stringify(credentials),
						headers: { 'Content-Type': 'application/json' },
					});
					const { data } = await res.json();
					// console.log(data);

					if (res.ok && data) {
						return {
							...data,
						};
					}
				} catch (err: any) {
					throw new Error(err.message);
				}
			},
		}),
	],

	callbacks: {
		async jwt({ token, user }: { token: any; user: any }) {
			return {
				...token,
				...user,
			};
		},
		async session({ session, token }: { session: any; token: any }) {
			return {
				...session,
				...token,
			};
		},
	},
	secret: process.env.NEXTAUTH_SECRET,
};
