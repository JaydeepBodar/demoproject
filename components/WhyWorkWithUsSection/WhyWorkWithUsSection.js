import React from "react";

const WhyWorkWithUsSection = ({ whyWorkWithUs }) => {

  if (!whyWorkWithUs) {
    return <p>No data found for Why Work With Us section.</p>;
  }

  const { title, description, flexibleLayouts } = whyWorkWithUs;

  console.log('FlexibleLayouts:', flexibleLayouts);

  if (!flexibleLayouts || flexibleLayouts.length === 0) {
    return <p>No data found for flexibleLayouts.</p>;
  }

  return (
    <article className="pt-14 mobile:pt-10">
     {title && (
     <h2 className="text-center mobile:mb-[5px] px-5 text-xl01_fs font-bold text-primarybgcolor desktop_min:text-x39_fs mobile:text-36_fs mb-2">{title}</h2>)}
     {description && (
        <div className="px-5">
          <p
            className="text-center text-20_fs text-bodyfontcolor font-SegoeUI mobile:text-sm_fs mobile:leading-27"
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
        </div>
      )}

      {flexibleLayouts.map((layout, index) => {
        switch (layout.__typename) {
          case "WhyWorkWithUsFlexibleLayoutsTeamSectionLayout":
            return (
              <div key={index}>
                <div className="px-3 flex flex-wrap items-start max-w-[1150px] mx-auto mt-[30px] mobile:mt-[20px]">
              <div className="w-[33%] tablet:w-full px-4 tablet:mb-7 heiglighted">
                <div className="bg-secondarycolor mobile:text-center p-7 mobile:p-6">
                {layout.title &&(
                  <h4 className="text-white text-xl05 mb-4 font-bold font-SegoeUI mobile:mb-2">{layout.title}</h4>
                )}
                {layout.description &&(
                  <div className="text-white text-xl_fs leading-40 italic font-Georgia mobile:text-sm_fs mobile:leading-30"
                     dangerouslySetInnerHTML={{ __html: layout.description }} />
                )}
                </div>
              </div>
              <div
                className="w-[66%] tablet:w-full mobile:w-full columns-2 mobile:columns-1 px-4 gap-x-20 mobile:gap-x-0"
                style={{
                  MozColumnRule: "1px dashed #d3d3d3",
                  columnRule: "1px dashed #d3d3d3"
                }}
              >
                <div className="text-sm_fs leading-[29px] text-justify mobile:text-center my-4 mt-4 font-SegoeUI">
                {layout.image?.node && (
                  
                  <img
                    src={layout.image.node.mediaItemUrl}
                    width={810}
                    height={340}
                    alt={layout.image.node.altText}
                    className="entered litespeed-loaded"
                  />
                )}
                </div>
                {layout.content && (
                  <div className="text-sm_fs text-bodyfontcolor mt-5 text-justify font-SegoeUI mobile:text-center" dangerouslySetInnerHTML={{ __html: layout.content }} />
                )}
              </div>
            </div>
              </div>
            );
          case "WhyWorkWithUsFlexibleLayoutsLeftContentRightImageLayout":
            return (
              <div key={index}>
                <h3>{layout.title}</h3>
                <div dangerouslySetInnerHTML={{ __html: layout.highlightedDescription }} />
                {layout.rightSideImage?.node && (
                  <img src={layout.rightSideImage.node.mediaItemUrl} alt={layout.rightSideImage.node.altText} />
                )}
                {layout.beforeImageContent && (
                  <div dangerouslySetInnerHTML={{ __html: layout.beforeImageContent }} />
                )}
                {layout.afterImageContent && (
                  <div dangerouslySetInnerHTML={{ __html: layout.afterImageContent }} />
                )}
                {layout.buttonGroup && (
                  <div className="button-group">
                    {layout.buttonGroup.firstButton && (
                      <a href={layout.buttonGroup.firstButton.url} target={layout.buttonGroup.firstButton.target}>
                        {layout.buttonGroup.firstButton.title}
                      </a>
                    )}
                    {layout.buttonGroup.secondButton && (
                      <a href={layout.buttonGroup.secondButton.url} target={layout.buttonGroup.secondButton.target}>
                        {layout.buttonGroup.secondButton.title}
                      </a>
                    )}
                  </div>
                )}
              </div>
            );
          case "WhyWorkWithUsFlexibleLayoutsWorkProcessSectionLayout":
            return (
              <div key={index}>
                <div className="py-14 pb-14 mt-20 bg-light_black desktop_min:pt-12 desktop_min:pb-12 tablet:pt-12 tablet:pb-12 mobile:py-8 mobile:pb-8 desktop_min:mt-20 tablet:mt-12 mobile:mt-8">
                  {layout.title && (
                  <h4 className="text-center text-white font-SegoeUI font-bold text-xl05 mb-2"> {layout.title}</h4>
                  
                  )}
                  {layout.subTitle && (
                      <p className="text-center text-white text-20_fs font-SegoeUI" dangerouslySetInnerHTML={{ __html: layout.subTitle }}>
                      </p>
                  )}
              <div className="flex flex-wrap max-w-[1150px] mobile:mt-[20px] mx-auto mt-[30px]">
                {layout.leftContentBox && (
                <div className="w-[50%] mobile:w-full px-4 mobile:mb-7 mobile:last:mb-0 mobile:text-center">
                  {layout.leftContentBox.title && (
                  <h3 className="text-[32px] mobile:text-[24px] mobile:leading-[30px] text-white font-SegoeUI font-bold">
                    {layout.leftContentBox.title}
                  </h3>
                  )}
                  {layout.leftContentBox.subTitle && (
                    <p className="text-[20px] mobile:text-[18px] leading-[27px] mobile:leading-[24px] text-secbodyfontcolor mt-[20px] desktop_large:mt-[15px] desktop_large:mb-[25px] mobile:mt-[10px] mb-[40px] mobile:mb-[10px] font-SegoeUI">
                      {layout.leftContentBox.subTitle}
                    </p>
                  )}

                  {layout.leftContentBox.content &&(
                     <div className="text-white font-SegoeUI text-sm_fs leading-27" dangerouslySetInnerHTML={{ __html: layout.leftContentBox.content }} />
                  )}
                </div>
                )}
                {layout.rightContentBox && (
                <div className="w-[50%] mobile:w-full px-4 mobile:mb-7 mobile:last:mb-0 mobile:text-center">
                  {layout.rightContentBox.title && (
                    <h3 className="text-[32px] mobile:text-[27px] text-white font-SegoeUI font-bold">
                      {layout.rightContentBox.title}
                    </h3>
                  )}
                  {layout.rightContentBox.subTitle && (
                    <p className="text-[20px] mobile:text-[18px] leading-[27px] mobile:leading-[24px] text-secbodyfontcolor mt-[20px] mobile:mt-[10px] mb-[40px] mobile:mb-[10px] font-SegoeUI">
                      {layout.rightContentBox.subTitle}                    
                    </p>
                   )}
                  {layout.rightContentBox.content && (
                    <div className="text-white font-SegoeUI text-sm_fs leading-27" dangerouslySetInnerHTML={{ __html: layout.rightContentBox.content }} />
                  )}
                </div>
                )}
              </div>
            </div>
              </div>

            );
          case "WhyWorkWithUsFlexibleLayoutsContentWithNewspaperLayoutLayout":
            return (
              <div key={index}>
                <div className="px-3 pt-20 desktop_min:pt-12 tablet:pt-16 mobile:pt-8 max-w-[1150px] mx-auto">
                  <div
                    className="columns-3 mobile:columns-1 px-4 gap-x-20 tablet:gap-x-10 mobile:gap-x-0 text-justify mobile:text-center border-b-2 border-black pb-[60px] desktop_large:pb-[48px] mobile:pb-[15px] last:border-0"
                      style={{
                        MozColumnRule: "1px dashed #d3d3d3",
                        columnRule: "1px dashed #d3d3d3"
                      }}
                    >
                    {layout.title && (
                      <h2 className="text-[48px] desktop_large:text-[36px] tablet:text-[30px] mobile:text-center mobile:text-[25px] mobile:leading-[30px] text-black border-b-[2px] border-black text-left pb-3 mb-8 mobile:mb-4 font-SegoeUI font-bold leading-48">
                        {layout.title}
                      </h2>
                    )}
                    {layout.highlightedDescription && (
                      <div>
                        <div className="text-bodyfontcolor italic mb-4 text-xl_fs text-left font-Georgia mobile:text-sm_fs mobile:leading-27 mobile:text-center" dangerouslySetInnerHTML={{ __html: layout.highlightedDescription }} />
                      </div>
                    )}
                    {layout.content && (
                      <div className="mobile:mt-4">
                        <div className="font-SegoeUI text-bodyfontcolor leading-27 mt-2" dangerouslySetInnerHTML={{ __html: layout.content }} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
          );
          case "WhyWorkWithUsFlexibleLayoutsContentWithNewsletterBoxLayout":
            return (
              <div key={index}>
              <div className="px-3  border-t border-b border-[#c9c9c9] py-20 desktop_large:py-12 mobile:py-12">
              <div className="flex flex-wrap items-start max-w-[1150px] mx-auto">
                <div className="w-[50%] mobile:w-full px-4">
                  <div>
                      {layout.image?.node && (
                      
                      <img
                        src={layout.image.node.mediaItemUrl}
                        alt={layout.image.node.altText}
                        className="entered litespeed-loaded"
                      />
                    )}
                  </div>
                  <div className="p-5 bg-white relative -mt-[100px] mobile:text-center tablet:-mt-[80px] mobile:-mt-[40px] mx-7 mobile:mx-4">
                  {layout.title && (
                    <h3 className="text-[32px] mobile:text-[24px] mobile:leading-[30px] font-SegoeUI font-bold text-primarybgcolor leading-40 mb-4">
                      {layout.title}
                    </h3>
                  )}
                  {layout.subTitle && (
                    <div dangerouslySetInnerHTML={{ __html: layout.subTitle}} />
                  )}
                  {layout.leftSideContent && (
                  <div>
                    <div className='font-SegoeUI text-bodyfontcolor text-sm_fs leading-30 mobile:text-sm_fs'
                      dangerouslySetInnerHTML={{ __html: layout.leftSideContent }} />
                  </div>
                  )}
                  </div>
                </div>
                <div className="w-[50%] mobile:w-full px-4 mobile:text-center right_side_content">
                  {layout.rightSideTitle && (
                    <h6 className='font-SegoeUI font-bold text-primarybgcolor text-sm_fs mb-4'>
                    {layout.rightSideTitle}</h6>
                  )}
                  {layout.rightSideContent && (
                    <div className='font-SegoeUI text-bodyfontcolor text-sm_fs leading-30 mobile:text-sm_fs' dangerouslySetInnerHTML={{ __html: layout.rightSideContent }} />
                  )}
                  {layout.newsletter && (
                    <div className="p-10 pb-12 mt-10 bg-primarybgcolor mobile:mt-5 mobile:p-6">
                    {layout.newsletter.title && (
                      <h5 className="text-white font-SegoeUI font-bold text-xl_fs leading-30 mb-4 mobile:text-sm_fs mobile:mb-2">{layout.newsletter.title}</h5>
                    )} 
                    {layout.newsletter.description && (
                      <div className='font-SegoeUI text-sm_fs leading-27 mobile:text-sm_fs text-white mb-5 mobile:mb-2' dangerouslySetInnerHTML={{ __html: layout.newsletter.description }} />
                    )}
                    {layout.newsletter.button && (
                      <a className="inline-block w-full rounded text-center mt-[35px] mobile:mt-[20px] hover:bg-secondarycolor hover:text-white text-primarybgcolor font-bold py-4 bg-white mobile:py-2 mobile:px-2 font-SegoeUI" href={layout.newsletter.button.url} target={layout.newsletter.button.target}>
                        {layout.newsletter.button.title}
                      </a>
                    )}
                    </div>
                  )}
                </div>
              </div>
            </div>
              </div>
            );
          default:
            return null;
        }
      })}
  </article>
  );
};

export default WhyWorkWithUsSection;
