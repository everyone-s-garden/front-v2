import { SystemStyleObject } from '@chakra-ui/react';
import { BLOCK_STYLE } from '../constants';

const toolBarStyle: SystemStyleObject = {
  '.rdw-editor-toolbar': {
    justifyContent: 'center',
    height: '64px',
  },
  '.rdw-block-wrapper': {},
  '.rdw-text-align-wrapper': {},
};

const editorStyle: SystemStyleObject = {
  '.public-DraftEditorPlaceholder-inner': {
    color: 'gray.300',
    fontWeight: 'medium',
  },
  '.public-DraftStyleDefault-block': {
    margin: 0,
  },
  '.public-DraftEditor-content': {
    'h1 *': BLOCK_STYLE['header-one'],
    'h2 *': BLOCK_STYLE['header-two'],
    'h3 *': BLOCK_STYLE['header-three'],
  },
};

const styles = { ...toolBarStyle, ...editorStyle };

export default styles;
