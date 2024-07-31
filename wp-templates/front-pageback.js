import { gql } from '@apollo/client';
import * as MENUS from '../constants/menus';
import { BlogInfoFragment } from '../fragments/GeneralSettings';
import {
  Header,
  Footer,
  Main,
  Container,
  ContentWrapper,
  EntryHeader,
  FeaturedImage,
  SEO,
} from '../components';
import BannerSection from '../components/BannerSection/BannerSection';
import CaseStudySection from '../components/CaseStudySection/CaseStudySection';
import HowItWorksSection from '../components/HowItWorksSection/HowItWorksSection';
import NavigationMenu from '../components/NavigationMenu/NavigationMenu';

export default function Component(props) {
  // Loading state for previews
  if (props.loading) {
    return <>Loading...</>;
  }

  const { title: siteTitle, description: siteDescription } = props?.data?.generalSettings;
  const primaryMenu = props?.data?.headerMenuItems?.nodes ?? [];
  const footerMenu = props?.data?.footerMenuItems?.nodes ?? [];
  const { title, content, featuredImage, editorBlocks } = props?.data?.page ?? { title: '' };


  return (
    <>
      <SEO
        title={siteTitle}
        description={siteDescription}
        imageUrl={featuredImage?.node?.sourceUrl}
      />
      <Header
        title={siteTitle}
        description={siteDescription}
        menuItems={primaryMenu}
      />
      <Main>
        <>
          <Container>
            {editorBlocks?.map((block, index) => {
              switch (block.__typename) {
                case 'AcfBannerSection' :
                  return <BannerSection key={index} bannerSection={block.bannerSection} />
                case 'AcfCaseStudySection':
                  return <CaseStudySection key={index} caseStudySection={block.caseStudySection} />;
                case 'AcfHowItWorksSection':
                  return <HowItWorksSection key={index} sectionData={block.howItWorksSection} />;
                default:
                  return null;
              }
            })}
            <ContentWrapper content={editorBlocks} />
          </Container>
        </>
      </Main>
      <Footer title={siteTitle} menuItems={footerMenu} />
    </>
  );
}

Component.variables = ({ databaseId }, ctx) => {
  return {
    databaseId,
    headerLocation: MENUS.PRIMARY_LOCATION,
    footerLocation: MENUS.FOOTER_LOCATION,
    asPreview: ctx?.asPreview,
  };
};

Component.query = gql`
  ${BlogInfoFragment}
  ${NavigationMenu.fragments.entry}
  ${FeaturedImage.fragments.entry}
  query GetPageData(
    $databaseId: ID!
    $headerLocation: MenuLocationEnum
    $footerLocation: MenuLocationEnum
    $asPreview: Boolean = false
  ) {
    page(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
      title
      content
      ...FeaturedImageFragment
      editorBlocks {
        __typename
        ... on AcfBannerSection {
          bannerSection {
            bannerHeading
            bannerHeadingTag
            leftBannerContent
            rightBannerContent
            bannerImage {
              node {
                altText
                mediaItemUrl
              }
            }
            bannerLink {
              links {
                target
                title
                url
              }
            }
          }
        }
        ... on AcfCaseStudySection {
          caseStudySection {
            caseStudySelection {
              edges {
                node {
                  ... on CaseStudy {
                    id
                    title
                    caseStudyPost {
                      caseStudyContent
                    }
                    featuredImage {
                      node {
                        altText
                        mediaItemUrl
                      }
                    }
                    link
                    countries {
                      edges {
                        node {
                          name
                        }
                      }
                    }
                    industries {
                      edges {
                        node {
                          name
                        }
                      }
                    }
                    technologies {
                      edges {
                        node {
                          name
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        ... on AcfHowItWorksSection {
          howItWorksSection {
            howItWorksHeading
            howItWorksHeadingTag
            howItWorksContent
            howItWorksBackgroundImage {
              node {
                altText
                mediaItemUrl
              }
            }
            howItWorksLink {
              target
              title
              url
            }
            howItWorksServices {
              serviceContent
              serviceHeading
              serviceUrl
            }
          }
        }
      }
    }
    generalSettings {
      ...BlogInfoFragment
    }
    footerMenuItems: menuItems(where: { location: $footerLocation }) {
      nodes {
        ...NavigationMenuItemFragment
      }
    }
    headerMenuItems: menuItems(where: { location: $headerLocation }) {
      nodes {
        ...NavigationMenuItemFragment
      }
    }
  }
`;
