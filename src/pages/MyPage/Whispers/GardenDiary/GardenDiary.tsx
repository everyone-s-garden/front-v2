import { Box, Flex, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navigation, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import NoContent from '../../components/NoContent';
import { MyManagedGarden } from '../../type';
// import useMyManaged from '../hooks/useMyManaged';
import ProfileGardenSlider from '@/pages/Profile/components/ProfileGarden/ProfileGardenSlider';
import ProfileGardenFooter from '@/pages/Profile/components/ProfileGarden/ProfileGarendFooter';
import { PATH } from '@/routes/constants';
import {
  useDeleteMyManagedGarden,
  useGetMyManagedGarden,
} from '@/services/mypage/query';

const GardenDiary = () => {
  const [nextGardenId] = useState(0);
  const { data: myManagedGardensData } = useGetMyManagedGarden(nextGardenId);
  const [allManagedGardens, setAllManagedGardens] = useState<MyManagedGarden[]>(
    [],
  );

  const nav = useNavigate();
  const { mutate } = useDeleteMyManagedGarden();

  // const { myManagedGardensRef } = useMyManaged({
  //   myManagedGardensData: myManagedGardensData,
  //   setNextGardenId,
  // });

  useEffect(() => {
    if (myManagedGardensData?.myManagedGardenGetResponses) {
      // setAllManagedGardens((prevGardens) => [
      //   ...prevGardens,
      //   ...myManagedGardensData.myManagedGardenGetResponses,
      // ]);

      setAllManagedGardens((prevGardens) => {
        const combinedGardens = [
          ...prevGardens,
          ...myManagedGardensData.myManagedGardenGetResponses,
        ];

        const uniqueGardens = combinedGardens.reduce<MyManagedGarden[]>(
          (acc, current) => {
            if (
              !acc.some(
                (garden) =>
                  garden.myManagedGardenId === current.myManagedGardenId,
              )
            ) {
              acc.push(current);
            }

            return acc;
          },
          [],
        );

        return uniqueGardens;
      });
    }

    return () => setAllManagedGardens([]);
  }, [myManagedGardensData]);

  if (!myManagedGardensData) return;

  if (myManagedGardensData.myManagedGardenGetResponses.length === 0)
    return (
      <NoContent
        content={`등록된 일기가 없습니다.\n새로운 일기를 등록해보세요!`}
      />
    );

  // const handleDeleteClick = () => {
  //   deletePost({ path: pathname, id: myGarden.myManagedGardenId });
  // };

  const removeGarden = (id: number) => {
    mutate(id);
    setAllManagedGardens((prevGardens) => {
      return prevGardens.filter((el) => el.myManagedGardenId !== id);
    });
  };

  const editGarden = (info: MyManagedGarden) => {
    console.log(info);
    nav(PATH.MAP.CREATE_MY_GARDEN, { state: { info } });
  };

  return (
    <Box w="100%" pb={{ mobile: '0', tablet: '150px' }}>
      <Box
        pb="19px"
        borderBottom="1px solid"
        borderColor="gray.100"
        mb="24px"
        display={{ mobile: 'none', tablet: 'block' }}
      >
        <Text fontSize="20px" fontWeight="semiBold">
          텃밭 일기
        </Text>
      </Box>

      <Flex flexDir="column">
        <Box
          w={{ mobile: '100%', tablet: '95%' }}
          position="relative"
          __css={{
            '.swiper-button-next': {
              transform: 'translateY(-75px)',
            },
            '.swiper-button-prev': {
              transform: 'translateY(75px)',
            },
          }}
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={15}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[FreeMode, Navigation]}
            freeMode={false}
            style={{
              width: '100%',
              zIndex: 0,
              maxWidth: 720,
              paddingBottom: 150,
            }}
          >
            {allManagedGardens?.map((el, i) => (
              <SwiperSlide key={i} style={{ width: 'fit-content', zIndex: 0 }}>
                <ProfileGardenSlider images={el.images} />
                <ProfileGardenFooter
                  garden={el}
                  handleDelete={() => removeGarden(el.myManagedGardenId)}
                  handleEdit={() => editGarden(el)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Flex>
    </Box>
  );
};

export default GardenDiary;
