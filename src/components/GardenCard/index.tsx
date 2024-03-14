import { Box, Card, CardBody, Image } from '@chakra-ui/react';
import { ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LikeDoneIcon, LikeIcon } from '@/assets/icons';

export interface GardenCardProps {
  type: PageType;
  src: string;
  children: ReactNode;
  navUrl: string;

  // 좋아요 API 통신시 수정 예정입니다.
  clickLike: () => void;
}

type PageType = 'mainPage' | 'cropsPage';

const GardenCard = ({ type, src, children, navUrl }: GardenCardProps) => {
  // 좋아요 API 통신시 수정 예정입니다. 현재는 좋아요 상태관리만 해주고 있습니다.
  const [like, setLike] = useState(false);
  const navigate = useNavigate();

  return (
    <Card w="fit-content" boxShadow="none">
      <CardBody
        w={
          type === 'mainPage'
            ? { mobile: '190px', tablet: '276px' }
            : type === 'cropsPage'
              ? { mobile: '350px', tablet: '276px' }
              : undefined
        }
        padding="none"
      >
        <Box
          display={
            type === 'cropsPage'
              ? { mobile: 'flex', tablet: 'block' }
              : undefined
          }
          gap="8px"
        >
          <Image
            position="relative"
            w={
              type === 'cropsPage'
                ? { mobile: '111px', tablet: '276px' }
                : undefined
            }
            h={
              type === 'mainPage'
                ? { mobile: '129px', tablet: '168px' }
                : type === 'cropsPage'
                  ? {
                      mobile: '108px',
                      tablet: '207px',
                    }
                  : undefined
            }
            borderRadius="10px"
            marginBottom="12px"
            cursor="pointer"
            src={src}
            onClick={() => {
              navigate(navUrl);
            }}
          />
          {type === 'mainPage' && (
            <Box
              position="absolute"
              top="14.38px"
              left="13.33px"
              cursor="pointer"
              onClick={() => {
                setLike(!like);
              }}
            >
              {like ? <LikeDoneIcon fill="white" /> : <LikeIcon fill="white" />}
            </Box>
          )}

          <Box display="flex" flexDir="column" gap="8px">
            {children}
          </Box>
        </Box>
      </CardBody>
    </Card>
  );
};

export default GardenCard;
