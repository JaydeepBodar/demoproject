import React from "react";

const WordpressRetainersServices = ({ servicesData }) => {
  if (!servicesData) {
    console.warn("No services data found");
    return null;
  }

  const { cpvHeading, cpvHeadingTag, designStyle, description, purposeAndValues } = servicesData;

  const renderPurposeAndValues = () => {
    return purposeAndValues.map((item, index) => (
      <div key={index} className="w-boxes_view relative flex flex-wrap desktop_large:w-desk_boxes_view tablet-large:w-[48%] tablet:w-[48%] mobile:w-[100%] border-[3px] border-[#f7f7f7] mb-20 p-11 desktop_large:p-7 desktop-smalll:p-6 mr-8 tablet:mr-4 mobile:mr-0">
        <div className="w-full p-8 desktop_large:p-5 desktop-smalll:p-5 desktop-smalll:pb-8 mobile:p-5 bg-[#f5f7fa] -mb-[81px] service-content z-z1 relative">
          <div className="flex items-center mobile-small:flex-wrap desktop-smalll:flex-col desktop-smalll:items-start">
            {item.pvLogo && item.pvLogo.node && (
              <div className="w-[70px] min-w-[70px] h-[70px] p-2 bg-[#F1F1F1] rounded-full flex items-center justify-center">
                <img src={item.pvLogo.node.mediaItemUrl} alt={item.pvLogo.node.altText} className="max-w-[36px] mx-auto" />
              </div>
            )}
            {item.pvTitle && (
              <h5 className="w-[86%] mobile-small:w-[100%] pl-3 mobile-small:pl-0 mobile-small:pt-3 mb-0 mobile:pl-0 desktop-smalll:pl-0">{item.pvTitle}</h5>
            )}
          </div>
          {item.pvContent && (
           <div className="mt-4 mobile-small:mt-2 text-sm_fs leading-[26px]" dangerouslySetInnerHTML={{ __html: item.pvContent }} />
          )}
        </div>
      </div>
      <article className="px-3 py-12 desktop-smalll:py-10 tablet:py-8 mobile:py-4 wp-services">
      <div className="max-w-[84%] desktop_large:max-w-[85%] desktop:max-w-[98%] mx-auto ">
        <h2 className="mb-12 text-center desktop_min:mb-8 tablet:mb-8 mobile:mb-6 text-xl01_fs font-SegoeUI font-bold text-primarybgcolor desktop_min:text-x39_fs mobile:text-36_fs">
          Core Purpose &amp; Values
        </h2>
        <div className="flex flex-wrap boxes-view ">
          <div className="w-boxes_view relative flex flex-wrap desktop_large:w-desk_boxes_view tablet-large:w-[48%] tablet:w-[48%] mobile:w-[100%] border-[3px] border-[#f7f7f7] mb-20  p-11 desktop_large:p-7 desktop-smalll:p-6 mr-8 tablet-large::mr-8 tablet:mr-4 mobile:mr-0 before:absolute before:content-[''] before:border-t-2 before:border-b-2 before:border-primarybgcolor before:scale-x-0 before:top-0 before:bottom-0 before:left-0 before:right-0 before:opacity-0 before:transition before:duration-350 hover:before:opacity-100 hover:before:scale-1001  after:absolute after:content-[''] after:border-l-2 after:border-r-2 after:border-primarybgcolor after:scale-y-0 after:top-0 after:bottom-0 after:left-0 after:right-0 after:opacity-0 after:transition after:duration-350 hover:after:opacity-100 hover:after:scale-1001">
            <div className="w-full p-8 desktop_large:p-5 mobile:text-center desktop-smalll:p-5 desktop-smalll:pb-8  mobile:p-5 bg-[#f5f7fa] -mb-[81px] service-content z-z1 relative after:[''] after:absolute after:left-0 after:w-0 after:bottom-0 after:transition-all after:duration-350 after:h-[0.18rem] after:bg-primarybgcolor hover:after:w-full after:overflow-hidden">
              <div className="flex items-center mobile-small:flex-wrap desktop-smalll:flex-col desktop-smalll:items-start">
                <div className="w-[70px] min-w-[70px]  h-[70px] p-2 bg-[#F1F1F1] rounded-full flex items-center justify-center mobile:mx-auto">
                  <img
                    data-lazyloaded={1}
                    src="https://wppro.agency/wp-content/uploads/2023/10/Team-spirit.svg"
                    decoding="async"
                    data-src="https://wppro.agency/wp-content/uploads/2023/10/Team-spirit.svg"
                    alt="Team Work"
                    className="max-w-[36px] mx-auto entered litespeed-loaded"
                    data-ll-status="loaded"
                  />
                  <noscript>
                    &lt;img decoding="async"
                    src="https://wppro.agency/wp-content/uploads/2023/10/Team-spirit.svg"
                    alt="Team Work" class="max-w-[36px] mx-auto"&gt;
                  </noscript>
                </div>
                <h5 className="w-[86%] mobile:w-[100%] pl-3 mobile:pl-0 mobile:pt-2 mb-0 desktop-smalll:pl-0 text-xl_fs text-primarybgcolor font-SegoeUI font-bold mobile:text-base_fs">
                  Together We Thrive
                </h5>
              </div>
              <div className="mt-4 mobile:mt-1 text-sm_fs leading-6 text-bodyfontcolor font-SegoeUI font-normal">
                <p>
                  It guides our success through collaborative efforts and principled
                  values.
                </p>
              </div>
            </div>
          </div>
          <div className="w-boxes_view relative flex flex-wrap desktop_large:w-desk_boxes_view tablet-large:w-[48%] tablet:w-[48%] mobile:w-[100%] border-[3px] border-[#f7f7f7] mb-20  p-11 desktop_large:p-7 desktop-smalll:p-6 mr-8 tablet-large:mr-0 tablet:mr-0 mobile:mr-0 before:absolute before:content-[''] before:border-t-2 before:border-b-2 before:border-primarybgcolor before:scale-x-0 before:top-0 before:bottom-0 before:left-0 before:right-0 before:opacity-0 before:transition before:duration-350 hover:before:opacity-100 hover:before:scale-1001  after:absolute after:content-[''] after:border-l-2 after:border-r-2 after:border-primarybgcolor after:scale-y-0 after:top-0 after:bottom-0 after:left-0 after:right-0 after:opacity-0 after:transition after:duration-350 hover:after:opacity-100 hover:after:scale-1001">
            <div className="w-full p-8 desktop_large:p-5 mobile:text-center desktop-smalll:p-5 desktop-smalll:pb-8  mobile:p-5 bg-[#f5f7fa] -mb-[81px] service-content z-z1 relative after:[''] after:absolute after:left-0 after:w-0 after:bottom-0 after:transition-all after:h-[0.18rem] after:duration-350 after:bg-primarybgcolor hover:after:w-full after:overflow-hidden">
              <div className="flex items-center mobile-small:flex-wrap desktop-smalll:flex-col desktop-smalll:items-start">
                <div className="w-[70px] min-w-[70px]  h-[70px] p-2 bg-[#F1F1F1] rounded-full flex items-center justify-center mobile:mx-auto">
                  <img
                    data-lazyloaded={1}
                    src="https://wppro.agency/wp-content/uploads/2023/10/Full-Quality-Assurance.svg"
                    decoding="async"
                    data-src="https://wppro.agency/wp-content/uploads/2023/10/Full-Quality-Assurance.svg"
                    alt="Quality Assurance"
                    className="max-w-[36px] mx-auto entered litespeed-loaded"
                    data-ll-status="loaded"
                  />
                  <noscript>
                    &lt;img decoding="async"
                    src="https://wppro.agency/wp-content/uploads/2023/10/Full-Quality-Assurance.svg"
                    alt="Quality Assurance" class="max-w-[36px] mx-auto"&gt;
                  </noscript>
                </div>
                <h5 className="w-[86%] mobile:w-[100%] pl-3 mobile:pl-0 mobile:pt-2 mb-0 desktop-smalll:pl-0 text-xl_fs text-primarybgcolor font-SegoeUI font-bold mobile:text-base_fs">
                  Standard Quality Delivering
                </h5>
              </div>
              <div className="mt-4 mobile:mt-1 text-sm_fs leading-6 text-bodyfontcolor font-SegoeUI font-normal">
                <p>
                  Committed to delivering standard quality with a focus on
                  excellence in every step.
                </p>
              </div>
            </div>
          </div>
          <div className="w-boxes_view relative flex flex-wrap desktop_large:w-desk_boxes_view tablet-large:w-[48%] tablet:w-[48%] mobile:w-[100%] border-[3px] border-[#f7f7f7] mb-20  p-11 desktop_large:p-7 desktop-smalll:p-6 mr-0 tablet-large:mr-8 tablet:mr-4 mobile:mr-0 before:absolute before:content-[''] before:border-t-2 before:border-b-2 before:border-primarybgcolor before:scale-x-0 before:top-0 before:bottom-0 before:left-0 before:right-0 before:opacity-0 before:transition before:duration-350 hover:before:opacity-100 hover:before:scale-1001  after:absolute after:content-[''] after:border-l-2 after:border-r-2 after:border-primarybgcolor after:scale-y-0 after:top-0 after:bottom-0 after:left-0 after:right-0 after:opacity-0 after:transition after:duration-350 hover:after:opacity-100 hover:after:scale-1001">
            <div className="w-full p-8 desktop_large:p-5 mobile:text-center desktop-smalll:p-5 desktop-smalll:pb-8  mobile:p-5 bg-[#f5f7fa] -mb-[81px] service-content z-z1 relative after:[''] after:absolute after:left-0 after:w-0 after:bottom-0 after:transition-all after:h-[0.18rem] after:duration-350 after:bg-primarybgcolor hover:after:w-full after:overflow-hidden">
              <div className="flex items-center mobile-small:flex-wrap desktop-smalll:flex-col desktop-smalll:items-start">
                <div className="w-[70px] min-w-[70px]  h-[70px] p-2 bg-[#F1F1F1] rounded-full flex items-center justify-center mobile:mx-auto">
                  <img
                    data-lazyloaded={1}
                    src="https://wppro.agency/wp-content/uploads/2023/10/Analytics-and-Reporting.png"
                    width={512}
                    height={512}
                    decoding="async"
                    data-src="https://wppro.agency/wp-content/uploads/2023/10/Analytics-and-Reporting.png"
                    alt="Analytics and Reporting"
                    className="max-w-[36px] mx-auto entered litespeed-loaded"
                    data-ll-status="loaded"
                  />
                  <noscript>
                    &lt;img width="512" height="512" decoding="async"
                    src="https://wppro.agency/wp-content/uploads/2023/10/Analytics-and-Reporting.png"
                    alt="Analytics and Reporting" class="max-w-[36px] mx-auto"&gt;
                  </noscript>
                </div>
                <h5 className="w-[86%] mobile:w-[100%] pl-3 mobile:pl-0 mobile:pt-2 mb-0 desktop-smalll:pl-0 text-xl_fs text-primarybgcolor font-SegoeUI font-bold mobile:text-base_fs">
                  Efficient Work Process
                </h5>
              </div>
              <div className="mt-4 mobile:mt-1 text-sm_fs leading-6 text-bodyfontcolor font-SegoeUI font-normal">
                <p>
                  Prioritizing efficiency in our work processes to maximize output
                  and minimize waste.
                </p>
              </div>
            </div>
          </div>
          <div className="w-boxes_view relative flex flex-wrap desktop_large:w-desk_boxes_view tablet-large:w-[48%] tablet:w-[48%] mobile:w-[100%] border-[3px] border-[#f7f7f7] mb-20  p-11 desktop_large:p-7 desktop-smalll:p-6 mr-8 tablet-large:mr-0 tablet:mr-0 mobile:mr-0 before:absolute before:content-[''] before:border-t-2 before:border-b-2 before:border-primarybgcolor before:scale-x-0 before:top-0 before:bottom-0 before:left-0 before:right-0 before:opacity-0 before:transition before:duration-350 hover:before:opacity-100 hover:before:scale-1001  after:absolute after:content-[''] after:border-l-2 after:border-r-2 after:border-primarybgcolor after:scale-y-0 after:top-0 after:bottom-0 after:left-0 after:right-0 after:opacity-0 after:transition after:duration-350 hover:after:opacity-100 hover:after:scale-1001">
            <div className="w-full p-8 desktop_large:p-5 mobile:text-center desktop-smalll:p-5 desktop-smalll:pb-8  mobile:p-5 bg-[#f5f7fa] -mb-[81px] service-content z-z1 relative after:[''] after:absolute after:left-0 after:w-0 after:bottom-0 after:transition-all after:h-[0.18rem] after:duration-350 after:bg-primarybgcolor hover:after:w-full after:overflow-hidden">
              <div className="flex items-center mobile-small:flex-wrap desktop-smalll:flex-col desktop-smalll:items-start">
                <div className="w-[70px] min-w-[70px]  h-[70px] p-2 bg-[#F1F1F1] rounded-full flex items-center justify-center mobile:mx-auto">
                  <img
                    data-lazyloaded={1}
                    src="https://wppro.agency/wp-content/uploads/2023/10/Act-with-integrity.svg"
                    decoding="async"
                    data-src="https://wppro.agency/wp-content/uploads/2023/10/Act-with-integrity.svg"
                    alt="Act with integrity"
                    className="max-w-[36px] mx-auto entered litespeed-loaded"
                    data-ll-status="loaded"
                  />
                  <noscript>
                    &lt;img decoding="async"
                    src="https://wppro.agency/wp-content/uploads/2023/10/Act-with-integrity.svg"
                    alt="Act with integrity" class="max-w-[36px] mx-auto"&gt;
                  </noscript>
                </div>
                <h5 className="w-[86%] mobile:w-[100%] pl-3 mobile:pl-0 mobile:pt-2 mb-0 desktop-smalll:pl-0 text-xl_fs text-primarybgcolor font-SegoeUI font-bold mobile:text-base_fs">
                  Integrity &amp; Transparency
                </h5>
              </div>
              <div className="mt-4 mobile:mt-1 text-sm_fs leading-6 text-bodyfontcolor font-SegoeUI font-normal">
                <p>
                  Operating with integrity and transparency to build lasting trust
                  and partnerships.
                </p>
              </div>
            </div>
          </div>
          <div className="w-boxes_view relative flex flex-wrap desktop_large:w-desk_boxes_view tablet-large:w-[48%] tablet:w-[48%] mobile:w-[100%] border-[3px] border-[#f7f7f7] mb-20  p-11 desktop_large:p-7 desktop-smalll:p-6 mr-8 tablet-large:mr-8 tablet:mr-4 mobile:mr-0 before:absolute before:content-[''] before:border-t-2 before:border-b-2 before:border-primarybgcolor before:scale-x-0 before:top-0 before:bottom-0 before:left-0 before:right-0 before:opacity-0 before:transition before:duration-350 hover:before:opacity-100 hover:before:scale-1001  after:absolute after:content-[''] after:border-l-2 after:border-r-2 after:border-primarybgcolor after:scale-y-0 after:top-0 after:bottom-0 after:left-0 after:right-0 after:opacity-0 after:transition after:duration-350 hover:after:opacity-100 hover:after:scale-1001">
            <div className="w-full p-8 desktop_large:p-5 mobile:text-center desktop-smalll:p-5 desktop-smalll:pb-8  mobile:p-5 bg-[#f5f7fa] -mb-[81px] service-content z-z1 relative after:[''] after:absolute after:left-0 after:w-0 after:bottom-0 after:transition-all after:h-[0.18rem] after:duration-350 after:bg-primarybgcolor hover:after:w-full after:overflow-hidden">
              <div className="flex items-center mobile-small:flex-wrap desktop-smalll:flex-col desktop-smalll:items-start">
                <div className="w-[70px] min-w-[70px]  h-[70px] p-2 bg-[#F1F1F1] rounded-full flex items-center justify-center mobile:mx-auto">
                  <img
                    data-lazyloaded={1}
                    src="https://wppro.agency/wp-content/uploads/2023/10/Programming-support.svg"
                    decoding="async"
                    data-src="https://wppro.agency/wp-content/uploads/2023/10/Programming-support.svg"
                    alt="Programming support"
                    className="max-w-[36px] mx-auto entered litespeed-loaded"
                    data-ll-status="loaded"
                  />
                  <noscript>
                    &lt;img decoding="async"
                    src="https://wppro.agency/wp-content/uploads/2023/10/Programming-support.svg"
                    alt="Programming support" class="max-w-[36px] mx-auto"&gt;
                  </noscript>
                </div>
                <h5 className="w-[86%] mobile:w-[100%] pl-3 mobile:pl-0 mobile:pt-2 mb-0 desktop-smalll:pl-0 text-xl_fs text-primarybgcolor font-SegoeUI font-bold mobile:text-base_fs">
                  Respect Your Resources
                </h5>
              </div>
              <div className="mt-4 mobile:mt-1 text-sm_fs leading-6 text-bodyfontcolor font-SegoeUI font-normal">
                <p>
                  Responsibly and sustainably using resources to show our
                  appreciation for trust.
                </p>
              </div>
            </div>
          </div>
          <div className="w-boxes_view relative flex flex-wrap desktop_large:w-desk_boxes_view tablet-large:w-[48%] tablet:w-[48%] mobile:w-[100%] border-[3px] border-[#f7f7f7] mb-20  p-11 desktop_large:p-7 desktop-smalll:p-6 mr-0 tablet-large:mr-0 tablet:mr-0 mobile:mr-0 before:absolute before:content-[''] before:border-t-2 before:border-b-2 before:border-primarybgcolor before:scale-x-0 before:top-0 before:bottom-0 before:left-0 before:right-0 before:opacity-0 before:transition before:duration-350 hover:before:opacity-100 hover:before:scale-1001  after:absolute after:content-[''] after:border-l-2 after:border-r-2 after:border-primarybgcolor after:scale-y-0 after:top-0 after:bottom-0 after:left-0 after:right-0 after:opacity-0 after:transition after:duration-350 hover:after:opacity-100 hover:after:scale-1001">
            <div className="w-full p-8 desktop_large:p-5 mobile:text-center desktop-smalll:p-5 desktop-smalll:pb-8  mobile:p-5 bg-[#f5f7fa] -mb-[81px] service-content z-z1 relative after:[''] after:absolute after:left-0 after:w-0 after:bottom-0 after:transition-all after:h-[0.18rem] after:duration-350 after:bg-primarybgcolor hover:after:w-full after:overflow-hidden">
              <div className="flex items-center mobile-small:flex-wrap desktop-smalll:flex-col desktop-smalll:items-start">
                <div className="w-[70px] min-w-[70px]  h-[70px] p-2 bg-[#F1F1F1] rounded-full flex items-center justify-center mobile:mx-auto">
                  <img
                    data-lazyloaded={1}
                    src="https://wppro.agency/wp-content/uploads/2023/10/Development-Process.svg"
                    decoding="async"
                    data-src="https://wppro.agency/wp-content/uploads/2023/10/Development-Process.svg"
                    alt="Development Process"
                    className="max-w-[36px] mx-auto entered litespeed-loaded"
                    data-ll-status="loaded"
                  />
                  <noscript>
                    &lt;img decoding="async"
                    src="https://wppro.agency/wp-content/uploads/2023/10/Development-Process.svg"
                    alt="Development Process" class="max-w-[36px] mx-auto"&gt;
                  </noscript>
                </div>
                <h5 className="w-[86%] mobile:w-[100%] pl-3 mobile:pl-0 mobile:pt-2 mb-0 desktop-smalll:pl-0 text-xl_fs text-primarybgcolor font-SegoeUI font-bold mobile:text-base_fs">
                  Easy Work Process
                </h5>
              </div>
              <div className="mt-4 mobile:mt-1 text-sm_fs leading-6 text-bodyfontcolor font-SegoeUI font-normal">
                <p>
                  Simplifying the work process to make your experience convenient
                  and easy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  </article>
    ));
  };

  const renderDesignOne = () => {
    return (
      <article className="py-32 desktop-smalll:py-24 tablet:py-16 mobile:py-14 px-3 wp-services">
        <div className="max-w-[84%] desktop_large:max-w-[98%] desktop-smalll:max-w-[98%] tablet-large:max-w-[98%] mx-auto">
          {cpvHeading && (
            <cpvHeadingTag className="text-center mb-12 desktop_min:mb-8 tablet:mb-8 mobile:mb-6">{cpvHeading}</cpvHeadingTag>
          )}
          {purposeAndValues && (
            <div className="boxes-view flex flex-wrap">
              {renderPurposeAndValues()}
            </div>
          )}
        </div>
      </article>

    );
  };

  const renderDesignTwo = () => {
    return (
      <article className="py-20 tablet:py-9 mobile:pt-8 mobile:pb-10 purpose_and_values">
        <div className="container">
          {cpvHeading && (
            <cpvHeadingTag className="text-center mb-6 mobile:mb-2">{cpvHeading}</cpvHeadingTag>
          )}
          {description && (
            <p className="text-[20px] mobile:text-[16px] text-center max-w-[1150px] mx-auto">{description}</p>
          )}
        </div>
        {purposeAndValues && (
          <div className="flex flex-wrap max-w-[1150px] mx-auto mt-8 px-5 mobile:px-7">
            {purposeAndValues.map((item, index) => (
              <div key={index} className="retaine-card p-8 desktop-smalll:p-4 desktop-smalll:pb-8 pb-8 mobile:p-5 border border-[#ddd] hover:shadow-card-shadow">
                <div className="flex items-center mobile-small:flex-wrap mb-3">
                  {item.pvLogo && item.pvLogo.node && (
                    <div className="w-10 min-w-[40px] h-10 bg-[#e7f9e1] rounded-full">
                      <img src={item.pvLogo.node.mediaItemUrl} alt={item.pvLogo.node.altText} className="w-full h-full max-w-[12px] mx-auto" />
                    </div>
                  )}
                  {item.pvTitle && (
                    <h5 className="w-[86%] mobile-small:w-[100%] pl-4 mobile-small:pl-0 mobile-small:pt-3 mobile-small:pt-2 mb-0 mobile:pl-5 text-base_fs">{item.pvTitle}</h5>
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
      <article className="py-20" style={{ backgroundImage: "linear-gradient(#f7f7f7 .76%,rgba(248,248,248,.74) 26.46%,rgba(251,251,251,.6) 55.6%,rgba(255,255,255,.53125) 83.01%,rgba(255,255,255,0) 83.01%)" }}>
        <div className="container">
          <div className="flex flex-wrap max-w-[1150px] mx-auto">
            {purposeAndValues.map((item, index) => (
              <div key={index} className="four-col-card bg-white p-8 desktop-smalll:p-4 desktop-smalll:pb-8 pb-8 mobile:p-5 border border-[#ddd] hover:shadow-card-shadow relative">
                <div className="flex items-center mobile-small:flex-wrap mb-3 border-b border-secondarycolor pb-6">
                  {item.pvLogo && item.pvLogo.node && (
                    <div className="w-10 min-w-[40px] h-10 bg-[#e7f9e1] rounded-full">
                      <img src={item.pvLogo.node.mediaItemUrl} alt={item.pvLogo.node.altText} className="w-full h-full max-w-[12px] mx-auto" />
                    </div>
                  )}
                  {item.pvTitle && (
                    <h5 className="w-[86%] mobile-small:w-[100%] pl-4 mobile-small:pl-0 mobile-small:pt-3 mb-0 mobile:pl-5 text-base_fs">{item.pvTitle}</h5>
                  )}
                </div>
                {item.pvContent && (
                  <p className="text-sm_fs leading-[24px] mt-4">{item.pvContent}</p>
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
