import { useCallback, useState } from 'react';

const useClipboard = () => {
  const [isCopied, setIsCopied] = useState(false);

  const onCopy = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (e) {
      alert('복사에 실패하였습니다.');
    }
  }, []);

  return {
    isCopied,
    onCopy,
  };
};

export default useClipboard;
