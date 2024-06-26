export const CSS_COLOR_NAMES = {
    // Azure: '#F0FFFF',
    Black: '#171717',
    // DarkBlue: '#1b1b50',
    // DarkerBlue: '#0e2e46',
    DarkGrey: '#262626',
    GhostWhite: '#F8F8FF',
    // Indigo: '#4B0082',
    SeaShell: '#FFF5EE',
    // Snow: '#FFFAFA',
  };
  
  export function randomProperty(obj) {
    const keys = Object.keys(obj);
    return obj[keys[keys.length * Math.random() << 0]];
  }