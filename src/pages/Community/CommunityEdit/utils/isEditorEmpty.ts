import { EditorState } from 'draft-js';

const isEditorEmpty = (value: EditorState) => {
  return !value.getCurrentContent().hasText();
};

export default isEditorEmpty;
