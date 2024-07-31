import { useQuery, gql } from '@apollo/client';
import * as MENUS from '../constants/menus';
import { BlogInfoFragment } from '../fragments/GeneralSettings';
import {
  Header,
  Footer,
  Main,
  SEO,
} from '../components';

export default function AboutPage() {
  const { data, loading, error } = useQuery(AboutPage.query, {
    variables: AboutPage.variables(),
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { title: siteTitle, description: siteDescription } = data?.generalSettings || {};
  const primaryMenu = data?.headerMenuItems?.nodes || [];
  const footerMenu = data?.footerMenuItems?.nodes || [];

  return (
    <>
      <SEO title={siteTitle} description={siteDescription} />
      <Header
        title={siteTitle}
        description={siteDescription}
        menuItems={primaryMenu}
      />
      <Main>
        <section>
          <h1>About Us</h1>
          <p>Welcome to our About page! Here you can learn more about our company and team.</p>
          <p>Our mission is to deliver exceptional services and products to our customers.</p>
          <p>Feel free to explore and reach out to us with any questions or inquiries.</p>
        </section>
      </Main>
      <Footer title={siteTitle} menuItems={footerMenu} />
    </>
  );
}

AboutPage.query = gql`
  ${BlogInfoFragment}
  ${NavigationMenu.fragments.entry}
  query GetAboutPageData(
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

AboutPage.variables = () => {
  return {
    headerLocation: MENUS.PRIMARY_LOCATION,
    footerLocation: MENUS.FOOTER_LOCATION,
  };
};
