import { Box } from '@chakra-ui/react';
import * as StompJS from '@stomp/stompjs';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ContentChatList from './components/ContentChatList';
import ContentHeader from './components/ContentHeader';
import ContentInput from './components/ContentInput';
import { useEnterGardenChatRoom } from '@/services/chat/query';
import { ChatContent } from '@/services/chat/type';
import tokenManager from '@/services/login/tokenManager';

const ChatContents = () => {
  const location = useLocation();
  const roomId = Number(location.pathname.split('/').pop());
  const client = useRef<StompJS.Client>();
  const token = tokenManager.accessToken();
  const { mutate: enterChatRoom, data: productInfo } = useEnterGardenChatRoom();
  const [socketMessage, setSocketMessage] = useState<ChatContent[]>([]);

  useEffect(() => {
    if (roomId) {
      enterChatRoom({ chatRoomId: Number(roomId) });
    }
  }, [roomId, enterChatRoom]);

  useEffect(() => {
    setSocketMessage([]);
    client.current = new StompJS.Client({
      brokerURL: import.meta.env.VITE_API_CHAT_URL,
      connectHeaders: {
        'access-token': token!,
      },
      debug: (str) => {
        console.log(str);
      },
      onConnect: () => {
        client.current &&
          client.current.subscribe(
            `/queue/garden-chats/${roomId}`,
            (message: StompJS.IMessage) => {
              setSocketMessage((prev) => [...prev, JSON.parse(message.body)]);
            },
          );
      },
      onStompError: (frame) => {
        console.log('Broker reported error: ' + frame.headers['message']);
        console.log('Additional details: ' + frame.body);
      },
    });
    client.current && client.current.activate();
  }, [roomId, token]);

  const sendMessage = (message: string) => {
    client.current &&
      client.current.publish({
        headers: { 'access-token': token! },
        destination: `/app/garden-chats/${roomId}`,
        body: JSON.stringify({ content: message }),
      });
  };

  if (!productInfo) return null;

  return (
    <Box
      position={{ mobile: 'absolute', tablet: 'relative' }}
      h="100%"
      w="100%"
      bg="white"
      top="0"
      left="0"
      right="0"
      z-index="91"
    >
      <ContentHeader productInfo={productInfo} />
      <ContentChatList
        roomId={roomId}
        socketMessage={socketMessage}
        productInfo={productInfo}
      />
      <ContentInput sendMessage={sendMessage} />
    </Box>
  );
};

export default ChatContents;
