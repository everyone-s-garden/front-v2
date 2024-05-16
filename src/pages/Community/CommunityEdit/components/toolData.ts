export const toolbar = {
  options: ['blockType', 'inline', 'textAlign'],
  blockType: {
    inDropdown: true,
    options: ['Normal', 'H1', 'H2', 'H3'],
  },
  inline: {
    inDropdown: false,
    className: undefined,
    component: undefined,
    dropdownClassName: undefined,
    options: ['bold', 'italic', 'underline'],
    bold: { className: undefined },
    italic: { className: undefined },
    underline: { className: undefined },
  },
  textAlign: {
    isDropdown: true,
    options: ['left', 'center', 'right'],
    left: { className: 'align-left' },
    center: { className: 'align-center' },
    right: { className: 'align-right' },
  },
};

export const editorLabels = {
  // Generic
  'generic.add': 'Add',
  'generic.cancel': 'Cancel',

  // BlockType
  'components.controls.blocktype.h1': '제목 1',
  'components.controls.blocktype.h2': '제목 2',
  'components.controls.blocktype.h3': '서브',
  'components.controls.blocktype.h4': 'Heading 4',
  'components.controls.blocktype.h5': 'Heading 5',
  'components.controls.blocktype.h6': 'Heading 6',
  'components.controls.blocktype.blockquote': 'Blockquote',
  'components.controls.blocktype.code': 'Code',
  'components.controls.blocktype.blocktype': 'mixed',
  'components.controls.blocktype.normal': '본문',

  // Color Picker
  'components.controls.colorpicker.colorpicker': 'Color Picker',
  'components.controls.colorpicker.text': 'Text',
  'components.controls.colorpicker.background': 'Highlight',

  // Embedded
  'components.controls.embedded.embedded': 'Embedded',
  'components.controls.embedded.embeddedlink': 'Embedded Link',
  'components.controls.embedded.enterlink': 'Enter link',

  // Emoji
  'components.controls.emoji.emoji': 'Emoji',

  // FontFamily
  'components.controls.fontfamily.fontfamily': 'Font',

  // FontSize
  'components.controls.fontsize.fontsize': 'Font Size',

  // History
  'components.controls.history.history': 'History',
  'components.controls.history.undo': 'Undo',
  'components.controls.history.redo': 'Redo',

  // Image
  'components.controls.image.image': 'Image',
  'components.controls.image.fileUpload': 'File Upload',
  'components.controls.image.byURL': 'URL',
  'components.controls.image.dropFileText': 'Drop the file or click to upload',

  // Inline
  'components.controls.inline.bold': 'Bold',
  'components.controls.inline.italic': 'Italic',
  'components.controls.inline.underline': 'Underline',
  'components.controls.inline.strikethrough': 'Strikethrough',
  'components.controls.inline.monospace': 'Monospace',
  'components.controls.inline.superscript': 'Superscript',
  'components.controls.inline.subscript': 'Subscript',

  // Link
  'components.controls.link.linkTitle': 'Link Title',
  'components.controls.link.linkTarget': 'Link Target',
  'components.controls.link.linkTargetOption': 'Open link in new window',
  'components.controls.link.link': 'Link',
  'components.controls.link.unlink': 'Unlink',

  // List
  'components.controls.list.list': 'List',
  'components.controls.list.unordered': 'Unordered',
  'components.controls.list.ordered': 'Ordered',
  'components.controls.list.indent': 'Indent',
  'components.controls.list.outdent': 'Outdent',

  // Remove
  'components.controls.remove.remove': 'Remove',

  // TextAlign
  'components.controls.textalign.textalign': 'Text Align',
  'components.controls.textalign.left': 'Left',
  'components.controls.textalign.center': 'Center',
  'components.controls.textalign.right': 'Right',
  'components.controls.textalign.justify': 'Justify',
};
