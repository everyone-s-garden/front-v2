import { Box, Text } from '@chakra-ui/react';
import { Meta, StoryObj } from '@storybook/react';
import { PropsWithChildren } from 'react';
import { withRouter } from 'storybook-addon-react-router-v6';
import GardenCard, { GardenCardProps } from '.';
import { colors, fontWeights } from '@/styles/theme';

const meta = {
  title: 'Components/GardenCard',
  component: GardenCard,
  tags: ['autodocs'],
  decorators: [withRouter],
} satisfies Meta<typeof GardenCard>;

export default meta;

export const MainPage: StoryObj<PropsWithChildren<GardenCardProps>> = {
  args: {
    type: 'mainPage',
    src: 'https://s3-alpha-sig.figma.com/img/4313/ea8b/eff77ece9260b82a7a17b030b9e5e4f8?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m36C~t5oxtgGuHQyv92~bWYm0ki9jz4mBPVeYC8yfv15D3ZzZHl4qZs~XULqVNs3dY8qffuADJzcHbNmZiIVtCPQ4hgTaMM7dUwldhErbscsVECJ8jf8MbqA0ikf2kQ8iFM5fg6wp6DWx1wRuoBrvnl7aGXaJd12QvbmRjmvb63OAtMq25oqvD0YjDE4ro9glM~J9PYkOliVR2WiMJe1S-rrw6~ye5aFeLflTwV96v8FcBtnOy0Xq4rEYrUsL9rHogHWNRoNPLpRKdBP9xCHWNrJ6YuXV~edWYHJUNH1pi~hRcfzl13cLugDZ3dvO4cv-4AbdeAXUFMEE5B6MH-ciw__',
    children: (
      <>
        <Box display="flex" gap="8px" alignItems="center" maxH="21px">
          <Text
            fontSize={{ mobile: '16px', tablet: '18px' }}
            fontWeight={fontWeights.semiBold}
          >
            클라인 가르텐
          </Text>
          <Text fontSize="14px" color={colors.gray[700]}>
            처인구 역삼동
          </Text>
        </Box>
        <Text fontSize="16px" fontWeight={fontWeights.bold} h="19px">
          130,000원
        </Text>
        <Text fontSize="16px" color={colors.gray[700]} h="19px">
          무제한
        </Text>
      </>
    ),
  },
};

export const CropsPage: StoryObj<PropsWithChildren<GardenCardProps>> = {
  args: {
    type: 'cropsPage',
    src: 'https://health.chosun.com/site/data/img_dir/2014/03/27/2014032702818_0.jpg',
    children: (
      <>
        <Text
          h="24px"
          fontSize={{ mobile: '16px', tablet: '20px' }}
          fontWeight={fontWeights.semiBold}
        >
          방울토마토
        </Text>
        <Text
          h="19px"
          fontSize={{ mobile: '14px', tablet: '16px' }}
          color={colors.gray[700]}
        >
          고양시 · 행신동 / 1분전
        </Text>
        <Text
          h="24px"
          fontSize={{ mobile: '16px', tablet: '20px' }}
          fontWeight={fontWeights.bold}
        >
          18,000원
        </Text>
      </>
    ),
  },
};
