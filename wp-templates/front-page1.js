import { useQuery, gql } from '@apollo/client';
import * as MENUS from '../constants/menus';
import { BlogInfoFragment } from '../fragments/GeneralSettings';
import {
  Header,
  Footer,
  Main,
  Container,
  NavigationMenu,
  Hero,
  SEO,
} from '../components';

import BannerSection from '../components/BannerSection/BannerSection';
import PartnerSection from '../components/PartnerSection/PartnerSection';
import TitleContentWithImage from '../components/TitleContentWithImage/TitleContentWithImage';
import HowItWorksSection from '../components/HowItWorksSection/HowItWorksSection';
import ContactUsBanner from '../components/ContactUsBanner/ContactUsBanner';
import ClutchReviewSection from '../components/ClutchReviewSection/ClutchReviewSection';
import CaseStudySection from '../components/CaseStudySection/CaseStudySection';
import FAQSection from '../components/FAQSection/FAQSection';
import WordpressDevelopmentSection from '../components/WordpressDevelopmentSection/WordpressDevelopmentSection';



export default function Component() {
  const { data } = useQuery(Component.query, {
    variables: Component.variables(),
  });

  const { title: siteTitle, description: siteDescription } =
    data?.generalSettings;
  const primaryMenu = data?.headerMenuItems?.nodes ?? [];
  const footerMenu = data?.footerMenuItems?.nodes ?? [];

  return (
    <>
      <SEO title={siteTitle} description={siteDescription} />
      <Header
        title={siteTitle}
        description={siteDescription}
        menuItems={primaryMenu}
      />
      <Main>

      <BannerSection />
      <PartnerSection />
      <TitleContentWithImage />
      <HowItWorksSection />
      <ContactUsBanner />
      <ClutchReviewSection />
      <CaseStudySection />
      <FAQSection />
      <WordpressDevelopmentSection />


      <article className="bg-[#07142a] h-660 pt-24 pb-24 desktop_large:pt-16 desktop_large:pb-16 tablet:pt-16 tablet:pb-16 mobile:py-10 desktop_large:h-auto"
          style={{
            backgroundImage:
              "url(https://wppro.agency/wp-content/uploads/2023/10/image-10.svg)"
          }}
        >
          <div className="container w-[87%] desktop:w-[100%] flex flex-wrap items-center h-full overflow-hidden px-3">
            <div className="w-[50%] mobile:w-[100%] pl-14 desktop_large:pl-4 mobile:px-2 mobile:text-center mobile:pt-0 tablet:pb-14 mobile-small:pb-8">
              <h1 className="mb-6 text-white tablet:mb-3 text-xl01_fs font-bold desktop_min:text-x39_fs mobile:text-36_fs font-SegoeUI">About Us</h1>
              <p className="text-secbodyfontcolor text-base_fs leading-27 font-SegoeUI mobile:text-sm_fs mobile:leading-27">
                As the best WordPress retainer agency, our experts make sure that there
                is no glitch in your website and that it is running securely and
                perfectly. By proactively maintaining and optimizing your site, we keep
                it well-structured and highly performance-optimized.
              </p>
              <a
                href="/wppro/contact/"
                className="mt-10 inline-block tablet:mt-6 bg-secondarycolor font-SegoeUI text-white px-10 mobile:px-6  py-3 hover:bg-transparent hover:text-secondarycolor border border-secondarycolor"
                target="_self"
              >
                Contact Us
              </a>
            </div>
            <div className="w-[50%] h-full mobile:w-[90%] mobile-small:w-[100%] tablet:mx-auto pr-14 desktop:pl-4 desktop_large:pr-4 pl-12 mobile:pl-0 mobile:pr-0 relative flex items-center ">
              <div className="h-full ml-auto w-img_wid desktop-smalll:w-full flex flex-wrap items-center">
                <img
                  data-lazyloaded={1}
                  src="https://wppro.agency/wp-content/uploads/2023/11/02.svg"
                  fetchpriority="high"
                  decoding="async"
                  data-src="https://wppro.agency/wp-content/uploads/2023/11/02.svg"
                  width={721}
                  height={721}
                  alt="WordPress Web Development Agency"
                  className="ml-auto desktop-smalll:mx-auto relative z-z1 mobile:max-w-[300px] mobile-small:mx-auto entered litespeed-loaded"
                  data-ll-status="loaded"
                />               
              </div>
            </div>
          </div>
        </article>

        <article className="pt-[60px] pb-[60px] tablet:py-16 mobile:pt-12 mobile:pb-12 tablet:pb-16 px-3 mobile:px-5"
          style={{ backgroundColor: "#f5f7fa" }}
        >
          <div className="max-w-[1500px] w-[82%] desktop_large:w-[89%] desktop:w-[100%] mx-auto flex flex-wrap justify-between">
            <div className="w-[75%] desktop:w-[70%]  tablet:w-[100%] tablet:pr-0 pr-24 desktop-smalll:pr-4 relative">
              <div className="mobile:text-center">
                <h2 className="mb-4 tablet:mb-2 mobile:mb-3 text-xl01_fs font-bold text-primarybgcolor desktop_min:text-x39_fs mobile:text-36_fs">
                  We have Excellent Reviews on Clutch as the Best B2B Companies
                </h2>
                <p className="text-bodyfontcolor text-base_fs leading-27 font-SegoeUI mobile:text-sm_fs mobile:leading-27">
                  Our exceptional reputation on Clutch, where we consistently rank as
                  one of the best B2B companies, is a testament to our unwavering
                  commitment to delivering top-notch services. With numerous glowing
                  reviews from satisfied clients, we take pride in our dedication to
                  excellence and client satisfaction.
                </p>
              </div>
            </div>
            <div className="w-[25%] desktop:w-[30%] tablet:w-[100%] tablet:pt-8 mobile:pt-5">
              <div className="flex items-center justify-center px-7 ">
                <p> </p>
                <div
                  className="relative  mx-auto"
                  data-url="https://widget.clutch.co"
                  data-widget-type={3}
                  data-height={320}
                  data-nofollow="true"
                  data-expandifr="true"
                  data-scale={100}
                  data-reviews="2152906,2108588,2062828,2062273,2060495"
                  data-clutchcompany-id={1989175}
                >
                  <iframe
                    id="iframe-0.8065419155547819"
                    width="100%"
                    src="https://widget.clutch.co/widgets/get/3?ref_domain=wppro.agency&uid=1989175&rel_nofollow=true&reviews=2152906%2C2108588%2C2062828%2C2062273%2C2060495&ref_path=/about/"
                    height="320px"
                    scrolling="no"
                    style={{
                      border: "none",
                      overflow: "hidden",
                      display: "block",
                      height: 354
                    }}
                    title="[iFrameSizer]iframe-0.8065419155547819:0:0:mouseleave:969:9133"
                  />
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className="pt-16 desktop_min:pt-12 tablet:pt-8 mobile:pt-8 ">
            <h2 className="text-center mobile:mb-[5px] px-5 text-xl01_fs font-bold text-primarybgcolor desktop_min:text-x39_fs mobile:text-36_fs mb-2">Why Work with Us?</h2>
            <div className="px-5">
              <p className="text-center text-20_fs text-bodyfontcolor mobile:text-base_fs">
                While assisting ongoing clients, find out more about our work culture and
                policies.
              </p>
            </div>
            <div className="px-3 flex flex-wrap items-start max-w-[1150px] mx-auto mt-[30px] mobile:mt-[20px]">
              <div className="w-[33%] tablet:w-full px-4 tablet:mb-7 heiglighted">
                <div className="bg-secondarycolor mobile:text-center p-7 mobile:p-6">
                  <h4 className="text-white text-xl05 mb-4 font-bold font-SegoeUI">1. We are a team.</h4>
                  <p className="text-white text-xl_fs leading-40 italic font-Georgia mobile:text-base_fs mobile:leading-30">
                    We’re a team. A big one. This consists of entrepreneurs, challenge
                    managers, QAs, content writers, salespeople, SEO specialists,
                    designers, and exceptional web developers. This ensures that we can
                    not simply create a website with a quiet layout – even though our
                    designs are extraordinary.
                  </p>
                </div>
              </div>
              <div
                className="w-[66%] tablet:w-full mobile:w-full columns-2 mobile:columns-1 px-4 gap-x-20 mobile:gap-x-0"
                style={{
                  MozColumnRule: "1px dashed #d3d3d3",
                  columnRule: "1px dashed #d3d3d3"
                }}
              >
                <p className="text-sm_fs leading-[29px] text-justify mobile:text-center my-4 mt-4 font-SegoeUI">
                  <img
                    data-lazyloaded={1}
                    src="https://wppro.agency/wp-content/uploads/2023/10/group-people-working-out-business-plan-office.jpg"
                    width={810}
                    height={340}
                    decoding="async"
                    data-src="https://wppro.agency/wp-content/uploads/2023/10/group-people-working-out-business-plan-office.jpg"
                    alt="image"
                    data-ll-status="loaded"
                    className="entered litespeed-loaded"
                  />
                  <noscript>
                    &lt;img width="810" height="340" decoding="async"
                    src="https://wppro.agency/wp-content/uploads/2023/10/group-people-working-out-business-plan-office.jpg"
                    alt="image"&gt;
                  </noscript>
                </p>
                <p className="text-sm_fs text-bodyfontcolor leading-30 mt-5 text-justify font-SegoeUI mobile:text-center">
                  We will completely overhaul your company, do market research, improve
                  your content, and provide the finest long-term business answer.
                  <br />
                  WP Pro chooses staff members based on their strengths, communication
                  style, background, work ethics, and skill set. Each of us is matched to
                  the ideal location, fitting together like a jigsaw. We are unemployed,
                  we create roles where individuals may excel and take pleasure in their
                  work. We can be certain that everyone is putting their all into their
                  present assignment in this way.
                  <br />
                  You don’t merely hire a developer when you work with us—though we may
                  rent you one for little tasks. You appoint an entire external staff that
                  functions flawlessly together and manages every facet of your online
                  presence. We save you a tonne of time and money in this way when it
                  comes to hiring, managing, project management, overhead communication,
                  onboarding, creative, security, marketing, and business research.
                  <br />
                  We are your trustworthy business partner—not an outsourcing firm.
                </p>
              </div>
            </div>
            <div className="py-14 pb-14 mt-20 bg-light_black desktop_min:pt-12 desktop_min:pb-12 tablet:pt-12 tablet:pb-12 mobile:py-8 mobile:pb-8 desktop_min:mt-20 tablet:mt-12 mobile:mt-8">
              <h4 className="text-center text-white font-SegoeUI font-bold text-xl05 mb-2">2.Our Work Process</h4>
              <p className="text-center text-white text-20_fs font-SegoeUI">
                WP Pro is all made of superstars 😉
              </p>
              <div className="flex flex-wrap max-w-[1150px] mobile:mt-[20px] mx-auto mt-[30px]">
                <div className="w-[50%] mobile:w-full px-4 mobile:mb-7 mobile:last:mb-0 mobile:text-center left-block">
                  <h3 className="text-[32px] mobile:text-[24px] mobile:leading-[30px] text-white font-SegoeUI font-bold">
                    Development in a Timely Manner
                  </h3>
                  <p className="text-[20px] mobile:text-[18px] leading-[27px] mobile:leading-[24px] text-secbodyfontcolor mt-[20px] desktop_large:mt-[15px] desktop_large:mb-[25px] mobile:mt-[10px] mb-[40px] mobile:mb-[10px] font-SegoeUI">
                    When it comes to beginning a project, we rely on an established,
                    professional process that has succeeded throughout the years.
                  </p>
                  <p className="text-white font-SegoeUI">
                    Your vision, objectives, and needs will be discussed during our
                    initial business consultation session. Together, we will jot down
                    ideas and create the overall schedule. Next, based on best practices
                    and quality standards, we will present you a specification and a few
                    potential solutions, along with periods and ballpark figures, so you
                    may discuss them and ask any questions you have.
                  </p>
                  <p className="text-white font-SegoeUI">
                    The next stage will be to designate a project manager and a group of
                    experts who are most appropriate for your work. We will schedule the
                    procedure months in advance in order to save you time and enable
                    continuous development and iterations.
                  </p>
                </div>
                <div className="w-[50%] mobile:w-full px-4 mobile:mb-7 mobile:last:mb-0 mobile:text-center right-block">
                  <h3 className="text-[32px] mobile:text-[27px] text-white font-SegoeUI font-bold">
                    Managed Process
                  </h3>
                  <p className="text-[20px] mobile:text-[18px] leading-[27px] mobile:leading-[24px] text-secbodyfontcolor mt-[20px] mobile:mt-[10px] mb-[40px] mobile:mb-[10px] font-SegoeUI">
                    No more action is necessary on your part after the deadlines and
                    requirements have been established.
                  </p>
                  <p className="text-white font-SegoeUI">
                    Your project manager will provide you with a weekly report on the
                    project’s progress. Plans will be created, and we will handle all
                    internal digital tasks. You or your team don’t need to handle
                    anything.
                  </p>
                  <p className="text-white font-SegoeUI">
                    Your evaluations and feedback may be given whenever it’s convenient
                    for you, and you will have complete access to the most recent changes
                    as well as staging access to your website’s most recent version.
                    Reports on everything completed today will be straightforward and
                    concise, replacing planned calls, blocked meetings, and time-consuming
                    operational tasks.
                  </p>
                  <p className="text-white font-SegoeUI">It’s a joy to work with us.</p>
                </div>
              </div>
            </div>
            <div className="px-3 pt-20 desktop_min:pt-12 tablet:pt-16 mobile:pt-8 max-w-[1150px] mx-auto">
              <div
                className="columns-3 mobile:columns-1 px-4 gap-x-20 tablet:gap-x-10 mobile:gap-x-0 text-justify mobile:text-center border-b-2 border-black pb-[60px] desktop_large:pb-[48px] mobile:pb-[15px]"
                style={{
                  MozColumnRule: "1px dashed #d3d3d3",
                  columnRule: "1px dashed #d3d3d3"
                }}
              >
                <h2 className="text-[48px] desktop_large:text-[36px] tablet:text-[30px] mobile:text-center mobile:text-[25px] mobile:leading-[30px] text-black border-b-[2px] border-black text-left pb-3 mb-8 mobile:mb-4 font-SegoeUI font-bold leading-48">
                  3.Our Experience
                </h2>
                <div className="highlighted_description">
                  <p className="text-bodyfontcolor italic text-xl_fs text-left font-Georgia mobile:text-base_fs mobile:leading-27 mobile:text-center">
                    The business you select when in need of web development has a big
                    impact on the finalized output. You wouldn’t want to take any chances
                    since the individuals you recruit will have a big impact on the future
                    of your overall digital presence.
                  </p>
                </div>
                <div className="content mobile:mt-4">
                  <p className="font-SegoeUI text-bodyfontcolor">
                    Selecting WP Pro as a business partner entails having a group of
                    seasoned experts working for you. Our collective expertise in the IT
                    sector exceeds 18 years. We originate from the enterprise and have
                    experience in several business domains, ranging from creating
                    educational online platforms from the ground up to managing highly
                    trafficked media websites and creating customized SaaS solutions for
                    major industry players.
                    <br />
                    Because of our track record of producing superior technical and
                    business goods, our clients have chosen us as a long-term partner. Not
                    one-off initiatives, but dependable and scalable online systems are
                    what we construct. We want to help you expand and thrive in the
                    company while working hard to increase your return on investment.
                    <br />
                    As a well-known corporation, we are a fantastic team. We promise never
                    to overcharge you for unnecessary purchases or to make false claims.
                    For your company, we want to discover the best option. Our primary
                    goal is to cultivate enduring partnerships with our clients, and the
                    most effective approach to achieve this is by actively contributing to
                    the growth of your project in every possible way.
                  </p>
                </div>
              </div>
            </div>
            <div className="px-3 pt-20 desktop_min:pt-12 tablet:pt-16 mobile:pt-8 max-w-[1150px] mx-auto content_with_newspaper_layout">
              <div
                className="columns-3 mobile:columns-1 px-4 gap-x-20 tablet:gap-x-10 mobile:gap-x-0 text-justify mobile:text-center border-black pb-[60px] desktop_large:pb-[48px] mobile:pb-[15px]"
                style={{
                  MozColumnRule: "1px dashed #d3d3d3",
                  columnRule: "1px dashed #d3d3d3"
                }}
              >
                <h2 className="text-[48px] desktop_large:text-[36px] tablet:text-[30px] mobile:text-center mobile:text-[25px] mobile:leading-[30px] text-black border-b-[2px] border-black text-left pb-3 mb-8 mobile:mb-4 font-SegoeUI font-bold leading-48">
                  4.Our Department Technology
                </h2>
                <div className="highlighted_description">
                  <p className="text-bodyfontcolor italic text-xl_fs text-left font-Georgia mobile:text-base_fs mobile:leading-27 mobile:text-center">
                    Oh, we do love to brag about our tech skills! Our official
                    technologies are PHP, JavaScript, Magento, SQL, CSS, Laravel, and
                    Shopify.
                  </p>
                </div>
                <div className="content mt-4 text-bodyfontcolor font-SegoeUI">
                  <p>
                    Every major CMS available has been worked with by us, including Drupal
                    and Joomla, and we performed a fairly excellent job at it. Before
                    switching to WordPress as our primary platform for developing websites
                    in 2004, we worked as software engineers. Since then, we have advanced
                    significantly.
                    <br />
                    We take great pride in using WordPress to create spaceships.
                    <br />
                    In addition, we support the WordPress community by lending our
                    expertise and experience. Thanks to the collective work of our team,
                    millions of websites have been improved with over 45 fixes to the
                    WordPress core. In addition to creating a plethora of free themes,
                    plugins, and a CRM, we have also made significant contributions to
                    important WordPress plugins and tools.
                    <br />
                    Our expert developers within this dynamic unit are the driving force
                    behind our digital journey. With their unparalleled skills,
                    creativity, and dedication, they breathe life into our technological
                    visions, ensuring we stay at the forefront of the robust digital
                    marketplace.
                    <br />
                    We provide specialized solutions that are tailored to your company’s
                    requirements. We are not the type of WordPress “experts” that will
                    install fifty incoherent plugins and a readymade theme for you. We
                    construct everything specifically for you, either by handcrafting it
                    to fit your demands or carefully choosing it from an initial confirmed
                    list of tested options. We take security, speed, and design extremely
                    seriously.
                  </p>
                </div>
              </div>
            </div>
            <div className="px-3  border-t border-b border-[#c9c9c9] py-20 desktop_large:py-12 mobile:py-12  content_with_newsletter_box">
              <div className="flex flex-wrap items-start max-w-[1150px] mx-auto">
                <div className="w-[50%] mobile:w-full px-4">
                  <div>
                    <img
                      data-lazyloaded={1}
                      src="https://wppro.agency/wp-content/uploads/2023/10/rqOW50N-scaled.jpg"
                      width={2560}
                      height={1634}
                      decoding="async"
                      data-src="https://wppro.agency/wp-content/uploads/2023/10/rqOW50N-scaled.jpg"
                      alt="image"
                      data-ll-status="loaded"
                      className="entered litespeed-loaded"
                    />
                    <noscript>
                      &lt;img width="2560" height="1634" decoding="async"
                      src="https://wppro.agency/wp-content/uploads/2023/10/rqOW50N-scaled.jpg"
                      alt="image"&gt;
                    </noscript>
                  </div>
                  <div className="p-5 bg-white relative -mt-[100px] mobile:text-center tablet:-mt-[80px] mobile:-mt-[40px] mx-7 mobile:mx-4">
                    <h3 className="text-[32px] mobile:text-[24px] mobile:leading-[30px]">
                      5.You’ll save money and time with us.
                    </h3>
                    <div className="left_side_content">
                      <p>
                        Since we are a large firm, you will need to hire, train, and
                        oversee a large number of employees personally. We choose the best
                        candidate for each role, and because our staff is accustomed to
                        working together, there are no interpersonal or cultural issues
                        with new recruits or independent contractors.
                      </p>
                      <p>
                        The industry turnover rate is 1.5 years on average, and it may
                        take 6 to 9 months to attain maximum efficiency via onboarding.
                        Handling the entire hiring, HR, training, and other procedures
                        might impede your company’s growth and cost a lot of money,
                        endangering its future.
                      </p>
                      <p>
                        Being a full-stack digital firm, we take care of everything from
                        creative and development to SEO and SEM, saving you the extra
                        expense of maintaining several teams and looking for
                        subcontractors.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-[50%] mobile:w-full px-4 mobile:text-center right_side_content">
                  <h6>Entire Online Presence</h6>
                  <p>
                    We take care of every detail when we take over your online presence,
                    cooperating to acquire the greatest outcomes without getting in the
                    way of each other’s goals or tasks. Developers and designers who
                    disagree with marketers won’t have to argue in front of you.
                  </p>
                  <p>
                    We value your company just as much as our own. Together, we are in
                    this together, and we want to remain. The majority of our clients have
                    encountered the same issue: they engaged a freelancer in the midst of
                    a launch, and the freelancer vanished. Creating a website is only the
                    beginning. True artists are long-term builders, and their real
                    development takes place in the background. Our method is centered on
                    client demands, support requests, and anything that occurs after a
                    website launches. Our solutions are made for big audiences.
                  </p>
                  <p>
                    Your clients choose the direction of your company, and we would pay
                    attention to, consider, and act upon their insightful input—which is
                    critical to the expansion of your enterprise.
                  </p>
                  <p>
                    As your company expands, the need for a reliable, safe, adaptable, and
                    user-friendly online solution increases. Since growth is a process
                    rather than a destination, we will support you along the way to
                    achievement.
                  </p>
                  <div className="p-10 pb-12 mt-10 bg-primarybgcolor mobile:mt-0 mobile:p-6 newsletter-box">
                    <h5 className="text-white">We are Devoted to Digital</h5>
                    <p>
                      We handle every single facet of your online presence. This covers
                      comprehensive business and marketing strategy, growth planning,
                      server administration, site design and development, and creative
                      work for your brand identification.
                    </p>
                    <a
                      className="button inline-block w-full rounded text-center mt-[35px] mobile:mt-[20px] hover:bg-secondarycolor hover:text-white "
                      href="https://wppro.agency/contact/"
                      target=""
                    >
                      Let’s Talk
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-3 pt-20 desktop_min:pt-12 tablet:pt-16 mobile:pt-8 max-w-[1150px] mx-auto content_with_newspaper_layout">
              <div
                className="columns-3 mobile:columns-1 px-4 gap-x-20 tablet:gap-x-10 mobile:gap-x-0 text-justify mobile:text-center border-black pb-[60px] desktop_large:pb-[48px] mobile:pb-[15px]"
                style={{
                  MozColumnRule: "1px dashed #d3d3d3",
                  columnRule: "1px dashed #d3d3d3"
                }}
              >
                <h2 className="text-[48px] desktop_large:text-[36px] tablet:text-[30px] mobile:text-center mobile:text-[25px] mobile:leading-[30px] text-black border-b-[2px] border-black text-left pb-3 mb-4 mobile:mb-0">
                  6.We Believe in Your Business
                </h2>
                <div className="highlighted_description">
                  <p>
                    While we strongly object to off-the-shelf solutions that frequently
                    compromise security and performance, we also acknowledge that many
                    small firms exist that lack the will to expand into the vast pool of
                    industry sharks.
                  </p>
                </div>
                <div className="content">
                  <p>
                    We are not a good fit for a company when quality is not our main
                    priority. Because time is valuable and we don’t want to squander it,
                    we collaborate with like-minded individuals in order to achieve
                    success, productivity, efficiency, and advancement.
                  </p>
                  <p>
                    We won’t accept business strategies that are certain to fail or
                    initiatives that don’t align with the ethics and values of our
                    organization. When we’re in, the entire squad must give it their all
                    and be totally committed.
                  </p>
                  <p>
                    Our internal work process includes brainstorming meetings where we
                    exchange ideas, talk about possible hazards, and reorganize the
                    procedures to maximize efficiency. This guarantees that each member of
                    our team contributes personally and with new ideas to every job. The
                    primary objective is company success, and we promote initiative and
                    ensure that everyone is totally devoted to their duties.
                  </p>
                </div>
              </div>
            </div>
          </article>


      </Main>
      <Footer title={siteTitle} menuItems={footerMenu} />
    </>
  );
}

Component.query = gql`
  ${BlogInfoFragment}
  ${NavigationMenu.fragments.entry}
  query GetPageData(
    $headerLocation: MenuLocationEnum
    $footerLocation: MenuLocationEnum
  ) {
    generalSettings {
      ...BlogInfoFragment
    }
    headerMenuItems: menuItems(where: { location: $headerLocation }) {
      nodes {
        ...NavigationMenuItemFragment
      }
    }
    footerMenuItems: menuItems(where: { location: $footerLocation }) {
      nodes {
        ...NavigationMenuItemFragment
      }
    }
  }
`;

Component.variables = () => {
  return {
    headerLocation: MENUS.PRIMARY_LOCATION,
    footerLocation: MENUS.FOOTER_LOCATION,
  };
};
