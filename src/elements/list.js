import NuEl from './el';

export default class NuList extends NuEl {
  static get nuTag() {
    return 'nu-list';
  }

  static get nuRole() {
    return 'list';
  }

  static get nuGenerators() {
    return {
      type(type) {
        return {
          'list-style-type': type || 'disc',
        };
      },
      position(position) {
        return {
          'list-style-position': position || 'inside',
        };
      },
    }
  }

  static get nuStyles() {
    return {
      display: 'block',
      flow: 'column',
      gap: '1x',
      position: 'outside',
    };
  }

  static nuCSS({ css, tag }) {
    return [
      ...css,

      `${tag}:not([enumerate]):not([type]) {
        list-style-type: disc;
      }`,

      `${tag}[enumerate]:not([type]) {
        list-style-type: decimal;
      }`,

      `${tag} ${tag}:not([padding]) {
        padding-left: calc(var(--gap) * 4);
      }`,
    ];
  }
}
