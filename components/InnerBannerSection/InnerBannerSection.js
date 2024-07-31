import React from 'react';

const InnerBannerSection = ({ innerBannerSection }) => {

  if (!innerBannerSection || Object.keys(innerBannerSection).length === 0) {
    return null;
  }

  const {
    innerBackgroundImage,
    innerFrontImage,
    innerFrontImageTwo,
    innerHeading,
    innerContent,
    innerHeadingTag, // Default to h1 if not specified
    innerLink,
  } = innerBannerSection;

  const HeadingTag = Array.isArray(innerHeadingTag) && innerHeadingTag.length > 0
    ? innerHeadingTag[0]
    : 'h1';

  return (
    <article
      className="bg-[#07142a] h-660 pt-24 pb-24 desktop_large:pt-16 desktop_large:pb-16 tablet:pt-16 tablet:pb-16 mobile:py-10 desktop_large:h-auto"
      style={{
        backgroundImage: `url(${innerBackgroundImage?.node?.mediaItemUrl})`
      }}
    >
      <div className="container w-[87%] desktop:w-[100%] flex flex-wrap items-center h-full overflow-hidden px-3">
        <div className="w-[50%] mobile:w-[100%] pl-14 desktop_large:pl-4 mobile:px-2 mobile:text-center mobile:pt-0 tablet:pb-14 mobile-small:pb-6">
          {innerHeading && React.createElement(
            HeadingTag,
            { className: "mb-6 text-white tablet:mb-3 text-xl01_fs font-bold desktop_min:text-x39_fs mobile:text-36_fs font-SegoeUI" },
            innerHeading
          )}
          {innerContent && (
            <div
              className="text-secbodyfontcolor text-sm_fs leading-27 font-SegoeUI mobile:leading-27"
              dangerouslySetInnerHTML={{ __html: innerContent }}
            ></div>
          )}
          {innerLink && innerLink.url && (
            <a
              href={innerLink.url}
              className="mt-10 inline-block tablet:mt-6 bg-secondarycolor font-SegoeUI text-white px-10 mobile:px-6 py-3 hover:bg-transparent hover:text-secondarycolor border border-secondarycolor"
              target={innerLink.target}
            >
              {innerLink.title}
            </a>
          )}
        </div>
        <div className="w-[50%] h-full mobile:w-[90%] mobile-small:w-[100%] tablet:mx-auto pr-14 desktop:pl-4 desktop_large:pr-4 pl-12 mobile:pl-0 mobile:pr-0 relative flex items-center ">
          {innerFrontImage && (
            <div className="h-full ml-auto w-img_wid desktop-smalll:w-full flex flex-wrap items-center">
              <img
                src={innerFrontImage.node.mediaItemUrl}
                alt={innerFrontImage.node.altText}
                className="relative"
              />
            </div>
          )}
          {innerFrontImageTwo && (
            <div className="h-full ml-auto w-img_wid desktop-smalll:w-full flex flex-wrap items-center">
              <img
                src={innerFrontImageTwo.node.mediaItemUrl}
                alt={innerFrontImageTwo.node.altText}
                className="relative desktop:max-w-[262px] mobile-small:hidden"
              />
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default InnerBannerSection;
