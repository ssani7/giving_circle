import { StaticImageData } from 'next/image';

export type Campaign = {
	_id: number;
	type: string;
	title: string;
	image: StaticImageData;
	date: Date;
};
