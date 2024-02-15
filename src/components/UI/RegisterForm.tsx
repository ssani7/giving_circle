'use client';

import { Divider, OutlinedInput } from '@mui/material';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { registerUser } from '../../lib/auth';
import FullScreenLoader from '../Shared/FullScreenLoader';

const RegisterForm = () => {
  const [error, setError] = useState<string>('');

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confrmPass, setConfrmPass] = useState<string>('');

  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  const handleSignUp = async () => {
    if (password !== confrmPass) return setError('nomatch');

    const userData = { email, password };
    try {
      const resp = await registerUser(userData);
      if (resp?.data?.user) {
        const res = await signIn('givingCircle', {
          email: email,
          password: password,
          redirect: false,
          callbackUrl: '/',
        });

        if (res?.ok) {
          router.push(res.url as string);
        } else {
          setError('Something went wrong');
          console.log(res);
        }
      } else {
        console.error('Error: ', resp.message);
        setError(resp.message);
      }
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-[90%] lg:w-1/2 bg-white px-10">
      <p className="text-2xl font-medium py-6 text-center">Giving Circle</p>
      <Divider />
      <div className="pb-10">
        <p className="text-center text-lg pt-5">Sign Up</p>
        <div className="mt-6">
          <p className="mb-2 text-sm">Email Address</p>
          <OutlinedInput
            value={email}
            type="email"
            onChange={e => setEmail(e.target.value)}
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
            onChange={e => {
              setPassword(e.target.value);
              setError('');
            }}
            type="password"
            placeholder="Enter Pasword"
            sx={{
              '& .MuiOutlinedInput-notchedOutline': { border: '#f1f5f9' },
            }}
            className="w-full bg-[#f1f5f9] border-0"
          />
        </div>
        <div className="mt-6">
          <p className="mb-2 text-sm">Confirm Password</p>
          <OutlinedInput
            value={confrmPass}
            onChange={e => {
              setConfrmPass(e.target.value);
              setError('');
            }}
            type="password"
            placeholder="Enter Pasword"
            sx={{
              '& .MuiOutlinedInput-notchedOutline': { border: '#f1f5f9' },
            }}
            className="w-full bg-[#f1f5f9] border-0"
          />
          {error === 'nomatch' && (
            <p className="text-sm text-center mt-2 text-red-600">
              The passwords do not match
            </p>
          )}
          {error && (
            <p className="text-xs text-center mt-2 text-red-600 ">{error}</p>
          )}
        </div>

        <p className="text-sm font-light text-center mt-5">
          Already have an account?{' '}
          <Link className="hover:underline ml-1" href={'/login'}>
            Login
          </Link>
        </p>

        <button
          onClick={handleSignUp}
          className="bg-[#6366f1] text-white px-6 py-4 w-full mt-6 rounded-sm"
        >
          Sign Up
        </button>
      </div>
      <FullScreenLoader open={loading} />
    </div>
  );
};

export default RegisterForm;
