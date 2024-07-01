import { Box, Flex, Grid, Show } from '@chakra-ui/react';
import ProfileIndividualSaleGarden from './ProfileIndividualSaleGarden';

const fakeImages = [
  'https://www.durenature.co.kr/data/editor/2104/thumb-85ad254c2972c9943bd748aaa69c0420_1617861480_2457_1024x627.jpg',
  'https://snvision.seongnam.go.kr/imgdata/snvision/201801/2018012807119336.jpg',
  'https://www.durenature.co.kr/data/editor/2104/thumb-85ad254c2972c9943bd748aaa69c0420_1617861480_2457_1024x627.jpg',
  'https://snvision.seongnam.go.kr/imgdata/snvision/201801/2018012807119336.jpg',
  'https://www.durenature.co.kr/data/editor/2104/thumb-85ad254c2972c9943bd748aaa69c0420_1617861480_2457_1024x627.jpg',
  'https://snvision.seongnam.go.kr/imgdata/snvision/201801/2018012807119336.jpg',
];

const ProfileSaleGarden = () => {
  return (
    <Box mb={{ tablet: '164px' }}>
      <Show below="tablet">
        <Flex flexDir="column" gap="36px">
          {fakeImages.map((image, i) => (
            <ProfileIndividualSaleGarden image={image} key={i} />
          ))}
        </Flex>
      </Show>

      <Show above="tablet">
        <Grid
          gridTemplateColumns={{ tablet: '1fr 1fr', desktop: '1fr 1fr 1fr' }}
          gridRowGap="52px"
          gridColumnGap="48px"
          flexDir="column"
          gap="45px"
        >
          {fakeImages.map((image, i) => (
            <ProfileIndividualSaleGarden image={image} key={i} />
          ))}
        </Grid>
      </Show>
    </Box>
  );
};

export default ProfileSaleGarden;
