import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const LetsTalkFormSection = ({ letsTalkFormSection }) => {
  if (!letsTalkFormSection) {
    return null;
  }

  const {
    subHeading,
    heading,
    headingTag,
    link,
    enterFormShortcode,
    content,
  } = letsTalkFormSection;

  // Mapping heading tags to JSX components
  const headingTagComponents = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
  };

  const HeadingTag = headingTagComponents[headingTag] || 'h1';

  const wordpressUrl = process.env.NEXT_PUBLIC_WORDPRESS_URL;

  return (
    <article
      className="bg-secondarycolor py-20 tablet:py-16 mobile:pt-8 mobile:pb-14 bg-no-repeat lets-section mb-10"
      style={{
        backgroundImage: `url(${wordpressUrl}/wp-content/themes/wppro/assets/images/image-25.png)`,
        backgroundPosition: 'top -125px right -190px',
      }}
    >
      <div className="lets-talk-sec px-4" id="full-width-talk-section">
        <div>
          <div>
            {heading && (
              <HeadingTag className="text-center mb-6 desktop_min:mb-4 tablet:mb-3 text-white">
                {heading}
              </HeadingTag>
            )}
            {subHeading && (
              <h5 className="font-semibold mb-5 text-center text-white">
                {subHeading}
              </h5>
            )}
            {content && (
              <div className="text-center mb-5 text-white">
                {ReactHtmlParser(content)}
              </div>
            )}
            {link?.title && link?.url && (
              <div className="text-center">
                <a
                  href={link.url}
                  target={link.target}
                  className="mt-8 mobile:mt-6 min-w-[110px] font-semibold px-4 py-3 border border-[#ddd] text-sm_fs leading-[20px] rounded-[4px] inline-block text-black bg-white hover:bg-secondarycolor hover:text-white"
                >
                  {link.title}
                </a>
              </div>
            )}
          </div>
          {enterFormShortcode && (
            <div className="form-sec max-w-[800px] tablet:max-w-[85%] mobile:max-w-[90%] mx-auto p-8 mobile-l:px-4 mobile-l:py-6 bg-white rounded-[10px] overflow-hidden">
              <div dangerouslySetInnerHTML={{ __html: enterFormShortcode }} />
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default LetsTalkFormSection;
