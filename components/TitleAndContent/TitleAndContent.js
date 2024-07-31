import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const TitleAndContent = ({ titleAndContent }) => {
  if (!titleAndContent) {
    return null;
  }

  const {
    description,
    heading,
    subHeading,
    leftSideContent,
    rightSideContent,
    link,
  } = titleAndContent;

  return (
    <article className="py-10 tablet:py-9 mobile:pt-8 mobile:pb-10 ser-title-con">
      <div className="container">
        <div className="max-w-[1150px] mx-auto">
          {heading && (
            <h2 className="text-center mb-4 font-SegoeUI mobile:mb-2 text-xl01_fs font-bold text-primarybgcolor desktop_min:text-x39_fs mobile:text-36_fs">{ReactHtmlParser(heading)}</h2>
          )}
          {subHeading && (
            <div className="text-[23px] mobile:text-[20px]  text-center mb-3 mobile:mb-2 text-bodyfontcolor font-SegoeUI font-normal">
              {ReactHtmlParser(subHeading)}
            </div>
          )}
          {description && (
            <p className="text-base_fs mobile:text-[16px] text-center font-SegoeUI text-bodyfontcolor font-bold">
              {ReactHtmlParser(description)}
            </p>
          )}
        </div>
        <div className="flex flex-wrap items-start pt-16 mobile:pt-4">
          {/* Left side content */}
          {leftSideContent && (
            <div className="w-[50%] mobile:w-full px-4 text-right mobile:text-center border-r border-[#ddd] mobile:border-r-transparent mobile:mx-auto mobile:max-w-full mobile:mb-7">
              <div className="max-w-[500px] ml-auto mr-0 mobile:mx-auto mobile:max-w-full">
                {leftSideContent.title && (
                  <h3 className="mb-7 mobile:mb-1">{leftSideContent.title}</h3>
                )}
                {leftSideContent.subTitle && (
                  <div className="text-[23px] mobile:text-[19px] font-semibold mb-6 mobile:mb-4">
                    {leftSideContent.subTitle}
                  </div>
                )}
                {leftSideContent.content && (
                  <p className="text-[20px] mobile:text-[16px]">
                    {ReactHtmlParser(leftSideContent.content)}
                  </p>
                )}
              </div>
            </div>
          )}
          {/* Left side content done */}
          {/* Right side content */}
          {rightSideContent && (
            <div className="w-[50%] mobile:w-full px-4 text-left mobile:text-center mobile:mx-auto mobile:max-w-full">
              <div className="max-w-[500px] mr-auto ml-0 mobile:mx-auto mobile:max-w-full">
                {rightSideContent.title && (
                  <h3 className="mb-7 mobile:mb-1">{rightSideContent.title}</h3>
                )}
                {rightSideContent.subTitle && (
                  <div className="text-[23px] mobile:text-[19px] font-semibold mb-6 mobile:mb-4">
                    {rightSideContent.subTitle}
                  </div>
                )}
                {rightSideContent.content && (
                  <p className="text-[20px] mobile:text-[16px]">
                    {ReactHtmlParser(rightSideContent.content)}
                  </p>
                )}
              </div>
            </div>
          )}
          {/* Right side content done */}
        </div>
        {/* Link section */}
        {link && (
          <div className="text-center ">
            <a
              href={link.url}
              className="button_sec mt-10 tablet:mt-6"
              target={link.target}
            >
              {link.title}
            </a>{" "}
          </div>
        )}
        {/* Link section done */}
      </div>
    </article>
  );
};

export default TitleAndContent;
