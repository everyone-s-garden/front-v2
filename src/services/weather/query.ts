import { queryOptions, useSuspenseQuery } from '@tanstack/react-query';
import weatherAPI from './api';

export const gardenPostQueries = {
  all: () => ['weather'] as const,
  weatherByRegion: () =>
    queryOptions({
      queryKey: [...gardenPostQueries.all(), 'region'],
      queryFn: weatherAPI.getWeatherByRegion,
    }),
  hourlyWeather: (lat: number, lng: number) =>
    queryOptions({
      queryKey: [...gardenPostQueries.all(), 'perTime', [lat, lng]],
      queryFn: () => weatherAPI.getHourlyWeather(lat, lng),
    }),
  weeklyWeather: (lat: number, lng: number) =>
    queryOptions({
      queryKey: [...gardenPostQueries.all(), 'weekly', [lat, lng]],
      queryFn: () => weatherAPI.getWeeklyWeather(lat, lng),
    }),
};

export const useGetWeatherByRegion = () => {
  return useSuspenseQuery(gardenPostQueries.weatherByRegion());
};

export const useGetHourlyWeather = (lat: number, lng: number) => {
  return useSuspenseQuery(gardenPostQueries.hourlyWeather(lat, lng));
};

export const useGetWeeklyWeather = (lat: number, lng: number) => {
  return useSuspenseQuery(gardenPostQueries.weeklyWeather(lat, lng));
};
