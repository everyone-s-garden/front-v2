import { Editor } from '@tiptap/react';
import { useCallback, useMemo } from 'react';

const useBlockTool = (editor: Editor) => {
  const toggleHeading = useCallback(
    (level: 1 | 2 | 3) => {
      editor.chain().focus().toggleHeading({ level }).run();
    },
    [editor],
  );

  const setUnstyled = useCallback(() => {
    editor.chain().focus().setParagraph().run();
  }, [editor]);

  const headingTools = useMemo(
    () => [
      {
        label: '본문',
        handler: setUnstyled,
        styles: { fontWeight: 'medium' },
      },
      {
        label: '제목 1',
        handler: () => toggleHeading(1),
        styles: { fontWeight: 'bold', fontSize: '20px' },
      },
      {
        label: '제목 2',
        handler: () => toggleHeading(2),
        styles: { fontWeight: 'semiBold', fontSize: '18px' },
      },
      {
        label: '서브',
        handler: () => toggleHeading(3),
        styles: { fontSize: '14px' },
      },
    ],
    [setUnstyled, toggleHeading],
  );

  const headingType = editor.isActive('heading', { level: 1 })
    ? '제목 1'
    : editor.isActive('heading', { level: 2 })
      ? '제목 2'
      : editor.isActive('heading', { level: 3 })
        ? '서브'
        : '본문';

  return {
    toggleHeading,
    setUnstyled,
    headingTools,
    headingType,
  };
};

export default useBlockTool;
