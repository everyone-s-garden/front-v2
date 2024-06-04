const getBackgroundColorFromWeather = (weather: string): string => {
  switch (weather) {
    case '맑음':
      return '#FFF4EB';
    case '비':
      return '#8096A2';
    case '비/눈':
      return '#4E6785';
    case '눈':
      return '#99B4D4';
    case '구름많음':
      return '#EBF7FF';
    case '소나기':
      return '#4B6778';
    case '흐림':
      return '#E8F4CF';
    default:
      return '#FFF4EB';
  }
};

export default getBackgroundColorFromWeather;
