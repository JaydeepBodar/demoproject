import React, { useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import $ from 'jquery';
import { ReactHtmlParser } from 'react-html-parser';

const PartnerSection = ({ partnerSection }) => {
  if (!partnerSection) {
    return null;
  }

  const {
    sectionTitle,
    partnerLogos,
    showButton,
    button,
  } = partnerSection;

  useEffect(() => {
    const initializeSlick = async () => {
      $(document).ready(() => {
        const $slider = $('.partner-logo');
        if ($slider.length > 0 && !$slider.hasClass('slick-initialized')) {
          $slider.slick({
            dots: false,
            autoplay: true,
            infinite: false,
            speed: 100,
            slidesToShow: 6,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 1250,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4,
                }
              },
              {
                breakpoint: 989,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3
                }
              },
              {
                breakpoint: 767,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 479,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          });
        } else {
          console.error('No element found with class .partner-logo or already initialized');
        }
      });
    };

    // Ensure this runs only on the client side
    if (typeof window !== 'undefined') {
      initializeSlick();
    }

    // Cleanup to avoid multiple initializations
    return () => {
      const $slider = $('.partner-logo');
      if ($slider.hasClass('slick-initialized')) {
        $slider.slick('unslick');
      }
    };
  }, [partnerSection]);

  return (
    <article className="py-5 tablet:py-16 mobile:py-14  mobile:px-0 mobile:pt-2.5 overflow-hidden">
      <div className="container px-4 max-w-full">
        <h2 className="mt-12 text-center mobile:mt-0 mb-9 mobile:mb-0">{sectionTitle}</h2>
        <div className="partner-logo flex flex-wrap">
          {partnerLogos.nodes.map((logo, index) => (
            <div key={index} className="relative w-1/4 px-4 tablet:w-1/3 mobile:w-1/2 mobile-small:w-full mb-12 tablet:mb-6 mobile:mb-0">
              <div className="relative overflow-hidden border border-[#00000029] flex flex-wrap items-center justify-center min-h-[170px] h-[170px]  mobile:h-[150px] mobile:min-h-[150px] px-9 desktop_min:px-5 desktop-smalll:px-7 py-5 before:content-[''] before:absolute before:border-x-2 before:border-secondarycolor before:w-full before:h-0 before:top-1/2 before:left-0 before:right-0 before:z-z1 before:transition before:duration-500 before:translate-y-1/2 hover:before:h-full hover:before:top-0 hover:before:translate-y-0 after:content-[''] after:absolute after:border-y-2 after:border-secondarycolor after:w-0 after:h-full after:top-0 after:left-50 after:right-0 after:z-z1 after:transition after:duration-500 after:-translate-x-1/2 hover:after:w-full hover:after:left-0 hover:after:translate-x-0">
                <img
                  src={logo.mediaItemUrl}
                  alt={logo.altText}
                  className="max-w-[180px] tablet:max-w-[150px] mobile:max-w-[140px] object-contain h-full w-full"
                />
              </div>
            </div>
          ))}
        </div>
        {showButton && button && button.url && (
          <div className="flex items-center justify-center gap-2 mx-auto text-center mobile:mt-3 mobile:flex-wrap">
            <a href={button.url} className="button_sec" target={button.target}>
              {button.title}
            </a>
          </div>
        )}
      </div>
    </article>
  );
};

export default PartnerSection;
