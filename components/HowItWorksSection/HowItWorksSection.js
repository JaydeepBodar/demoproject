import React from "react";

const HowItWorksSection = ({ sectionData }) => {
  if (!sectionData) {
    return null;
  }

  const {
    howItWorksHeading,
    howItWorksHeadingTag,
    howItWorksContent,
    howItWorksBackgroundImage,
    howItWorksServices
  } = sectionData;

  // Map heading tags to JSX components
  const headingTagComponents = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6'
  };

  // Dynamically determine the heading tag
  const HeadingTag = headingTagComponents[howItWorksHeadingTag] || 'h2';

  return (
    <article className="bg-primarybgcolor how-does-it-works">
      <div
        className="w-full flex flex-wrap text-white items-center justify-between bg-no-repeat bg-left bg-contain mobile:bg-top"
        style={{
          backgroundImage: `url(${howItWorksBackgroundImage?.node?.mediaItemUrl || ''})`
        }}
      >
        <div className="w-[44%] desktop:w-[40%] tablet-large:w-[100%] tablet-large:mb-10 pt-12 mobile:pt-10">
          <div className="max-w-[587px] tablet-large:max-w-[100%] ml-auto mr-0 pr-56 desktop:pr-24 desktop-smalll:pr-7 pl-7">
            <HeadingTag className="text-white mb-8 tablet-large:mb-4 font-SegoeUI text-xl01_fs font-bold desktop_min:text-x39_fs mobile:text-36_fs mobile-small:text-xl05">
              {howItWorksHeading}
            </HeadingTag>
            <div
              className="text-secbodyfontcolor mb-8 tablet-large:mb-3 font-SegoeUI text-base_fs leading-30 mobile:text-sm_fs mobile:leading-27 flex flex-wrap gap-6 mobile:gap-2 mobile:mb-0"
              dangerouslySetInnerHTML={{ __html: howItWorksContent }}
            />
          </div>
        </div>
        {howItWorksServices && (
          <div className="works-blocks w-[54%] desktop:w-[60%] tablet-large:w-[100%] flex flex-wrap items-center">
            {howItWorksServices.map((service, index) => (
              <div
                key={index}
                className={`works-blocks-item w-1/2 mobile:w-full float-left p-12 px-14 desktop_min:p-8 desktop_large:px-8 desktop-smalll:px-8 mobile:px-7 mobile:py-8 mobile:pb-10 ${
                  index === 0 || index === 3 ? "bg-white/[.04]" : "bg-transparent"
                } ${
                  index === 0 || index === 2 ? "mobile:bg-white/[.04]" : "mobile:bg-transparent"
                } hover:text-white overflow-hidden`}
              >
                <div className="blocks-count mb-5 mobile:mb-2" />
                {service.serviceHeading && (
                  <h5 className="mb-6 mobile:mb-2">
                    <div className="text-white font-semibold text-xl_fs mobile:text-19_fs mobile:leading-27">
                      {service.serviceHeading}
                    </div>
                  </h5>
                )}
                {service.serviceContent && (
                  <div className="work-blocks-p mb-9 mobile:mb-0">
                    <div
                      className="text-secbodyfontcolor font-SegoeUI text-base_fs leading-30 mobile:text-sm_fs mobile:leading-27 h-180 mobile:h-auto"
                      dangerouslySetInnerHTML={{ __html: service.serviceContent }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export default HowItWorksSection;
