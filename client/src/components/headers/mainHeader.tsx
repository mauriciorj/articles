import React, { useState, useEffect } from "react";
import { Client } from "../../prismic/config";
import { Header } from "wcl_articles/src/components/Header/Header";

interface PrismicProps {
  prismicRes: any;
}

export const MainHeader = () => {
  const [prismicInfo, setPrismicInfo] = useState<PrismicProps | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Client.getSingle("mainheader", {});
        if (response) {
          const prismicRes = response;
          setPrismicInfo({ prismicRes });
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();

  }, []);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const responsee = await Client.getByID("X82WxRIAACkAtEDy", {});
        if (responsee) {
          console.log(responsee)
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Header
      logoInfo={[
        {
          type: "Text",
          title: prismicInfo?.prismicRes?.data?.title[0]?.text,
          altText: prismicInfo?.prismicRes?.data?.alt_text[0]?.text,
          link: "/-",
        },
      ]}
      headerLinks={[
        {
          headerTitle: "Default",
          type: "Default",
          link: "#default",
        },
        {
          headerTitle: "Highlight",
          type: "Highlight",
          link: "#Highlight",
        },
        {
          headerTitle: "Button",
          type: "Button",
          link: "#button",
        },
      ]}
    />
  );
};
