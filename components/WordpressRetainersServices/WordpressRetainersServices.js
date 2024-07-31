import React from "react";

const WordpressRetainersServices = ({ servicesData }) => {
  if (!servicesData) {
    console.warn("No services data found");
    return null;
  }

  const { cpvHeading, cpvHeadingTag, designStyle, description, purposeAndValues } = servicesData;

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
  const HeadingTag = headingTagComponents[cpvHeadingTag] || headingTagComponents['h1'];

  const renderPurposeAndValues = () => {
    return purposeAndValues.map((item, index) => (
      <div key={index} className="w-boxes_view relative flex flex-wrap desktop_large:w-desk_boxes_view  tablet:w-tablet_box mobile:w-[100%] border-[3px] border-[#f7f7f7] mb-20  p-11 desktop_large:p-7 desktop-smalll:p-6 mr-0 tablet-large::mr-0 tablet:mr-0 mobile:mr-0 before:absolute before:content-[''] before:border-t-2 before:border-b-2 before:border-primarybgcolor before:scale-x-0 before:top-0 before:bottom-0 before:left-0 before:right-0 before:opacity-0 before:transition before:duration-350 hover:before:opacity-100 hover:before:scale-1001  after:absolute after:content-[''] after:border-l-2 after:border-r-2 after:border-primarybgcolor after:scale-y-0 after:top-0 after:bottom-0 after:left-0 after:right-0 after:opacity-0 after:transition after:duration-350 hover:after:opacity-100 hover:after:scale-1001">
        <div className="w-full p-8 desktop_large:p-5 mobile:text-center desktop-smalll:p-5 desktop-smalll:pb-8  mobile:p-5 bg-[#f5f7fa] -mb-[81px] service-content z-z1 relative after:[''] after:absolute after:left-0 after:w-0 after:bottom-0 after:transition-all after:duration-350 after:h-[0.18rem] after:bg-primarybgcolor hover:after:w-full after:overflow-hidden">
          <div className="flex items-center mobile-small:flex-wrap desktop-smalll:flex-col desktop-smalll:items-start">
            {item.pvLogo && item.pvLogo.node && (
              <div className="w-[70px] min-w-[70px]  h-[70px] p-2 bg-[#F1F1F1] rounded-full flex items-center justify-center mobile:mx-auto">
                <img src={item.pvLogo.node.mediaItemUrl} alt={item.pvLogo.node.altText} className="max-w-[36px] mx-auto entered litespeed-loaded" />
              </div>
            )}
            {item.pvTitle && (
              <h5 className="w-[86%] mobile:w-[100%] pl-3 mobile:pl-0 mobile:pt-2 mb-0 desktop-smalll:pl-0 text-xl_fs text-primarybgcolor font-SegoeUI font-bold mobile:text-base_fs">{item.pvTitle}</h5>
            )}
          </div>
          {item.pvContent && (
            <div className="mt-4 mobile:mt-1 text-sm_fs leading-6 text-bodyfontcolor font-SegoeUI font-normal" dangerouslySetInnerHTML={{ __html: item.pvContent }} />
          )}
        </div>
      </div>
    ));
  };

  const renderDesignOne = () => {
    return (
      <article className="px-3 pt-14 pb-0 desktop-smalll:pt-10 tablet:pt-8 mobile:pt-10 mobile:pb-0 mobile:px-6">
        <div className="max-w-[84%] desktop_large:max-w-[85%] desktop:max-w-[98%] mx-auto ">
          {cpvHeading && (
            <HeadingTag className="mb-8 text-center desktop_min:mb-8 tablet:mb-8 mobile:mb-6 text-xl01_fs font-SegoeUI font-bold text-primarybgcolor desktop_min:text-x39_fs mobile:text-36_fs">{cpvHeading}</HeadingTag>
          )}
          {purposeAndValues && (
            <div className="boxes-view flex flex-wrap gap-x-10 tablet:gap-x-8" >
              {renderPurposeAndValues()}
            </div>
          )}
        </div>
      </article>
    );
  };

  const renderDesignTwo = () => {
    return (
      <article className="pt-6 pb-20 tablet:pt-2 tablet:pb-12">
        <div className="max-w-[84%] desktop_large:max-w-[85%] desktop:max-w-[98%] mx-auto mobile:px-5">
          {cpvHeading && (
            <HeadingTag className="mb-8 text-center desktop_min:mb-8 tablet:mb-6 mobile:mb-6 text-xl01_fs font-SegoeUI font-bold text-primarybgcolor desktop_min:text-x39_fs mobile:text-36_fs">{cpvHeading}</HeadingTag>
          )}
          {description && (
            <p className="text-[20px] mobile:text-[16px] text-center max-w-[1150px] mx-auto">{description}</p>
          )}
        </div>
        {purposeAndValues && (
          <div className="grid flex-wrap max-w-[1150px] mx-auto mt-8 tablet:mt-4 px-5 mobile:px-7 gap-8 grid-cols-3 tablet:gap-6 mobile:grid-cols-1">
            {purposeAndValues.map((item, index) => (
              <div key={index} className="relative p-8 desktop-smalll:p-4 desktop-smalll:pb-8 pb-8 mobile:p-5 border border-[#ddd] hover:shadow-card-shadow after:absolute after:content[''] after:bottom-0 after:left-0 after:block after:h-[5px] after:bg-secondarycolor after:w-full after:rounded-sm after:rounded-t-none">
                <div className="flex items-center mobile-small:flex-wrap mb-3">
                  {item.pvLogo && item.pvLogo.node && (
                    <div className="w-10 min-w-[40px] h-10 bg-[#e7f9e1] rounded-full">
                      <img src={item.pvLogo.node.mediaItemUrl} alt={item.pvLogo.node.altText} className="w-full h-full max-w-[12px] mx-auto" />
                    </div>
                  )}
                  {item.pvTitle && (
                    <h5 className="w-[86%] font-SegoeUI font-bold text-primarybgcolor mobile-small:w-[100%] pl-4 mobile-small:pl-0 mobile-small:pt-3 mobile-small:pt-2 mb-0 mobile:pl-5 text-base_fs">{item.pvTitle}</h5>
                  )}
                </div>
                {item.services && (
                  <ul className="w-full pt-[12px] mobile:pt-0">
                    {item.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="w-full flex items-start text-sm_fs text-primarybgcolor mb-4">{service.service}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}
      </article>
    );
  };

  const renderDesignThree = () => {
    return (
      <article className="py-20 tablet:pt-12 tablet:pb-12" style={{ backgroundImage: "linear-gradient(#f7f7f7 .76%,rgba(248,248,248,.74) 26.46%,rgba(251,251,251,.6) 55.6%,rgba(255,255,255,.53125) 83.01%,rgba(255,255,255,0) 83.01%)" }}>
        <div className="container">
          <div className="grid grid-cols-4 gap-7 flex-wrap max-w-[1150px] mx-auto tablet:grid-cols-2 mobile:grid-cols-1">
            {purposeAndValues.map((item, index) => (
              <div key={index} className="bg-white p-8 desktop-smalll:p-4 desktop-smalll:pb-8 pb-8 mobile:p-5 border border-[#ddd] hover:shadow-card-shadow relative after:absolute after:content[''] after:bottom-0 after:left-0 after:block after:h-[5px] after:bg-secondarycolor after:w-full after:rounded-sm after:rounded-t-none">
                <div className="flex items-center mobile-small:flex-wrap mb-3 border-b border-secondarycolor pb-6">
                  {item.pvLogo && item.pvLogo.node && (
                    <div className="w-10 min-w-[40px] h-10 bg-[#e7f9e1] rounded-full">
                      <img src={item.pvLogo.node.mediaItemUrl} alt={item.pvLogo.node.altText} className="w-full h-full max-w-[12px] mx-auto" />
                    </div>
                  )}
                  {item.pvTitle && (
                    <h5 className="w-[86%] text-base_fs mobile-small:w-[100%] pl-4 mobile-small:pl-0 mobile-small:pt-3 mb-0 mobile:pl-5 font-SegoeUI font-bold text-primarybgcolor">{item.pvTitle}</h5>
                  )}
                </div>
                {item.pvContent && (
                  <p className="text-sm_fs leading-[24px] mt-4 text-bodyfontcolor font-SegoeUI">{item.pvContent}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </article>
    );
  };

  const renderComponentBasedOnDesign = () => {
    switch (designStyle) {
      case "Design One":
        return renderDesignOne();
      case "Design Two":
        return renderDesignTwo();
      case "Design Three":
        return renderDesignThree();
      default:
        return null;
    }
  };

  return renderComponentBasedOnDesign();
};

export default WordpressRetainersServices;
