import NuEl from './el';

export default class NuPh extends NuEl {
  static get nuTag() {
    return 'nu-ph';
  }

  static get nuId() {
    return 'ph';
  }

  static get nuStyles() {
    return {
      display: 'block',
      fill: '#special-bg',
      height: '1fs 1fs',
      width: 'auto :circle[1lh]',
      radius: '.5r :circle[round]',
      interactive: 'n :disabled[y]',
      filter: 'saturate(0.5) contrast(0.88) opacity(var(--skeleton-opacity))',
      transition: 'color',
    };
  }

  static nuCSS({ tag, css }) {
    return [
      ...css,

      `${tag} {
        background-image: linear-gradient(135deg, rgba(var(--special-text-color-rgb), .5) 0%, rgba(var(--special-text-color-rgb), .5) 5%, rgba(var(--special-text-color-rgb), 0) 35%, var(--special-bg-color) 50%, rgba(var(--special-bg-color-rgb), 0) 65%, rgba(var(--special-text-color-rgb), .5) 95%, rgba(var(--special-text-color-rgb), .5) 100%);
        background-repeat: repeat;
        background-size: var(--skeleton-animation-size);
        animation: nu-skeleton-animation calc(var(--skeleton-animation-time) * var(--transition-enabler)) linear infinite;
      }`,

      `@keyframes nu-skeleton-animation {
        0% {
          background-position: 0 0;
        }
        100% {
          background-position: var(--skeleton-animation-size) 0;
        }
      }`,
    ];
  }
}
