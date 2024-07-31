import React, { useEffect } from 'react';

const ClutchReviewSection = ({ sectionData }) => {
  useEffect(() => {
    if (sectionData?.reviewScript === 'Clutch Review') {
      const script = document.createElement('script');
      script.src = 'https://widget.clutch.co/static/js/widget.js';
      script.async = true;
      script.onload = () => {
        console.log('Clutch review script loaded');
      };
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [sectionData?.reviewScript]);

  if (!sectionData) {
    return null;
  }

  const {
    backgroundColor,
    heading,
    headingTag,
    subHeading,
    content,
    reviewScript,
    enterFormShortcode,
    button
  } = sectionData;

  const linkUrl = button?.url || '';
  const linkTitle = button?.title || '';
  const linkTarget = button?.target || '_self';

  // Mapping for heading tag components
  const headingTagComponents = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
  };

  // Determine the appropriate heading tag
  const HeadingTag = headingTagComponents[headingTag] || 'h2';

  return (
    <article className={`p-60p pb-12 tablet:py-16 mobile:pt-12 mobile:pb-10 tablet:pb-16 px-7 mobile:px-7 mobile:mb-0`} style={{ backgroundColor }}>
      <div className="max-w-[1500px] desktop_large:max-w-[100%] mx-auto flex flex-wrap justify-between">
        <div className="w-[75%] desktop:w-[70%] tablet:w-[100%] pr-24 desktop-smalll:pr-4 review-desc relative -top-[10px] tablet:pr-0">
          <div>
            <HeadingTag className="mb-4 tablet:mb-2 desktop_min:leading-[45px] mobile:mb-3 mobile:leading-[40px] text-xl01_fs font-bold text-primarybgcolor desktop_min:text-x39_fs mobile:text-36_fs">{heading}</HeadingTag>
            {subHeading && (
              <h5 className="mb-4 font-semibold text-xl_fs font-SegoeUI text-secondarycolor tablet:mb-2 mobile:mb-2 mobile:text-19_fs">{subHeading}</h5>
            )}
            {content && (
              <div className="font-SegoeUI text-bodyfontcolor text-base_fs leading-27 mobile:text-sm_fs" dangerouslySetInnerHTML={{ __html: content }} />
            )}
            {button && (
              <a href={linkUrl} className="tablet:mt-4 button_sec bg-secondarycolor text-white px-9 py-3.5 hover:bg-transparent hover:text-secondarycolor border border-secondarycolor font-SegoeUI inline-block mobile:px-5 mobile:py-3" target={linkTarget}>{linkTitle}</a>
            )}
          </div>
        </div>
        <div className="w-[25%] desktop:w-[30%] tablet:w-[100%] tablet:pt-14 mobile:pt-11">
          {reviewScript === 'Clutch Review' && (
            <div className="flex items-center justify-center clu-slider px-7">
              <div className="relative mx-auto" data-url="https://widget.clutch.co" data-widget-type="3" data-height="320" data-nofollow="true" data-expandifr="true" data-scale="100" data-reviews="2152906,2108588,2062828,2062273,2060495" data-clutchcompany-id="1989175">
              </div>
            </div>
          )}
          {reviewScript === 'Google Review' && (
            <div className="flex items-center justify-center clu-slider px-7">
              {/* Replace this comment with the Google review script */}
            </div>
          )}
          {reviewScript === 'Form' && enterFormShortcode && (
            <div className="flex items-center justify-center clu-slider px-7">
              <div dangerouslySetInnerHTML={{ __html: enterFormShortcode }} />
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default ClutchReviewSection;
