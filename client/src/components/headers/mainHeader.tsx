import React from "react";
import { Header } from "wcl_articles/src/components/Header/Header";

export const MainHeader = () => {
  return (
    <Header
      logoInfo={[
        {
          type: "Text",
          title: "articles",
          altText: "Pyschy, the best solution",
          link: "#home",
        },
      ]}
      headerLinks={[
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
      ]}
    />
  );
};
