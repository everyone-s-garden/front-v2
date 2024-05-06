import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import loginApi from '@/services/login/api';

function Redirection() {
  const navigate = useNavigate();
  const serachParams = new URLSearchParams(window.location.search);
  const code = serachParams.get('code');
  const deniedCode = serachParams.get('error');

  const kakaoRedirectUri = import.meta.env.VITE_KAKAO_REDIRECT_URI;

  useEffect(() => {
    const data = loginApi.kakaoLogin(code, kakaoRedirectUri);
    console.log(data);
  }, []);

  useEffect(() => {
    if (deniedCode === 'access_denied') {
      navigate('/login');
    }
  }, [deniedCode, navigate]);

  return <></>;
}

export default Redirection;
