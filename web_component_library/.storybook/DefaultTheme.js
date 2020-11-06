// YourTheme.js

import { create } from '@storybook/theming/create';

import '../src/components/assets/google-font/fonts.css';

export default create({
  base: 'light',

  // Typography
  fontBase: '"Manrope", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Colors
  blue: '#2f54eb',
  blueLight: '#adc6ff',
  blueSuperlight: '#d6e4ff',
  black: '#000000',
  gray: '#595959',
  graySuperlight: '#f5f5f5',
  white: '#FFFFFF',
  
});