import LoginBanner from '@/assets/login-bg.d2033fd9.webp';
import LoginForm from '@/components/UI/LoginForm';
import Image from 'next/image';

const Login = () => {
	return (
		<div className="h-full">
			<div className="hidden lg:block absolute h-full w-full lg:w-1/2 left-0 right-0 top-0 bottom-0 lg:right-[50%]">
				<Image className="object-cover h-full w-full" src={LoginBanner} alt="" />
			</div>
			<div className="w-full lg:w-1/2 h-screen ml-auto my-auto flex flex-col justify-center items-center">
				<LoginForm />
			</div>
		</div>
	);
};

export default Login;
