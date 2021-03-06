import React from "react";

import { Header } from "./Header";

export default {
  title: "Example/Header",
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const MainHeader = Template.bind({});
MainHeader.args = {
  logoInfo: [
    {
      type: "Text",
      title: "articles",
      altText: "Pyschy, the best solution",
      link: "#home",
    },
  ],
  headerLinks: [
		{
			headerTitle: 'Default',
			type: 'Default',
			link: '#default',
		},
		{
			headerTitle: 'Highlight',
			type: 'Highlight',
			link: '#Highlight',
		},
		{
			headerTitle: 'Button',
			type: 'Button',
			link: '#button',
		},
	],
};
