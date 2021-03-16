import NuAction from './action';

export default class NuRadio extends NuAction {
  static get nuTag() {
    return 'nu-radio';
  }

  static get nuRole() {
    return 'radio';
  }

  static get nuShadowRoot() {
    return false;
  }

  static get nuTemplate() {
    return `
      <nu-circle
        fill="^host clear :pressed[#special-bg]"
        transition="fill"
        size="1em - 2bw"
        border="0"></nu-circle>
    `;
  }

  static get nuStyles() {
    return {
      display: 'inline-block',
      width: '1em - 2bw',
      height: '1em - 2bw',
      border: '#text :disabled.pressed[#text.50] :pressed[#special-bg]',
      radius: 'round',
      content: 'stretch',
      items: 'center',
      padding: '1ow',
      sizing: 'content',
      cursor: 'default',
      text: 'v-middle',
      mark: ':focusable[.5em hover]',
      inset: '0 :active[.5em] :pressed[0]',
      fill: 'bg',
      expand: '.5em',
    };
  }
}
