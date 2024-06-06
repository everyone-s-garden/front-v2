import React, { SetStateAction } from 'react';

export interface IMainRoute {
  href: string;
  tabName: string;
  keyword: string;
  des: string;
  icon: React.FunctionComponent;
}

export type ISubRoute = Omit<IMainRoute, 'des' | 'icon'>;

export interface IWhipser {
  id: number;
  title: string;
  thumbnail: string | null;
  userName: string;
  userProfile: string | null;
  likeCount: number;
  commentCount: number;
  payload: string;
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
