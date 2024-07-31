import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const BannerSection = ({ bannerSection }) => {
  if (!bannerSection) {
    return null;
  }

  const {
    bannerHeading,
    bannerHeadingTag,
    leftBannerContent,
    rightBannerContent,
    bannerImage,
    bannerLink,
  } = bannerSection;

  // Mapping heading tags to JSX components
  const headingTagComponents = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
  };

  // Dynamically determine the heading tag
  const HeadingTag =
    headingTagComponents[bannerHeadingTag] || headingTagComponents['h1'];

  return (
    <article
      className="pt-28 pb-28 bg-no-repeat bg-bottom bg-cover desktop:bg-contain desktop:bg-bottom desktop_min:py-16 tablet:py-16 mobile:px-3 mobile:pt-10 mobile:pb-10"
      style={{ 
        backgroundImage: bannerImage?.node?.mediaItemUrl ? `url(${bannerImage.node.mediaItemUrl})` : 'none'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-[73%] desktop_min:max-w-[84%] mobile:max-w-[100%] mx-auto desktop-smalll:max-w-[98%] tablet:max-w-[98%]">
          {bannerHeading && (
            <HeadingTag className="text-center mx-auto mb-12 desktop_min:mb-10 mobile:mb-4 font-bold text-primarybgcolor text-6xl desktop_min:text-[57px] tablet:text-[57px] desktop_min:leading-[67px] tablet:leading-[67px] mobile:text-[40px] mobile:leading-[50px]  mobile-small:text-[30px] mobile-small:leading-[37px] mobile-small:mb-4 mobile:text-3xl font-SegoeUI">
              {bannerHeading}
            </HeadingTag>
          )}
          <div className="flex flex-wrap justify-between gap-10 mobile:gap-5 mobile-small:gap-3 mobile:text-center">
            {leftBannerContent && (
              <div
                className="max-w-[50%] mobile:max-w-[100%] font-SegoeUI font-semibold text-2xl tablet:leading-[34px] mobile:leading-[34px] text-extra_color mobile-small:text-xl mobile-small:leading-[32px]"
              >
                {ReactHtmlParser(leftBannerContent)}
              </div>
            )}
            {rightBannerContent && (
              <div
                className="max-w-[40%] mobile:max-w-[100%] text-base_fs text-bodyfontcolor font-SegoeUI leading-1 mobile:text-sm_fs mobile:leading-24"
              >
                {ReactHtmlParser(rightBannerContent)}
              </div>
            )}
          </div>
          <div className="mx-auto mt-14 tablet-large:mt-12 text-center flex items-center justify-center gap-2 mobile:mt-5 mobile:flex-wrap">
            {bannerLink?.map((link, index) => (
              link?.links?.url && (
                <a
                  key={index}
                  href={link.links.url}
                  className={`${
                    index % 2 === 0
                      ? 'bg-secondarycolor font-SegoeUI text-white px-10 mobile:px-6 py-3 hover:bg-transparent hover:text-secondarycolor border border-secondarycolor'
                      : 'button_pri bg-primarybgcolor text-white px-10 mobile:px-6 py-3 hover:bg-transparent hover:text-primarybgcolor border border-primarybgcolor'
                  } `}
                  target={link.links.target}
                >
                  {link.links.title}
                </a>
              )
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default BannerSection;
