import React, { useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';

const CaseStudySection = ({ caseStudySection }) => {
  if (!caseStudySection) {
    return null;
  }

  useEffect(() => {
    const initializeSlick = async () => {
      if (typeof window !== 'undefined') {
        const $ = (await import('jquery')).default;
        await import('slick-carousel');

        $('.case--slider').slick({
          dots: false,
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          appendArrows: $('.case-slider-nav'),
          prevArrow: '<button type="button" class="slick-prev flex align-middle justify-center bg-secondarycolor items-center text-white px-3 py-2 w-12 h-12 left-0 !border border-solid border-secondarycolor before:hidden group mobile:w-9 mobile:h-9 relative top-0 translate-y-0 mobile:px-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" class="group-hover:text-secondarycolor group-focus:text-secondarycolor" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg></button>',
          nextArrow: '<button type="button" class="slick-next flex align-middle justify-center bg-secondarycolor items-center text-white px-3 py-2 w-12 h-12 right-0 !border border-solid border-secondarycolor before:hidden group mobile:w-9 mobile:h-9  relative top-0 translate-y-0 mobile:px-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" class="group-hover:text-secondarycolor group-focus:text-secondarycolor" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg></button>',
        });
      }
    };
    initializeSlick();
  }, [caseStudySection]);

  const renderCaseStudy = (caseStudy) => {
    const { id, title, caseStudyPost, featuredImage, link, countries, industries, technologies } = caseStudy.node;
    const countryNames = countries?.edges.map(edge => edge.node.name).join(', ') || '';
    const industryNames = industries?.edges.map(edge => edge.node.name).join(', ') || '';
    const technologyNames = technologies?.edges.map(edge => edge.node.name).join(', ') || '';

    return (
      <div key={id} className="w-full !flex flex-wrap">
        <div className="w-[54%] tablet:w-full bg-primarybgcolor relative flex items-center">
          <div className="w-full min-h-[600px] mobile:min-h-[450px] h-[600px] mobile:h-full overflow-hidden">
            <img
              decoding="async"
              src={featuredImage?.node?.mediaItemUrl || ''}
              className="w-full h-full object-contain mobile:object-top"
              alt={featuredImage?.node?.altText || ''}
            />
          </div>
          <div className="w-[95%] desktop:w-[100%] mobile:w-[60%] mobile-l:w-[75%] absolute bottom-9 mobile:bottom-[10px] -right-[79px] desktop-smalll:-right-[50px] tablet:right-[0px] mobile:-right-[30px] mobile-l:right-[0px] flex justify-end desktop:justify-start tablet:justify-center tablet:mx-auto mobile:flex-wrap pr-[20px] desktop:pr-0">
            <div className="bg-[#ffffff]/[0.9] shadow-4xl pt-7 pb-8 tablet:pb-6 tablet:pt-4 mobile:pt-4 mobile:pb-5 px-6 desktop:px-4 mobile:px-4 mr-4 desktop:mr-4 mobile:mr-0 mobile:mb-2 last:mr-0 desktop:last:mr-4 mobile:last:mr-0 min-w-[245px] w-[245px] desktop_large:min-w-[230px] desktop_large:w-[230px] desktop:min-w-[200px] desktop-smalll:min-w-[175px] desktop:w-[200px] desktop-smalll:min-w-[175px] mobile:min-w-full mobile:w-full text-center">
              <h5 className="font-semibold text-secondarycolor font-SegoeUI mb-0 tablet:mb-[4px] leading-[30px] text-xl_fs mobile:text-19_fs mobile:leading-30">Countries</h5>
              <p className="text-sm_fs text-bodyfontcolor last:mb-0 font-SegoeUI">{countryNames}</p>
            </div>
            <div className="bg-[#ffffff]/[0.9] shadow-4xl pt-7 pb-8 tablet:pb-6 tablet:pt-4 mobile:pt-4 mobile:pb-5 px-6 desktop:px-4 mobile:px-4 mr-4 desktop:mr-4 mobile:mr-0 mobile:mb-2 last:mr-0 desktop:last:mr-4 mobile:last:mr-0 min-w-[245px] w-[245px] desktop_large:min-w-[230px] desktop_large:w-[230px] desktop:min-w-[200px] desktop-smalll:min-w-[175px] desktop:w-[200px] desktop-smalll:min-w-[175px] mobile:min-w-full mobile:w-full text-center">
              <h5 className="font-semibold text-secondarycolor font-SegoeUI mb-0 tablet:mb-[4px] leading-[30px] text-xl_fs mobile:text-19_fs mobile:leading-30">Industries</h5>
              <p className="text-sm_fs text-bodyfontcolor last:mb-0 font-SegoeUI">{industryNames}</p>
            </div>
            <div className="bg-[#ffffff]/[0.9] shadow-4xl pt-7 pb-8 tablet:pb-6 tablet:pt-4 mobile:pt-4 mobile:pb-5 px-6 desktop:px-4 mobile:px-4 mr-4 desktop:mr-4 mobile:mr-0 mobile:mb-2 last:mr-0 desktop:last:mr-4 mobile:last:mr-0 min-w-[245px] w-[245px] desktop_large:min-w-[230px] desktop_large:w-[230px] desktop:min-w-[200px] desktop-smalll:min-w-[175px] desktop:w-[200px] desktop-smalll:min-w-[175px] mobile:min-w-full mobile:w-full text-center">
              <h5 className="font-semibold text-secondarycolor font-SegoeUI mb-0 tablet:mb-[4px] leading-[30px] text-xl_fs mobile:text-19_fs mobile:leading-30">Technologies</h5>
              <p className="text-sm_fs text-bodyfontcolor last:mb-0 font-SegoeUI">{technologyNames}</p>
            </div>
          </div>
        </div>
        <div className="w-[46%] tablet:w-full pl-28 desktop-smalll:pl-24 tablet-large:pl-24 tablet:pl-8 mobile:pl-7 pr-28 desktop:pr-8 tablet:pr-8 mobile:pr-3 py-14 tablet:pt-10 mobile:py-6 mobile:pb-10 max-w-2xl tablet:max-w-[100%] ml-0 mr-auto flex items-center">
          <div className="pb-12 tablet:pb-24 mobile:pb-4">
            <h2 className="mb-6 mobile:mb-4 text-xl01_fs font-SegoeUI font-bold text-primarybgcolor desktop_min:text-x39_fs mobile:text-36_fs">{title}</h2>
            <div className="content h-300 mb-9 mobile:h-auto overflow-hidden mobile:overflow-visible tablet-large:h-auto">
              <p className="mb-6 tablet:mb-[10px] mobile:mb-4 text-base_fs leading-30 text-bodyfontcolor font-SegoeUI mobile:text-sm_fs mobile:leading-27">{ReactHtmlParser(caseStudyPost.caseStudyContent)}</p>
            </div>
            <a href={link} className="tablet:mt-4 button_sec bg-secondarycolor text-white px-9 py-3.5 hover:bg-transparent hover:text-secondarycolor border border-secondarycolor font-SegoeUI inline-block mobile:px-5 mobile:py-3">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <article className="bg-grey relative case-study tablet:my-20 mobile:mb-12 mobile:mt-0">
      <h2 className="w-full text-center font-SegoeUI mb-12 desktop_min:mb-8 tablet:mb-8 mobile:mb-6 text-xl01_fs font-bold text-primarybgcolor desktop_min:text-x39_fs mobile:text-36_fs">
        Our Portfolio
      </h2>
      <div className="case-slider-nav absolute flex flex-wrap gap-2 bottom-[30px] mobile:bottom-0 left-[52.4%] desktop-smalll:left-[50%] tablet:left-[0%] z-10 transition-all ease-linear duration-300 ml-36 tablet:ml-8" />
      <div className="case--slider">{caseStudySection.caseStudySelection.edges.map(renderCaseStudy)}</div>
    </article>
  );
};

export default CaseStudySection;
