import { Box, Image } from '@chakra-ui/react';
import { ImageSlider } from '@/components';

const fakeImages = [
  'https://www.durenature.co.kr/data/editor/2104/thumb-85ad254c2972c9943bd748aaa69c0420_1617861480_2457_1024x627.jpg',
  'https://snvision.seongnam.go.kr/imgdata/snvision/201801/2018012807119336.jpg',
];

const ProfileGardenSlider = () => {
  return (
    <Box borderTopRadius="10px" overflow="hidden" h="330px">
      <ImageSlider arrowStyle="circle" numberOfSlides={fakeImages.length}>
        {fakeImages.map((image, i) => (
          <Image src={image} key={i} h="330px" />
        ))}
      </ImageSlider>
    </Box>
  );
};

export default ProfileGardenSlider;
