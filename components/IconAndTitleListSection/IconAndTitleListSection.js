import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const IconAndTitleListSection = ({ iconsAndTitleListSection }) => {
  if (!iconsAndTitleListSection) {
    return null;
  }

  const {
    heading,
    headingTag,
    subHeading,
    designStyle,
    link,
    iconsAndTitleList,
  } = iconsAndTitleListSection;

  const headingTagComponents = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
  };

  const HeadingTag = headingTagComponents[headingTag] || 'h2';

  return (
    <article className="pt-12 pb-12 desktop_large:pb-10 tablet:pt-10 tablet:pb-8 mobile:pt-8 mobile:pb-8 desktop_large:px-7 px-7">
      {heading && (
        <HeadingTag className="mb-4 max-w-[980px] mx-auto text-center text-xl01_fs font-SegoeUI font-bold desktop_min:text-x39_fs mobile:text-36_fs text-primarybgcolor">
          {heading}
        </HeadingTag>
      )}
      {designStyle === 'Design Two' && subHeading && (
        <h5 className="text-bodyfontcolor font-normal mb-4 mobile:mb-2 text-[18px] leading-[24px] mobile:text-[16px] mobile:leading-[22px] mobile:text-center max-w-800px m-auto text-center">
          {subHeading}
        </h5>
      )}
      <div className="max-w-[1150px] mx-auto flex flex-wrap items-start justify-center mt-9 tablet:mt-4 mobile:mt-4">
        {designStyle === 'Design One' && subHeading && (
          <div className="w-[48%] tablet:w-[100%] tablet:text-center mobile:text-center">
            <h5 className="text-bodyfontcolor font-normal mb-4 mobile:mb-2 mobile:text-[17px] tablet:text-center mobile:text-center">
              {subHeading}
            </h5>
            {link?.title && link?.url && (
              <a
                href={link.url}
                className="mt-4 min-w-[110px] font-semibold px-4 py-3 border border-secondarycolor text-sm_fs leading-[20px] inline-block text-secondarycolor bg-transparent hover:bg-secondarycolor hover:text-white"
                target={link.target}
                rel="noopener noreferrer"
              >
                {link.title}
              </a>
            )}
          </div>
        )}
        {iconsAndTitleList && (
          <div className="tablet:pt-6 w-full max-w-[1000px] mobile:pt-2">
            <div className="mr-0 ml-auto tablet:mx-auto mobile:mx-auto relative mobile:top-0 grid grid-cols-2 gap-6 mobile:grid-cols-1 mobile:gap-4">
              {iconsAndTitleList.map((item, index) => (
                <div key={index} className="tablet:pt-0 mobile:pt-0">
                  <div className="max-w-[1000px] mr-0 ml-auto tablet:mx-auto mobile:mx-auto relative mobile:top-0 flex flex-wrap">
                    <div className="flex items-center p-7 desktop_large:p-5 mobile:px-5 mobile:py-3 mb-0 border-[3px] mobile:items-center border-[#f7f7f7] relative w-full before:absolute before:content-[''] before:border-t-2 before:border-b-2 before:border-primarybgcolor before:scale-x-0 before:top-0 before:bottom-0 before:left-0 before:right-0 before:opacity-0 before:transition before:duration-350 hover:before:opacity-100 hover:before:scale-1001 after:absolute after:content-[''] after:border-l-2 after:border-r-2 after:border-primarybgcolor after:scale-y-0 after:top-0 after:bottom-0 after:left-0 after:right-0 after:opacity-0 after:transition after:duration-350 hover:after:opacity-100 hover:after:scale-1001">
                      <div className="min-w-[35px] max-w-[35px] mobile:min-w-[25px] mobile:max-w-[25px] mobile:mt-[6px]">
                        <img
                          data-lazyloaded={1}
                          src={item.image.node.mediaItemUrl}
                          decoding="async"
                          alt={item.image.node.altText}
                          className="object-contain w-full h-full entered litespeed-loaded"
                        />
                        <noscript>
                          &lt;img decoding="async" src={item.image.node.mediaItemUrl} alt={item.image.node.altText} class="object-contain w-full h-full"&gt;
                        </noscript>
                      </div>
                      <div className="">
                        <div className="pl-5 mb-1 font-bold text-xl_fs mobile:text-lg text-primarybgcolor mobile:pl-3">
                          {item.title}
                        </div>
                        <div className="pl-5 mobile:pl-3 text-bodyfontcolor mobile:text-sm_fs text-base_fs">
                          {ReactHtmlParser(item.content)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

export default IconAndTitleListSection;
