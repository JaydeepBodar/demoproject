import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useQuery, gql } from '@apollo/client';

const WordpressDevelopmentSection = ({sectionData}) => {
  if (!sectionData || !sectionData.wordpressServices) {
    return <p>No data available</p>;
  }

  const { wordpressServices } = sectionData;

  return (
    <article className="px-3 pt-20 pb-20 bg-secondarycolor desktop_min:pt-16 desktop_min:pb-16 tablet:pt-12 tablet:pb-4 mobile:pt-10 mobile:pb-10">
      <div className="container text-center text-white px-4">
        <div className="flex flex-wrap justify-center wordpress-development sitems-top">
          {wordpressServices.map((service, index) => (
            <div
              key={index}
              className="w-1/6 tablet:w-1/2 mobile:w-full tablet:mb-14 mobile:mb-8 mobile:pb-8 px-5 border-r mobile:border-r-transparent  mobile:border-b border-bdr_color/[40%] last:border-transparent last:pb-0 last:mb-0 tablet:even:border-r-transparent"
            >
              <div className="mb-6 mobile:mb-4 h-[51px] w-[80px] mx-auto">
                <img
                  decoding="async"
                  src={service.wdImage.node.mediaItemUrl}
                  alt={service.wdImage.node.altText}
                  className="mx-auto"
                />
              </div>
              <div className="mb-2 font-bold num-counter text-xl01_fs font-SegoeUI mobile:mb-0">
                {service.wdNumber}+
              </div>
              <p className="text-white text-base_fs font-SegoeUI">{service.wdDescription}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default WordpressDevelopmentSection;
