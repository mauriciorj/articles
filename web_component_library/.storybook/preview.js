import React from 'react';
//import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/styles/defaultTheme';
//import GlobalStyle from '../src/styles/globalStyles';

import 'antd/dist/antd.css';
import '../src/components/assets/google-font/fonts.css';

//addDecorator(s => <ThemeProvider theme={theme}>{s()}</ThemeProvider>);

export const decorators = [
	(Story) => (
		<ThemeProvider theme={theme}>
			<Story />
		</ThemeProvider>
	),
];

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	options: {
		storySort: (a, b) =>
			a[1].kind === b[1].kind
				? 0
				: a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
	},
};
