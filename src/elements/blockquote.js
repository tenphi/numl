import NuBlock from './block';

export default class NuBlockQuote extends NuBlock {
  static get nuTag() {
    return 'nu-blockquote';
  }

  static get nuRole() {
    return 'blockquote';
  }

  static get nuDefaults() {
    return {
      border: '2b left color(special)',
      fill: 'diff',
      text: 'i',
      padding: '2x',
    };
  }
}