export type ThemeProps = typeof theme;

export const theme = Object.freeze({
  borderRadius: {
    regular: '12px',
    large: '24px',
  },

  colors: {
    accent: '#5CD3A8',
    white: '#f2f2f2',
    light: '#EBD8FF',
    dark: '#373737',
    mainBackground: '#e2e2e2',
    cardBackground: [
      'linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);',
    ],
  },

  fontSizes: {
    lg: '20px',
    xl: '24px',
  },

  fontWeights: {
    medium: 500,
    semibold: 600,
  },

  lineHeights: {
    lg: '1.2',
    xl: '1.45',
  },

  spacing: (value: number) => `${4 * value}px`,

  shadows: {
    regular: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    large: '-3px 8px 24px rgba(0, 0, 0, 0.23)',
  },

  animation: {
    cubicBezier: '0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)',
  },
});
