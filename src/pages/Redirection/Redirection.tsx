import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Redirection() {
  const navigate = useNavigate();
  const serachParams = new URLSearchParams(window.location.search);
  const code = serachParams.get('code');
  const deniedCode = serachParams.get('error');

  console.log(code);

  useEffect(() => {
    if (deniedCode === 'access_denied') {
      navigate('/login');
    }
  }, [deniedCode, navigate]);

  return <></>;
}

export default Redirection;
