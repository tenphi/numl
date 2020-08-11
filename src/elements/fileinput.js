import NuElement from './el';
import NuInput from './input';

export default class NuFileInput extends NuElement {
  static get nuTag() {
    return 'nu-fileinput';
  }

  static get nuName() {
    return 'fileinput input';
  }

  static get nuBehaviors() {
    return {
      fileinput: true,
    };
  }

  static get nuStyles() {
    return {
      ...NuInput.nuStyles,
      height: 'min (1lh + 2x + 2bw)',
      cursor: 'default',
      content: 'center start',
      gap: '2x',
    };
  }

  static get nuAttrsFor() {
    return {
      ...NuInput.nuAttrsFor,
    };
  }

  static nuCSS({ tag, css }) {
    return [
      ...css,

      `${tag} input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }`,

      `${tag} input {
        opacity: 0;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transform: scale(100, 100);
      }`,
    ];
  }
}
