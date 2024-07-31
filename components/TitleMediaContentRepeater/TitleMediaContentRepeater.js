import React from 'react';

const TitleMediaContentRepeater = ({ titleMediaContentRepeater }) => {
  if (!titleMediaContentRepeater) {
    return null;
  }

  const { heading, titleContentRepeater } = titleMediaContentRepeater;

  return (
    <article className="mb-12 mobile:mb-8 title-media-content-repeater">
      <div className="container">
        {heading && <h2 className="text-center text-xl01_fs font-SegoeUI font-bold text-primarybgcolor desktop_min:text-x39_fs mobile:text-36_fs">{heading}</h2>}

        {titleContentRepeater.map((item, idx) => {
          const { title, content, subTitle, media, link } = item;

          return (
            <div key={idx} className={`flex ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-start max-w-[930px] mobile:max-w-full mx-auto mt-10 mobile:mt-4 mobile:flex-wrap`}>
              {media && media.mediaType === 'Image' && media.image?.node && (
                <div className="w-[50%] mobile:w-full mobile:text-center mobile:mb-4">
                  <img src={media.image.node.mediaItemUrl} alt={media.image.node.altText} className="w-full h-full object-contain" />
                </div>
              )}
              <div className={`w-[50%] mobile:w-full ${idx % 2 === 0 ? 'pl-5' : 'pr-5'} content mobile:pl-0 mobile:pr-0 mobile:mb-5`}>
                {title && <h3 className="text-[26px] leading-8 font-normal font-SegoeUI text-primarybgcolor mb-3 mobile:mb-2">{title}</h3>}
                {content && <p className="text-[16px] leading-[24px] font-SegoeUI text-bodyfontcolor mb-12 mobile:mb-4">{content}</p>}
                {subTitle && <p className="text-[14px] text-gray-600 font-SegoeUI">{subTitle}</p>}
                {link && (
                  <a href={link.url} target={link.target} className="text-secondarycolor inline-block border border-secondarycolor py-3 px-4 font-SegoeUI font-semibold hover:bg-secondarycolor hover:text-white mobile:mb-0">
                    {link.title || link.url}
                  </a>
                )}
              </div>

              

              {media && media.mediaType === 'Video' && media.video?.selectVideo?.node && (
                <div className="w-[50%] mobile:w-full mobile:text-center">
                  <video className="inline-block w-max-[375px] mobile:w-max-[100%]" src={media.video.selectVideo.node.mediaItemUrl} controls />
                </div>
              )}

              {media && media.mediaType === 'Video' && media.video?.addUrl && (
                <div className="w-[50%] mobile:w-full mobile:text-center">
                  {/* Check if addUrl contains an iframe tag and extract src */}
                  {media.video.addUrl.includes('<iframe') ? (
                    <div dangerouslySetInnerHTML={{ __html: media.video.addUrl }} />
                  ) : (
                    <iframe
                      title={title || ''}
                      src={media.video.addUrl}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default TitleMediaContentRepeater;
