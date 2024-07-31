import { gql } from '@apollo/client';
import * as MENUS from '../constants/menus';
import { BlogInfoFragment } from '../fragments/GeneralSettings';
import NavigationMenu from '../components/NavigationMenu/NavigationMenu';
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
// Import Components
import BannerSection from '../components/BannerSection/BannerSection';
import PartnerSection from '../components/PartnerSection/PartnerSection';
import CaseStudySection from '../components/CaseStudySection/CaseStudySection';
import HowItWorksSection from '../components/HowItWorksSection/HowItWorksSection';
import ContactUsBanner from '../components/ContactUsBanner/ContactUsBanner';
import TitleContentWithImage from '../components/TitleContentWithImage/TitleContentWithImage';
import ClutchReviewSection from '../components/ClutchReviewSection/ClutchReviewSection';
import FAQSection from '../components/FAQSection/FAQSection';
import WordpressDevelopmentSection from '../components/WordpressDevelopmentSection/WordpressDevelopmentSection';
import InnerBannerSection from '../components/InnerBannerSection/InnerBannerSection';
import IconAndTitleListSection from '../components/IconAndTitleListSection/IconAndTitleListSection';
import WordpressRetainersServices from '../components/WordpressRetainersServices/WordpressRetainersServices';
import WhyWorkWithUsSection from '../components/WhyWorkWithUsSection/WhyWorkWithUsSection';
import TitleMediaContentRepeater from '../components/TitleMediaContentRepeater/TitleMediaContentRepeater';
import LetsTalkFormSection from '../components/LetsTalkFormSection/LetsTalkFormSection';
import PlanOrPackageSection from '../components/PlanOrPackageSection/PlanOrPackageSection';
import TitleContentWithCenteredIcons from '../components/TitleContentWithCenteredIcons/TitleContentWithCenteredIcons';
import TitleAndContent from '../components/TitleAndContent/TitleAndContent';
import RetainerExplainedSection from '../components/RetainerExplainedSection/RetainerExplainedSection';


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
                  return <BannerSection key={index} bannerSection={block.bannerSection} />;
                case 'AcfPartnerSection' :
                  return <PartnerSection key={index} partnerSection={block.partnerSection} />
                case 'AcfCaseStudySection':
                  return <CaseStudySection key={index} caseStudySection={block.caseStudySection} />;
                case 'AcfHowItWorksSection':
                  return <HowItWorksSection key={index} sectionData={block.howItWorksSection} />;
                case 'AcfContactUsBanner':
                  return <ContactUsBanner key={index} bannerBlock={block} />;
                case 'AcfTitleContentWithImage':
                  return <TitleContentWithImage key={index} sectionData={block.titleContentWithImage} />;
                case 'AcfClutchReviewSection':
                  return <ClutchReviewSection key={index} sectionData={block.clutchReviewSection} />;
                case 'AcfFaqSection':
                  return <FAQSection key={index} sectionData={block.fAQSection} />;
                case 'AcfWordpressDevelopmentSection':
                  return <WordpressDevelopmentSection key={index} sectionData={block.wordpressDevelopmentSection} />;
                case 'AcfWordpressRetainersServices':
                  return <WordpressRetainersServices key={index} servicesData={block.wordpressRetainersServices} />;
                case 'AcfInnerBannerSection':
                  return <InnerBannerSection key={index} innerBannerSection={block.innerBannerSection} />;
                case 'AcfTitleMediaContentRepeater':
                  return <TitleMediaContentRepeater key={index} titleMediaContentRepeater={block.titleMediaContentRepeater} />;
                case 'AcfIconAndTitleListSection':
                  return <IconAndTitleListSection key={index} iconsAndTitleListSection={block.iconsAndTitleListSection} />;
                case 'AcfLetsTalkFormSection' :
                  return <LetsTalkFormSection key={index} letsTalkFormSection={block.letsTalkFormSection} />;
                case 'AcfPlanOrPackageSection':
                  return <PlanOrPackageSection key={index} planOrPackageSection={block.planOrPackageSection} />;
                case 'AcfTitleContentWithCenteredIcons':
                  return <TitleContentWithCenteredIcons key={index} titleContentWithCenteredIcons={block.titleContentWithCenteredIcons} />;
                case 'AcfTitleAndContent':
                  return <TitleAndContent key={index} titleAndContent={block.titleAndContent} />;
                case 'AcfRetainerExplainedSection':
                  return <RetainerExplainedSection key={index} retainerExplainedSection={block.retainerExplainedSection} />;
                case 'AcfWhyWorkWithUsSection':
                  return <WhyWorkWithUsSection key={index} whyWorkWithUs={block.whyWorkWithUs} />;
                default:
                  return null;
              }
            })}
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
        ... on AcfPartnerSection {
          partnerSection {
            sectionTitle
            displayType
            partnerLogos(first: 100) {
              nodes {
                altText
                mediaItemUrl
              }
            }
            showButton
            button {
              target
              title
              url
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
        ... on AcfContactUsBanner {
              contactUsBanner {
                backgroundImage {
                  node {
                    altText
                    mediaItemUrl
                  }
                }
                cubContent
                cubLink {
                  target
                  title
                  url
                }
              }
            }
        ... on AcfTitleContentWithImage {
            titleContentWithImage {
              title
              rightContent
              leftContent
              link {
                target
                title
                url
              }
              image {
                node {
                  altText
                  mediaItemUrl
                }
              }
            }
          }
        ... on AcfClutchReviewSection {
            clutchReviewSection {
              backgroundColor
              heading
              headingTag
              subHeading
              content
              reviewScript
              enterFormShortcode
              button {
                target
                title
                url
              }
            }
          }
        ... on AcfFaqSection {
            fAQSection {
              faqHeading
              faqHeadingTag
              description
              subHeading
              faqLink {
                target
                title
                url
              }
              frequentlyAskedQuestions {
                question
                answer
              }
            }
          }
        ... on AcfWordpressDevelopmentSection {
            wordpressDevelopmentSection {
              wdHeading
              wdHeadingTag
              wordpressServices {
                wdDescription
                wdImage {
                  node {
                    altText
                    mediaItemUrl
                  }
                }
                wdNumber
              }
            }
          }
        ... on AcfWordpressRetainersServices {
          wordpressRetainersServices {
            cpvHeading
            cpvHeadingTag
            description
            designStyle
            purposeAndValues {
              pvLogo {
                node {
                  mediaItemUrl
                  altText
                }
              }
              pvTitle
              pvContent
              services {
                service
              }
            }
          }
        }
        ... on AcfTitleContentWithCenteredIcons {
          titleContentWithCenteredIcons {
            heading
            rightSideContent
            leftSideContent
            link {
              target
              title
              url
            }
            centeredIcons {
              icon {
                node {
                  altText
                  mediaItemUrl
                }
              }
            }
          }
        }
        ... on AcfTitleMediaContentRepeater {
          titleMediaContentRepeater {
            heading
            titleContentRepeater {
              content
              title
              subTitle
              media {
                mediaType
                image {
                  node {
                    altText
                    mediaItemUrl
                  }
                }
                video {
                  addUrl
                  addVideoFrom
                  selectVideo {
                    node {
                      altText
                      mediaItemUrl
                    }
                  }
                }
              }
              link {
              target
              title
              url
            }
            }
          }
        }
        ... on AcfPlanOrPackageSection {
          planOrPackageSection {
            heightLightPlanText
            heightLightPlanName
            planOrPackageHeading
            planOrPackageHeadingTag
            packagesSection {
              planHours
              planHoursMonthTitle
            }
            planLink {
              target
              title
              url
            }
          }
        }
        ... on AcfInnerBannerSection {
          innerBannerSection {
            innerBackgroundImage {
              node {
                altText
                mediaItemUrl
              }
            }
            innerFrontImage {
              node {
                altText
                mediaItemUrl
              }
            }
            innerFrontImageTwo {
              node {
                altText
                mediaItemUrl
              }
            }
            innerHeading
            innerHeadingTag
            innerContent
            innerLink {
              target
              title
              url
            }
          }
        }
        ... on AcfLetsTalkFormSection {
          letsTalkFormSection {
            heading
            subHeading
            headingTag
            content
            link {
              target
              title
              url
            }
            enterFormShortcode
          }
        }
        ... on AcfTitleAndContent {
          titleAndContent {
            description
            heading
            leftSideContent {
              content
              subTitle
              title
            }
            link {
              target
              title
              url
            }
            rightSideContent {
              subTitle
              title
              content
            }
            subHeading
          }
        }
        ... on AcfRetainerExplainedSection {
          retainerExplainedSection {
            title {
              afterHighlightedWord
              beforeHighlightedWord
              highlightedWord
              titleTag
            }
            description
            contentBox {
              icon {
                node {
                  altText
                  mediaItemUrl
                }
              }
              title
              subTitle
              content
            }
          }
        }
        ... on AcfIconAndTitleListSection {
          iconsAndTitleListSection {
            heading
            headingTag
            designStyle
            subHeading
            link {
              target
              title
              url
            }
            iconsAndTitleList {
              title
              content
              image {
                node {
                  altText
                  mediaItemUrl
                }
              }
            }
          }
        }
        ... on AcfWhyWorkWithUsSection {
          whyWorkWithUs {
            title
            description
            flexibleLayouts {
              ... on WhyWorkWithUsFlexibleLayoutsTeamSectionLayout {
                title
                description
                content
                image {
                  node {
                    mediaItemUrl
                    altText
                  }
                }
              }
              ... on WhyWorkWithUsFlexibleLayoutsLeftContentRightImageLayout {
                title
                highlightedDescription
                beforeImageContent
                afterImageContent
                rightSideImage {
                  node {
                    mediaItemUrl
                    altText
                  }
                }
                buttonGroup {
                  firstButton {
                    url
                    target
                    title
                  }
                  secondButton {
                    url
                    target
                    title
                  }
                }
              }
              ... on WhyWorkWithUsFlexibleLayoutsWorkProcessSectionLayout {
                title
                subTitle
                leftContentBox {
                  title
                  subTitle
                  content
                }
                rightContentBox {
                  title
                  subTitle
                  content
                }
              }
              ... on WhyWorkWithUsFlexibleLayoutsContentWithNewspaperLayoutLayout {
                title
                highlightedDescription
                content
              }
              ... on WhyWorkWithUsFlexibleLayoutsContentWithNewsletterBoxLayout {
                image {
                  node {
                    altText
                    mediaItemUrl
                  }
                }
                title
                subTitle
                leftSideContent
                rightSideContent
                rightSideTitle
                newsletter {
                  title
                  description
                  button {
                    url
                    target
                    title
                  }
                }
              }
            }
          }
        }
      }
    }
    wpProSettings {
      wpProSettingsNew {
        clutchReviewScript
        googleReviewScript
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
