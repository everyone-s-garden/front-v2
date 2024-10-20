import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { BottomMenu } from '@/components';

import { ThreeDotsMenuIcon } from '@/assets/icons';
import MenuButton from '../../components/MenuButton';
import { MyManagedGarden } from '../../type';
import { useDeletePost, useGetMyManagedGarden } from '@/services/mypage/query';
import ProfileGardenSlider from '@/pages/Profile/components/ProfileGarden/ProfileGardenSlider';
import ProfileGardenFooter from '@/pages/Profile/components/ProfileGarden/ProfileGarendFooter';
import useMyManaged from '../hooks/useMyManaged';

const GardenDiary = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [nextGardenId, setNextGardenId] = useState(0);
  const { data: myManagedGardensData } = useGetMyManagedGarden(nextGardenId);
  const { pathname } = useLocation();
  const { mutate: deletePost } = useDeletePost();
  const [allManagedGardens, setAllManagedGardens] = useState<MyManagedGarden[]>(
    [],
  );

  const { myManagedGardensRef } = useMyManaged({
    myManagedGardensData: myManagedGardensData,
    setNextGardenId,
  });

  if (!myManagedGardensData) return;

  console.log(myManagedGardensData);

  useEffect(() => {
    if (myManagedGardensData?.myManagedGardenGetResponses) {
      setAllManagedGardens((prevGardens) => [
        ...prevGardens,
        ...myManagedGardensData.myManagedGardenGetResponses,
      ]);
    }
  }, [myManagedGardensData]);

  if (myManagedGardensData.myManagedGardenGetResponses.length === 0)
    return <h1>등록된 나의 게시글이 없습니다.</h1>;

  // const handleDeleteClick = () => {
  //   deletePost({ path: pathname, id: myGarden.myManagedGardenId });
  // };

  return (
    <Box
      w="100%"
      pl={{ mobile: '20px', tablet: '0' }}
      pr={{ mobile: '21px', tablet: '0' }}
    >
      <Box
        pt="13px"
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

      <Flex flexDir="column" borderBottom="1px solid" borderColor="gray.100">
        {allManagedGardens?.map((el, i) => (
          <Box key={i}>
            <ProfileGardenSlider images={el.images} />
            <ProfileGardenFooter garden={el} />
            <Text
              color="sub"
              fontSize={{ mobile: '16px', tablet: '18px' }}
              mt={{ mobile: '24px', tablet: '31px' }}
              mb={{ mobile: '50px', tablet: '70px' }}
            >
              {el.description}
            </Text>
          </Box>
        ))}
        <div ref={myManagedGardensRef} />
      </Flex>
    </Box>
  );
};

export default GardenDiary;
