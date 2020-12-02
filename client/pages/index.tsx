import React from "react";
import { Header, Button } from 'wcl_articles';

const headerAgs = {
	logoInfo: [
		{
			type: 'Text',
			title: 'Articles',
            altText: 'Pyschy, the best solution',
            link: '#home'
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
	]
}

const HomePage = () => {
  return <div><Header {...headerAgs}/><Button label="Test Burron" /></div>;
};

export default HomePage;
