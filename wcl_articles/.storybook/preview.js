import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/styles/theme';

import '../src/components/assets/google-font/fonts.css';
import StoryRouter from 'storybook-react-router';

export const decorators = [
	(Story) => (
		<ThemeProvider theme={theme}>
			<Story />
		</ThemeProvider>
	),
	StoryRouter()
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
