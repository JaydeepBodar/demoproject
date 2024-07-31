import React from 'react';
import classNames from 'classnames/bind';
import styles from './BannerSection.module.scss';
  
let cx = classNames.bind(styles);

const BannerSection = ({ bannerHeading, bannerHeadingTag: HeadingTag, leftBannerContent, rightBannerContent, bannerImage, bannerLink }) => (
  <article
    className={cx('component')}
    style={{ backgroundImage: bannerImage?.node?.mediaItemUrl ? `url(${bannerImage.node.mediaItemUrl})` : 'none' }}
  >
    <div className="container mx-auto px-4">
      <div className="max-w-[73%] desktop_min:max-w-[84%] mobile:max-w-[100%] mx-auto desktop-smalll:max-w-[98%] tablet:max-w-[98%]">
        {bannerHeading && (
          <HeadingTag className="text-center mx-auto mb-14 desktop_min:mb-10 mobile:mb-4 font-bold text-primarybgcolor text-xl5_fs desktop_min:text-[57px] tablet:text-[57px] desktop_min:leading-[67px] tablet:leading-[67px] mobile:text-[40px] mobile:leading-[50px]  mobile-small:text-[30px] mobile-small:leading-[37px] mobile-small:mb-4 mobile:text-3xl font-SegoeUI">
            {bannerHeading}
          </HeadingTag>
        )}
        <div className="flex flex-wrap justify-between gap-10 mobile:gap-5 mobile-small:gap-3 mobile:text-center">
          <div className="max-w-[50%] mobile:max-w-[100%]">
            <p className="font-SegoeUI font-semibold text-2xl tablet:leading-[34px] mobile:leading-[34px] text-bodyfontcolor mobile-small:text-xl mobile-small:leading-[32px]">
              {leftBannerContent && leftBannerContent.replace(/<\/?p>/g, '')}
            </p>
          </div>
          <div className="max-w-[40%] mobile:max-w-[100%]">
            <p className="text-base_fs text-bodyfontcolor font-SegoeUI leading-1 mobile:text-sm_fs mobile:leading-24">
              {rightBannerContent && rightBannerContent.replace(/<\/?p>/g, '')}
            </p>
          </div>
        </div>
        {bannerLink && bannerLink.length > 0 && (
          <div className="mx-auto mt-20 tablet-large:mt-12 text-center flex items-center justify-center gap-2 mobile:mt-5 mobile:flex-wrap">
            {bannerLink.map((link, index) => (
              <a key={index} href={link.links.url} className={`${index % 2 === 0 ? 'bg-secondarycolor font-SegoeUI text-white px-10 mobile:px-6  py-3 hover:bg-transparent hover:text-secondarycolor border border-secondarycolor' : 'button_pri bg-primarybgcolor text-white px-10 mobile:px-6 py-3 hover:bg-transparent hover:text-primarybgcolor border border-primarybgcolor'}`} target={link.links.target}>
                {link.links.title}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  </article>
);

export default BannerSection;
