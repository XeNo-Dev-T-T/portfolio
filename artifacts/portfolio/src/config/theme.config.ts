export const themeConfig = {
  colors: {
    primary: '#11111b',
    secondary: '#cba6f7',
    background: '#cba6f7',
    foreground: '#11111b',
    muted: '#a991d4',
    accent: '#cba6f7',
  },

  fonts: {
    mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
    code: ['Fira Code', 'JetBrains Mono', 'Courier New', 'monospace'],
  },

  animations: {
    speed: {
      fast: '0.2s',
      normal: '0.3s',
      slow: '0.6s',
    },
    easing: {
      smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      elastic: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    },
  },

  effects: {
    glowEnabled: true,
    particlesEnabled: true,
    scrollProgressEnabled: true,
    typingAnimationEnabled: true,
    floatAnimationEnabled: true,
  },

  layout: {
    maxWidth: '1280px',
    containerPadding: '2rem',
    borderRadius: '0.75rem',
  },
} as const;

export type ThemeConfig = typeof themeConfig;
