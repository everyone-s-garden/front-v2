import { EditorState } from 'draft-js';

const isEditorEmpty = (value: EditorState) => {
  // BUG: IME composition state is not considered empty
  return !value.getCurrentContent().hasText();
};

export default isEditorEmpty;
