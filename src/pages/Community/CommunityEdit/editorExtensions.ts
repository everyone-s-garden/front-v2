import Bold from '@tiptap/extension-bold';
import Document from '@tiptap/extension-document';
import Dropcursor from '@tiptap/extension-dropcursor';
import Heading from '@tiptap/extension-heading';
import History from '@tiptap/extension-history';
import Italic from '@tiptap/extension-italic';
import Paragraph from '@tiptap/extension-paragraph';
import Placeholder from '@tiptap/extension-placeholder';
import Text from '@tiptap/extension-text';
import Underline from '@tiptap/extension-underline';
import { Extensions } from '@tiptap/react';

const extensions: Extensions = [
  Heading.configure({
    levels: [1, 2, 3],
  }),
  Document,
  Paragraph,
  Text,
  Bold,
  Italic,
  Underline,
  Dropcursor,
  History,
  Placeholder.configure({
    placeholder: '질문, 자랑, 공유 등 다양한 글을 작성해보세요.',
  }),
];

export default extensions;
