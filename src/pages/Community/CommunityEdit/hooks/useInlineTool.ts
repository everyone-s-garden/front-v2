import { Editor } from '@tiptap/react';
import { useCallback } from 'react';
import { BoldIcon, ItalicIcon, UnderlineIcon } from '@/assets/icons';

const useInlineTool = (editor: Editor) => {
  const toggleBold = useCallback(() => {
    editor.chain().focus().toggleBold().run();
  }, [editor]);

  const toggleItalic = useCallback(() => {
    editor.chain().focus().toggleItalic().run();
  }, [editor]);

  const toggleUnderline = useCallback(() => {
    editor.chain().focus().toggleUnderline().run();
  }, [editor]);

  const inlineTools = [
    {
      label: 'bold',
      handler: toggleBold,
      isActive: editor.isActive('bold'),
      Icon: BoldIcon,
    },
    {
      label: 'italic',
      handler: toggleItalic,
      isActive: editor.isActive('italic'),
      Icon: ItalicIcon,
    },
    {
      label: 'underline',
      handler: toggleUnderline,
      isActive: editor.isActive('underline'),
      Icon: UnderlineIcon,
    },
  ];

  return {
    toggleBold,
    toggleItalic,
    toggleUnderline,
    inlineTools,
  };
};

export default useInlineTool;
