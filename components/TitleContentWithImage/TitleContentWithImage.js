import { useRouter } from "next/router";
import Link from "next/link";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";

const TitleContentWithImage = ({ sectionData }) => {

  if (!sectionData) {
    return null;
  }

  const { title, rightContent, leftContent, link, image } = sectionData;

  return (
    <article
      className="py-16 desktop_min:py-12 tablet:py-12 mobile:py-10 desktop_large:px-3 mobile:px-3 title-content-with-image"
      style={{
        backgroundImage:
          "linear-gradient(#f7f7f7 .76%,rgba(248,248,248,.74) 26.46%,rgba(251,251,251,.6) 55.6%,rgba(255,255,255,.53125) 83.01%,rgba(255,255,255,0) 83.01%)",
      }}
    >
      <div className="container px-4">
        <h2 className="text-center mb-8 desktop_min:mb-4 mobile:mb-4 text-xl01_fs font-SegoeUI font-bold text-primarybgcolor desktop_min:text-x39_fs mobile:text-36_fs">
          {title}
        </h2>
        <div className="flex flex-wrap max-w-[1150px] tablet:max-w-full mx-auto content">
          <div className="w-[50%] tablet:w-full px-4 tablet:px-0">
            <div className="font-SegoeUI text-bodyfontcolor text-sm_fs" dangerouslySetInnerHTML={{ __html: rightContent }} />
          </div>
          <div className="w-[50%] tablet:w-full px-4 tablet:px-0">
            <div className="font-SegoeUI text-bodyfontcolor text-sm_fs" dangerouslySetInnerHTML={{ __html: leftContent }} />
          </div>
        </div>
        {link && (
          <div className="mx-auto text-center flex items-center justify-center gap-2 mobile:mt-3 mobile:flex-wrap">
            <a
              href={link.url}
              className="button_sec border mt-4"
              target={link.target}
            >
              {link.title}
            </a>
          </div>
        )}
        {image?.node?.mediaItemUrl && (
          <div className="mt-14 mobile:mt-6">
            <img src={image.node.mediaItemUrl} alt={image.node.altText || 'Image'} />
          </div>
        )}
      </div>
    </article>
  );
};

export default TitleContentWithImage;
