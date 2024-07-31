import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const RetainerExplainedSection = ({ retainerExplainedSection }) => {
  if (!retainerExplainedSection) {
    return null;
  }

  const {
    title,
    description,
    contentBox,
  } = retainerExplainedSection;

  const headingTagComponents = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
  };

  const HeadingTag = headingTagComponents[title.titleTag] || headingTagComponents['h1'];

  return (
    <article
      className="pt-14 pb-4 desktop_min:py-10 tablet:pt-8 tablet:pt-8 tablet:pb-4 mobile:py-8 mobile:pb-10 ser-retain-det"
      style={{
        backgroundImage:
          "linear-gradient(#f7f7f7 .76%,rgba(248,248,248,.74) 26.46%,rgba(251,251,251,.6) 55.6%,rgba(255,255,255,.53125) 83.01%,rgba(255,255,255,0) 83.01%)"
      }}
    >
      <div className="container">
        {title && (
          <HeadingTag className="text-center mb-4 mobile:mb-4 text-xl01_fs font-normal text-primarybgcolor desktop_min:text-x39_fs mobile:text-36_fs">
            {title.beforeHighlightedWord} <i className="font-bold">{title.highlightedWord}</i>{" "}
            {title.afterHighlightedWord}
          </HeadingTag>
        )}
        {description && (
          <p className="text-[20px] mobile:text-[16px] text-center max-w-[1150px] mx-auto text-bodyfontcolor font-SegoeUI">
            {ReactHtmlParser(description)}
          </p>
        )}
        {contentBox && contentBox.length > 0 && (
          <div className="flex flex-wrap max-w-[1150px] mx-auto mt-20 mobile:mt-16">
            {contentBox.map((box, index) => (
              <div key={index} className="w-[50%] mobile:w-[100%] px-7 tablet:px-4 mobile:px-0 relative mb-16 tablet:mb-16 last:mb-0">
                <div className="min-h-[266px] mobile:min-h-minauto pt-8 tablet:pt-12  mobile:pt-8 px-12 tablet:px-5 mobile:px-5 pb-8 mobile:pb-5 border border-[#dddddd] hover:shadow-card-shadow">
                  <div className="flex flex-wrap items-center justify-center absolute -top-[40px] left-2/4 -translate-x-[50%]  border border-[#dddddd] bg-white rounded-[3px] py-5 mobile:py-4  px-2 max-w-[80%] mx-auto w-full after:absolute after:content[''] after:bottom-0 after:left-0 after:block after:h-[5px] after:bg-secondarycolor after:w-full after:rounded-sm after:rounded-t-none mobile-small:max-w-[90%]">
                    <span className="inline-block w-[30px] tablet:w-[30px] mobile:w-[25px] h-[30px] tablet:h-[30px] mobile:h-[25px] mx-4 tablet:mx-2">
                      <img
                        src={box.icon.node.mediaItemUrl}
                        alt={box.icon.node.altText}
                        className="w-full h-full object-contain"
                      />
                    </span>
                    {box.title && (
                      <h4 className="text-[24px] tablet:text-[19px] mobile:text-[19px] leading-[29px] mobile:leading-[26px] text-[#14141e] font-bold mb-0 text-center font-SegoeUI mobile:text-sm_fs">
                        {ReactHtmlParser(box.title)}
                      </h4>
                    )}
                  </div>
                  <div>
                    {box.subTitle && (
                      <p className="text-sm_fs leading-[28px] my-4 mobile:my-2 last:mb-0 tablet:mt-0 mobile:mt-0">
                        <b className="text-black">{ReactHtmlParser(box.subTitle)}</b>
                      </p>
                    )}
                    {box.content && (
                      <p className="text-sm_fs leading-[28px] my-4 last:mb-0 text-bodyfontcolor font-SegoeUI tablet:mt-0 mobile:mt-0 mobile:leading-[21px] tablet:text-center">
                        {ReactHtmlParser(box.content)}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export default RetainerExplainedSection;
