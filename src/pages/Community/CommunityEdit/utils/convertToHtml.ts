import { RawDraftContentBlock } from 'draft-js';

const inlineTypeOpen: { [key: string]: string } = {
  BOLD: '<strong>',
  ITALIC: '<em>',
  UNDERLINE: '<u>',
};

const inlineTypeClose: { [key: string]: string } = {
  BOLD: '</strong>',
  ITALIC: '</em>',
  UNDERLINE: '</u>',
};

const blockTypeOpen: { [key: string]: string } = {
  'header-one': '<h1>',
  'header-two': '<h2>',
  'header-three': '<h3>',
  CENTER: '<div class="align-center">',
  RIGHT: '<div class="align-right">',
  unstyled: '<div class="align-left">',
};

const blockTypeClose: { [key: string]: string } = {
  'header-one': '</h1>',
  'header-two': '</h2>',
  'header-three': '</h3>',
  CENTER: '</div>',
  RIGHT: '</div>',
  unstyled: '</div>',
};

const convertToHtml = (data: RawDraftContentBlock[]): string => {
  let htmlString = '';

  data.forEach((block) => {
    if (block.text.length === 0) {
      htmlString +=
        blockTypeOpen[block.type] + '\n' + blockTypeClose[block.type];

      return;
    }

    const blockData = block.inlineStyleRanges
      .reduce<[number, string][]>((acc, { offset, length, style }) => {
        return acc.concat([
          [offset, inlineTypeOpen[style]],
          [offset + length, inlineTypeClose[style]],
        ]);
      }, [])
      .sort((a, b) => a[0] - b[0]);

    let resultString = block.text;

    for (let i = blockData.length - 1; i >= 0; i--) {
      const [index, tag] = blockData[i];
      resultString =
        resultString.slice(0, index) + tag + resultString.slice(index);
    }

    htmlString +=
      blockTypeOpen[block.type] + resultString + blockTypeClose[block.type];
  });

  return htmlString;
};

export default convertToHtml;
