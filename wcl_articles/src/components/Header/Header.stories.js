import React from "react";

import { Header } from "./Header";

export default {
  title: "Components/Header",
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const MainHeader = Template.bind({});
MainHeader.args = {
  logoInfo: [
    {
      altText: "Pyschy, the best solution",
	  link: "#home",
	  title: "articles",
	  type: "Text",
    },
  ],
  headerLinks: [
		{
			headerTitle: 'Default',
			link: '#default',
			type: 'Default',
		},
		{
			headerTitle: 'Highlight',
			link: '#Highlight',
			type: 'Highlight',
		},
		{
			headerTitle: 'Button',
			link: '#button',
			type: 'Button',
		},
	],
};
