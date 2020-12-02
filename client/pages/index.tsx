import React from "react";
import { Header } from 'wcl_articles';

const logoInfo = [
		{
			type: 'Text',
			title: 'Articles',
            altText: 'Pyschy, the best solution',
            link: '#home'
		},
	];

const headerLinks = [
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
	];

const HomePage = () => {
  return <Header headerLinks={headerLinks} logoInfo={logoInfo}/>;
};

export default HomePage;
