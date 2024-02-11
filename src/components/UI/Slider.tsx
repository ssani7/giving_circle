'use client';

import { JSX } from 'react';
import Slider, { Settings } from 'react-slick';

const SliderClient = (props: JSX.IntrinsicAttributes & JSX.IntrinsicClassAttributes<Slider> & Readonly<Settings>) => {
	return <Slider {...props}>{props.children}</Slider>;
};

export default SliderClient;
