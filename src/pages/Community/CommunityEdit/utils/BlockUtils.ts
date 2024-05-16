import { EditorState, RichUtils } from 'draft-js';
import { Dispatch, SetStateAction } from 'react';
import { BlockTypes } from '../types';

const BlockUtils = {
  getBlockStyles: (editorState: EditorState): BlockTypes => {
    const currentContent = editorState.getCurrentContent();
    const selectedBlockKey = editorState.getSelection().getStartKey();
    const selectedBlock = currentContent.getBlockForKey(selectedBlockKey);
    const currentBlockType = selectedBlock.getType();

    return currentBlockType as BlockTypes;
  },
  setBlockStyles: ({
    editorState,
    setEditorState,
    type,
  }: {
    editorState: EditorState;
    setEditorState: Dispatch<SetStateAction<EditorState>>;
    type: BlockTypes | '';
  }) => {
    setEditorState(RichUtils.toggleBlockType(editorState, type));
  },
};

export default BlockUtils;
