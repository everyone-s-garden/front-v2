import { useMutation } from '@tanstack/react-query';
import reportAPI from './api';

export const useReportGarden = () => {
  return useMutation({
    mutationFn: reportAPI.reportGarden,
  });
};

export const useReportCrop = () => {
  return useMutation({
    mutationFn: reportAPI.reportCrop,
  });
};

export const useReportCommunityPost = () => {
  return useMutation({
    mutationFn: reportAPI.reportCommunityPost,
  });
};

export const useReportCommunityComment = () => {
  return useMutation({
    mutationFn: reportAPI.reportCommunityComment,
  });
};

export const useReportChat = () => {
  return useMutation({
    mutationFn: reportAPI.reportChat,
  });
};
