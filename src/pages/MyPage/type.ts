import React, { SetStateAction } from 'react';

export interface IMainRoute {
  href: string;
  tabName: string;
  keyword: string;
  des: string;
  icon: React.FunctionComponent;
}

export type ISubRoute = Omit<IMainRoute, 'des' | 'icon'>;

export interface Whisper {
  postId: number;
  title: string;
  preview?: string;
  content: string;
  likesCount: number;
  commentsCount: number;
  userInfo: {
    userId: number;
    profile: string;
    name: string;
  };
}

export interface BaseGardenItem {
  gardenId: number;
  size: string;
  gardenName: string;
  price: string;
  gardenStatus: string;
  images: string[];
}

export interface RecentGardenItem extends BaseGardenItem {
  latitude: number;
  longitude: number;
  gardenType: string;
}

export interface CropTrade {
  cropPostId: number;
  title: string;
  imageUrl: string;
}

export interface MyManagedGarden {
  myManagedGardenId: number;
  gardenName: string;
  useStartDate: string;
  useEndDate: string;
  images: string[];
  description: string;
}

export interface userFeedbackModalProps {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<SetStateAction<boolean>>;
}
