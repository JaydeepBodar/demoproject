import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";

const GET_SECTION_DATA = gql`
  {
    pages(where: { id: 10 }) {
      nodes {
        id
        title
        editorBlocks {
          __typename
          ... on AcfFaqSection {
            fAQSection {
              faqHeading
              faqHeadingTag
              description
              subHeading
              faqLink {
                target
                title
                url
              }
              frequentlyAskedQuestions {
                question
                answer
              }
            }
          }
        }
      }
    }
  }
`;

const FAQSection = () => {
  const { loading, error, data } = useQuery(GET_SECTION_DATA);
  const [openIndex, setOpenIndex] = useState(null);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const sectionData = data?.pages?.nodes?.[0]?.editorBlocks?.find(
    (block) => block.__typename === "AcfFaqSection"
  )?.fAQSection;

  if (!sectionData) {
    return <p>No FAQ section data available</p>;
  }

  const {
    faqHeading,
    faqHeadingTag,
    description,
    subHeading,
    faqLink,
    frequentlyAskedQuestions,
  } = sectionData;

  const headingTagComponents = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
  };

  const HeadingTag = headingTagComponents[faqHeadingTag] || "h2";

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const baseUrl = process.env.NEXT_PUBLIC_WORDPRESS_URL;
  const backgroundImageUrl = `${baseUrl}/wp-content/themes/wppro/assets/images/bg-img-3.svg`;
  return (
    <article
      className="faq-sec py-16 desktop_min:pt-12 desktop_min:pb-10 tablet:py-12 mobile:py-8 mobile:pt-8 px-7 tablet:px-3 mobile:px-3 relative before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-full before:bg-custom-gradient before:opacity-90 bg-cover"
      style={{
        backgroundImage:
          `url(${backgroundImageUrl})`,
      }}
    >
      <div className="container relative z-z1 px-3">
        <HeadingTag className="text-center mb-11 desktop_min:mb-8 mobile:mb-4 text-xl01_fs font-bold text-primarybgcolor desktop_min:text-x39_fs mobile:text-36_fs">
          {faqHeading}
        </HeadingTag>
        {subHeading && (
          <div className="faq-sub-heading">
            <p className="mb-3">{subHeading}</p>
          </div>
        )}
        {description && <p>{description}</p>}
        <div className="faq-acc max-w-[87%] desktop-smalll:max-w-[100%] mx-auto">
          {frequentlyAskedQuestions.map((faq, index) => (
            <div
              key={index}
              className="faq-item border border-bdr_color bg-md_gray mb-7 mobile:mb-5"
            >
              <div
                className="faq-heading py-6 px-7 mobile:px-4 mobile:py-4 cursor-pointer flex justify-between"
                onClick={() => toggleFAQ(index)}
              >
                <h5 className="mb-0 relative pr-8 text-primarybgcolor font-bold font-SegoeUI text-xl_fs w-4/5 mobile:text-19_fs">
                  {faq.question}
                </h5>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`plus w-5 fill-secondarycolor ${openIndex === index ? "active" : ""}`}
                  viewBox="0 0 160 160"
                >
                  <rect
                    className="vertical-line"
                    x="70"
                    width="20"
                    height="160"
                    rx="10"
                    ry="10"
                  ></rect>
                  <rect
                    className="horizontal-line"
                    y="70"
                    width="160"
                    height="20"
                    rx="10"
                    ry="10"
                  ></rect>
                </svg>
              </div>
              <div
                className={`faq-content transition-max-height duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? "max-h-screen" : "max-h-0"
                } border-t border-bdr_color`}
              >
                <div className="py-10 tablet:px-10 tablet:py-4 mobile:py-4 px-14 mobile:px-4">
                  <p className="font-SegoeUI text-bodyfontcolor mobile:text-sm_fs mobile:leading-27 text-base_fs leading-27">
                    {faq.answer.replace(/<\/?p>/g, '')}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {faqLink && (
          <div className="text-center mt-10 mobile:mt-5">
            <a href={faqLink.url} className="button_sec" target={faqLink.target}>
              {faqLink.title}
            </a>
          </div>
        )}
      </div>
    </article>
  );
};

export default FAQSection;
