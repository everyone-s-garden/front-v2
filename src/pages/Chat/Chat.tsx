import { Flex } from '@chakra-ui/react';
import { useRef } from 'react';
import { Outlet } from 'react-router-dom';
import ChatList from './ChatList/ChatList';

const Chat = () => {
  const ref = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const handleOnClick = () => {
    if (ref.current) {
      ref.current.value = '4888';
    }
    if (formRef.current) {
      formRef.current.action =
        'https://www.modunong.or.kr:449/home/kor/garden/parcel/view.do';
      formRef.current.submit();
    }
  };

  const a = {
    ROW_NUM: 303,
    FARM_ID: 4450,
    FARM_TYPE: '수성구청',
    FARM_NM: '조일골농장',
    AREA_LCD: 23,
    AREA_LNM: '대구광역시',
    AREA_MCD: 225,
    AREA_MNM: '수성구',
    ADDRESS1: '대구광역시 수성구 지산동 16-1, 16-2, 18, 19, 20, 42-2',
    FARM_AREA_INFO: '9,284',
    SELL_AREA_INFO: '20',
    HOMEPAGE: '',
    COLLEC_PROD: '9개월',
    OFF_SITE: '주차장, 화장실',
    APPLY_MTHD: '인터넷, 행정복지센터 접수',
    PRICE: '40',
    POSLAT: '35.830724322459695',
    POSLNG: '128.64799293942323',
    REGIST_DT: '20200106',
    UPDT_DT: '20230222',
  };

  return (
    <Flex
      w="100%"
      h={{ mobile: '100vh', tablet: 'calc(100vh - 108px)' }}
      maxW="1200px"
      bg={{ mobile: 'white', tablet: 'orange.100' }}
      m="0 auto"
    >
      <ChatList />
      <Outlet />
      <form
        ref={formRef}
        id="cmmnForm"
        name="cmmnForm"
        action="/home/kor/garden/parcel/index.do?menuPos=9"
        method="post"
      >
        <input id="tabPos" name="tabPos" type="hidden" value="C" />

        <input ref={ref} type="hidden" id="idx" name="idx" />
      </form>
      <button id="idx" onClick={handleOnClick}>
        test
      </button>
    </Flex>
  );
};

export default Chat;
