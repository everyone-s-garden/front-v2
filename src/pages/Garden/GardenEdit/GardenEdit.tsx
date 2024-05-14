import { Box, Button, Center, Text } from '@chakra-ui/react';
import { SubmitHandler } from 'react-hook-form';
import Input from '../components/Input';
import { Garden, useGardenForm } from './schema';
import ImageSelector from '@/components/ImageSelector/ImageSelector';

const GardenEdit = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useGardenForm();

  const onSubmit: SubmitHandler<Garden> = (data) => {
    console.log(data);
  };

  return (
    <Box
      as={'form'}
      maxW={'704px'}
      h={{ mobile: 'calc(100svh - 53px)', tablet: 'auto' }}
      px={'20px'}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'space-between'}
      marginInline="auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Center
        w={{ mobile: '100%', tablet: 'auto' }}
        h={{ mobile: '53px', tablet: '115px' }}
        pos={{ mobile: 'fixed', tablet: 'static' }}
        zIndex={100}
        top={0}
        right={'-0px'}
        borderBottom={{ mobile: '1px solid', tablet: 'none' }}
        borderColor={'gray.100'}
      >
        <Text fontSize={'18px'} fontWeight={'semiBold'} textAlign={'center'}>
          분양 텃밭 등록하기
        </Text>
      </Center>

      <Box>
        <Box
          w={{ mobile: 'calc(100% + 20px)', tablet: 'auto' }}
          mb={{ mobile: '30px', tablet: '50px' }}
          __css={{
            '.swiper': {
              pr: { mobile: '20px', tablet: '0' },
            },
          }}
        >
          <ImageSelector
            color="green"
            breakPoints={{
              0: {
                slidesPerView: 2.5,
                spaceBetween: 14,
              },
              768: {
                slidesPerView: 3.5,
                spaceBetween: 12,
              },
            }}
            size={{ mobile: 100, tablet: 136, desktop: 136 }}
          />
        </Box>

        <Box>
          <Input
            placeholder={'텃밭 이름'}
            errorMessage={errors.gardenName?.message}
            {...register('gardenName')}
          />
          <Input
            placeholder={'가격'}
            type="number"
            errorMessage={errors.price?.message}
            {...register('price')}
          />
          <Input
            placeholder={'면적(평)'}
            type="number"
            errorMessage={errors.size?.message}
            {...register('size')}
          />
          <Input
            placeholder={'연락처'}
            type="tel"
            errorMessage={errors.contact?.message}
            {...register('contact')}
          />
        </Box>
      </Box>

      <Box display={{ mobile: 'block', tablet: 'flex' }}>
        <Button
          variant={'unstyled'}
          pos={{ mobile: 'fixed', tablet: 'static' }}
          bottom={0}
          w={{ mobile: '100%', tablet: '344px' }}
          h={{ mobile: '60px', tablet: '54px' }}
          m={{ mobile: '20px 0 0 -20px', tablet: '50px auto 100px auto' }}
          borderRadius={{ mobile: '0', tablet: '10px' }}
          bg={'green.500'}
          fontWeight={'semiBold'}
          color={'white'}
          type={'submit'}
        >
          등록하기
        </Button>
      </Box>
    </Box>
  );
};

export default GardenEdit;
