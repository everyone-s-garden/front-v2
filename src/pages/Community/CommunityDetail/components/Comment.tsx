import {
  Divider,
  Flex,
  FlexProps,
  Icon,
  IconButton,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { AvatarComponent } from '@/components';
import { CommentPlusIcon, HeartIcon } from '@/assets/icons';
import { Comment as CommentType } from '../../types';
import CommentInput from './CommentInput';
import getRelativeTime from '@/utils/getRelativeTime';

interface CommentProps extends CommentType {
  subComments?: CommentType[];
  handleClickLikeComment: (isLike: boolean, commentId: number) => void;
  handleSubmitComment: (content: string, parentCommentId?: number) => void;
}

const Comment = ({
  commentId,
  content,
  isLikeClick,
  likeCount,
  userInfo,
  createdAt,
  subComments,
  handleClickLikeComment,
  handleSubmitComment,
  ...rest
}: CommentProps & FlexProps) => {
  const [subCommentView, setSubCommentView] = useState(false);

  const handleClickReport = () => {
    alert(`준비 중인 기능입니다.`);
  };

  return (
    <Flex
      key={commentId}
      pr={{ mobile: 0, tablet: subComments ? '100px' : 0 }}
      gap={'8px'}
      {...rest}
    >
      <AvatarComponent
        src={userInfo.profile ?? ''}
        w={subComments ? '36px' : '30px'}
        h={subComments ? '36px' : '30px'}
      />
      <Flex flexDir={'column'} gap={'8px'} flexGrow={1}>
        <Text
          fontSize={{ mobile: '16px', tablet: '18px' }}
          fontWeight={'semiBold'}
        >
          {userInfo.name}
        </Text>
        <Text
          fontSize={{ mobile: '14px', tablet: '16px' }}
          fontWeight={'medium'}
        >
          {content}
        </Text>
        <Flex gap={'4px'} align={'center'} h={'20px'}>
          <IconButton
            aria-label="댓글 좋아요 버튼"
            icon={
              <Icon
                as={HeartIcon}
                fill={isLikeClick ? 'sub' : 'none'}
                w={'20px'}
                h={'20px'}
                stroke={'sub'}
              />
            }
            variant={'unstyled'}
            display={'flex'}
            minW={'20px'}
            onClick={() => handleClickLikeComment(isLikeClick, commentId)}
          />
          <Text
            fontSize={'14px'}
            fontWeight={'medium'}
            color={'sub'}
            minW={2.5}
          >
            {likeCount}
          </Text>
          {subComments && (
            <>
              <IconButton
                aria-label="대댓글 버튼"
                icon={
                  <Icon
                    as={CommentPlusIcon}
                    w={'20px'}
                    h={'20px'}
                    fill={'sub'}
                  />
                }
                variant={'unstyled'}
                display={'flex'}
                minW={'20px'}
                ml={'4px'}
                onClick={() => setSubCommentView(!subCommentView)}
              />
              <Text fontSize={'14px'} fontWeight={'medium'} color={'sub'}>
                {subComments.length}
              </Text>
            </>
          )}
          <Divider orientation={'vertical'} h={'20px'} mx={'4px'} />
          <Text
            fontSize={{ mobile: '12px', tablet: '14px' }}
            fontWeight={'medium'}
            color={'sub'}
            cursor={'pointer'}
            onClick={handleClickReport}
          >
            신고하기
          </Text>
          <Divider orientation={'vertical'} h={'20px'} mx={'4px'} />
          <Text
            fontSize={{ mobile: '12px', tablet: '14px' }}
            fontWeight={'medium'}
            color={'sub'}
          >
            {getRelativeTime(createdAt)}
          </Text>
        </Flex>
        {subComments &&
          subComments.map((subComment) => (
            <Comment
              key={subComment.commentId}
              mt={'15px'}
              commentId={subComment.commentId}
              content={subComment.content}
              isLikeClick={subComment.isLikeClick}
              likeCount={subComment.likeCount}
              userInfo={subComment.userInfo}
              createdAt={subComment.createdAt}
              handleClickLikeComment={handleClickLikeComment}
              handleSubmitComment={handleSubmitComment}
            />
          ))}
        {subCommentView && (
          <CommentInput
            commentId={commentId}
            handleSubmitComment={handleSubmitComment}
            mt={'2px'}
            autoFocus={true}
          />
        )}
      </Flex>
    </Flex>
  );
};

export default Comment;
