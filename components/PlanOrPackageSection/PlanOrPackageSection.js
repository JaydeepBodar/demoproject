import React from 'react';

const PlanOrPackageSection = ({ planOrPackageSection }) => {
  if (!planOrPackageSection) {
    return null;
  }

  const {
    heightLightPlanText,
    heightLightPlanName,
    planOrPackageHeading,
    planOrPackageHeadingTag,
    packagesSection,
    planLink,
  } = planOrPackageSection;

  const wordpressUrl = process.env.NEXT_PUBLIC_WORDPRESS_URL;

  return (
    <article className="py-24 plan-sec tablet:py-16 mobile:py-14 px-7 tablet:px-3 mobile:px-3 bg-[#f5f7fa] bg-cover" id="plan-or-package-section" style={{ backgroundImage: `url('${wordpressUrl}/wp-content/themes/wppro/assets/images/plan-section-bg.png')` }}>
      <div className="container max-w-[1060px] px-3">
        <div className="flex flex-wrap items-center -mx-6 plan-items">
          <div className="w-[100%] lg:w-[55%] mb-10 lg:mb-0 px-6">
            <div className="max-w-[498px]">
              <h3 className="mb-8 mobile:text-2xl mobile:mb-3 text-primarybgcolor font-bold text-xl1_fs font-SegoeUI">{planOrPackageHeading}</h3>
              <h5 className="font-semibold mb-1 text-xl_fs leading-30 font-SegoeUI mobile:text-base_fs">{heightLightPlanText}</h5>
              <p className="mb-6 text-bodyfontcolor font-SegoeUI text-base_fs mobile:text-sm_fs">{heightLightPlanName}</p>
              {planLink && (
                <a
                  href={planLink.url}
                  className="inline-block max-w-[205px] font-SegoeUI text-sm_fs leading-[26px] text-white font-semibold rounded-[5px] py-3 px-[22px] bg-primarybgcolor border border-solid border-primarybgcolor
                  text-text-secondarycolor border-transparent hover:bg-secondarycolor hover:text-white package-link"
                  data-value={`${packagesSection.planHours} Hours/Month`}
                  target={planLink.target}
                >
                  {planLink.title}
                </a>
              )}
            </div>
          </div>
          <div className="w-[100%] lg:w-[45%] px-6">
            <div className="max-w-[432px]">
              {packagesSection.map((packageItem, index) => (
                <div key={index} className="w-[100%] plan-block bg-white mb-6 last:mb-0 relative before:absolute before:content[''] before:left-0 before:bg-[#aeaeae] before:w-[6px] before:h-[74px] before:top-[50%] before:mt-[-37px] before:rounded-xl before:rounded-tl-none before:rounded-bl-none group hover:before:bg-secondarycolor">
                  <a href={planLink.url}>
                    <div className="flex items-end pl-16 py-8 pr-5 mobile:pl-6 mobile:pr-5 mobile:py-9">
                      <strong className="mr-[11px] text-[60px] leading-[54px] mobile:text-[40px] mobile:leading-[30px] text-[#000000] font-SegoeUI group-hover:text-secondarycolor">
                        {packageItem.planHours}
                      </strong>
                      <h5 className="text-[24px] leading-[30px] mobile:text-[17px] mobile:leading-[24px] text-[#000000] font-bold font-SegoeUI">
                        {packageItem.planHoursMonthTitle}
                      </h5>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PlanOrPackageSection;
