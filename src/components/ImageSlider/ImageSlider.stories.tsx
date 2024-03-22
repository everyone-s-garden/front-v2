import { Image } from '@chakra-ui/react';
import { Meta, StoryObj } from '@storybook/react';
import { PropsWithChildren } from 'react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { Banner1, Banner2 } from '@/assets/images';
import ImageSlider, { ImageSliderProps } from './ImageSlider';

const meta: Meta<typeof ImageSlider> = {
  title: 'Components/ImageSlider',
  component: ImageSlider,
  tags: ['autodocs'],
  decorators: [withRouter],
};

export default meta;

const mainPageImageArray = [Banner1, Banner2];
const communityPageImageArray = [
  'https://www.durenature.co.kr/data/editor/2104/thumb-85ad254c2972c9943bd748aaa69c0420_1617861480_2457_1024x627.jpg',
  'https://snvision.seongnam.go.kr/imgdata/snvision/201801/2018012807119336.jpg',
];

export const MainPage: StoryObj<PropsWithChildren<ImageSliderProps>> = {
  args: {
    arrowStyle: 'plain',
    numberOfSlides: mainPageImageArray.length,
    children: mainPageImageArray.map((image, i) => (
      <Image src={image} key={i} />
    )),
  },
};

export const AnotherPage: StoryObj<PropsWithChildren<ImageSliderProps>> = {
  args: {
    arrowStyle: 'circle',
    numberOfSlides: communityPageImageArray.length,
    children: communityPageImageArray.map((image, i) => (
      <Image src={image} key={i} />
    )),
  },
};
