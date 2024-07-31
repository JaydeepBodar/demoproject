import React, { useEffect } from 'react';
import $ from 'jquery';
import ReactHtmlParser from 'react-html-parser';

const FAQSection = ({ sectionData }) => {
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

  const baseUrl = process.env.NEXT_PUBLIC_WORDPRESS_URL;
  const backgroundImageUrl = `${baseUrl}/wp-content/themes/wppro/assets/images/bg-img-3.svg`;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      $(document).ready(function() {
        $('.faq-heading').click(function() {
          $(this).next('.faq-content').slideToggle();
          $(this).toggleClass('faq-heading-active');
          $(this).find('.vertical-line').toggle();
        });
      });
    }

    // Cleanup to avoid potential issues with event listeners being added multiple times
    return () => {
      $('.faq-heading').off('click');
    };
  }, []);

  return (
    <article
      className="faq-sec py-16 desktop_min:pt-12 desktop_min:pb-10 tablet:py-12 mobile:py-8 mobile:pt-10 px-7 tablet:px-3 mobile:px-3 mobile:pb-12 relative before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-full before:bg-custom-gradient before:opacity-90 bg-cover"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
      }}
    >
      <div className="container relative z-z1 px-3">
        <HeadingTag className="text-center mb-11 desktop_min:mb-8 font-SegoeUI mobile:mb-4 text-xl01_fs font-bold text-primarybgcolor desktop_min:text-x39_fs mobile:text-36_fs">
          {faqHeading}
        </HeadingTag>
       
        {description && (
          <p className="font-SegoeUI font-normal text-base_fs text-bodyfontcolor text-center max-w-[930px] m-auto mb-4 mobile:text-sm_fs">
            {description}
          </p>
        )}
        {subHeading && (
          <div>
            <p className="mb-8 font-SegoeUI font-bold text-base_fs text-bodyfontcolor text-center">
              {subHeading}
            </p>
          </div>
        )}
        <div className="faq-acc max-w-[87%] desktop-smalll:max-w-[100%] mx-auto">
          {frequentlyAskedQuestions.map((faq, index) => (
            <div
              key={index}
              className="faq-item border border-bdr_color bg-md_gray mb-7 mobile:mb-5 last:mb-0"
            >
              <div
                className="faq-heading py-6 px-7 mobile:px-4 mobile:py-4 cursor-pointer flex justify-between"
              >
                <h5 className="mb-0 relative pr-8 text-primarybgcolor font-bold font-SegoeUI text-xl_fs w-4/5 mobile:text-19_fs">
                  {faq.question}
                </h5>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`plus w-5 fill-secondarycolor`}
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
              <div className="faq-content px-7 py-8 tablet:px-7 mobile:py-4 mobile:px-4 hidden border-t border-bdr_color">
                <p className='font-SegoeUI text-bodyfontcolor mobile:text-sm_fs mobile:leading-27 text-base_fs leading-27'>
                  {ReactHtmlParser(faq.answer)}
                </p>
              </div>
            </div>
          ))}
        </div>
        {faqLink && (
          <div className="text-center mt-10 mobile:mt-5">
            <a href={faqLink.url} target={faqLink.target}>
              {faqLink.title}
            </a>
          </div>
        )}
      </div>
    </article>
  );
};

export default FAQSection;
