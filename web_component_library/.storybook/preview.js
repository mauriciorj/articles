import { themes } from '@storybook/theming'

import 'antd/dist/antd.css';
import '../src/components/assets/google-font/fonts.css';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	docs: {
		theme: themes.DefaultTheme,
	  },
	options: {
		storySort: (a, b) => 
		a[1].kind === b[1].kind
		? 0
		: a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
	},
};
