import React from 'react';

const TitleContentWithCenteredIcons = ({ titleContentWithCenteredIcons }) => {
  if (!titleContentWithCenteredIcons) {
    return null;
  }

  const {
    heading,
    rightSideContent,
    leftSideContent,
    link,
    centeredIcons,
  } = titleContentWithCenteredIcons;

  return (
    <article className="py-12 pb-14 mobile:py-8 mobile:pb-12">
      <div className="container">
        <h2 className="text-center font-SegoeUI font-bold text-primarybgcolor text-xl01_fs max-w-[930px] m-auto desktop_min:text-x39_fs mobile:text-36_fs">{heading}</h2>
        <div className="flex flex-wrap max-w-[1150px] mx-auto mt-[40px] mobile:mt-[25px]">
          <div className="w-[42%] px-3 mobile:w-full text-bodyfontcolor font-SegoeUI" dangerouslySetInnerHTML={{ __html: rightSideContent }}></div>
          <div className="w-[16%] px-3 relative mobile:w-[100%] mx-auto mobile:my-4 mobile:flex mobile:flex-wrap mobile:items-center mobile:justify-center before:content[''] before:absolute before:top-0 before:left-1/2 before:right-0 before:w-1 before:h-full before:border-l before:border-l-[#ddd] before:border-dashed mobile:before:top-1/2 mobile:before:left-0 mobile:before:w-full mobile:before:h-1 mobile:before:max-w-[250px] mobile:before:border-t mobile:before:border-l-0 mobile:before:m-auto">
            {centeredIcons.map((iconItem, index) => (
              <div key={index} className="relative z-z1 w-[52px] h-[52px] rounded-full bg-white shadow-card-shadow flex items-center justify-center my-2 mobile:my-0 mobile:mx-2 mx-auto">
                <img src={iconItem.icon.node.mediaItemUrl} alt={iconItem.icon.node.altText} />
              </div>
            ))}
          </div>
          <div className="w-[42%] px-3 mobile:w-full text-bodyfontcolor font-SegoeUI" dangerouslySetInnerHTML={{ __html: leftSideContent }}></div>
        </div>
        {link && (
          <div className="text-center">
            <a href={link.url} target={link.target} className="mt-8 mobile:mt-6 bg-secondarycolor text-white p-3 inline-block px-[15px] hover:bg-transparent hover:text-secondarycolor border border-secondarycolor mobile:px-3 mobile:py-2">
              {link.title}
            </a>
          </div>
        )}
      </div>
    </article>
  );
};

export default TitleContentWithCenteredIcons;
