import React from 'react';

const ContactUsBanner = ({ bannerBlock }) => {
  // If no 'AcfContactUsBanner' block is found, return null
  if (!bannerBlock) {
    return null;
  }

  // Extract 'contactUsBanner' data from the found block
  const { cubContent, cubLink, backgroundImage, sectionDesign } = bannerBlock.contactUsBanner;

  return (
    <article
      className="bg-secondarycolor py-16 desktop-smalll:py-24 tablet:py-16 mobile:pt-10 mobile:pb-12 px-3"
      style={backgroundImage?.node?.mediaItemUrl ? { backgroundImage: `url(${backgroundImage.node.mediaItemUrl})`, backgroundPosition: 'top 31% right -15%', backgroundRepeat: 'no-repeat' } : {}}
    >
      <div className="container px-3">
        <div className="flex items-center justify-between max-w-[87%] desktop_large:max-w-[100%] mx-auto tablet:flex-wrap tablet:justify-center tablet:text-center">
          <h2 className="text-white w-[80%] tablet:w-[100%] font-SegoeUI tablet:mb-7 text-xl01_fs font-bold desktop_min:text-x39_fs mobile:text-36_fs mobile-small:text-xl05">
            {cubContent}
          </h2>
          <a
            href={cubLink.url}
            className="button_pri bg-white px-10 py-3 font-SegoeUI text-primarybgcolor hover:text-white border border-transparent hover:border-white hover:bg-transparent px-9"
            target={cubLink.target}
          >
            {cubLink.title}
          </a>
        </div>
      </div>
    </article>
  );
};

export default ContactUsBanner;
