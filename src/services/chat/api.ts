import { ChatContentsResponse, ChatRooms, EnterChatRoom } from './type';
import apiClient from '@/api/apiClient';

const chatAPI = {
  createGardenChatRoom: async ({
    writerId,
    postId,
  }: {
    writerId: number;
    postId: number;
  }): Promise<{ chatRoomId: number }> => {
    const response = await apiClient.post(`/garden-chats`, {
      writerId,
      postId,
    });

    return response.data;
  },

  enterGardenChatRoom: async ({
    chatRoomId,
  }: {
    chatRoomId: number;
  }): Promise<EnterChatRoom> => {
    const response = await apiClient.patch(`/garden-chats/${chatRoomId}`);

    return response.data;
  },

  registerGardenChatSession: async ({
    sessionId,
    roomId,
  }: {
    sessionId: number;
    roomId: number;
  }) => {
    const response = await apiClient.post(`/garden-chats/sessions`, {
      sessionId,
      roomId,
    });

    return response;
  },

  getGardenChatRooms: async (): Promise<ChatRooms> => {
    const response = await apiClient.get(`/garden-chats?pageNumber=0`);

    return response.data;
  },

  getGardenChatContents: async ({
    roomId,
    pageParam,
  }: {
    roomId: number;
    pageParam: number;
  }): Promise<ChatContentsResponse> => {
    const response = await apiClient.get(
      `/garden-chats/${roomId}/messages?pageNumber=${pageParam}`,
    );

    return response.data;
  },
};

export default chatAPI;
