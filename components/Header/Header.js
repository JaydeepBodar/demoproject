import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';
import { Container, NavigationMenu, SkipNavigationLink } from "../../components";
// import styles from "./Header.module.scss";

// Define the GraphQL query
const GET_MENU = gql`
  query GetMenu($id: ID!, $idType: MenuNodeIdTypeEnum!) {
    menu(id: $id, idType: $idType) {
      id
      name
      menuItems(first: 100) {
        nodes {
          id
          path
          label
          parentId
          cssClasses
          childItems(first: 100) {
            nodes {
              id
              path
              label
              parentId
              cssClasses
              childItems(first: 100) {
                nodes {
                  id
                  path
                  label
                  parentId
                  cssClasses
                  childItems(first: 100) {
                    nodes {
                      id
                      path
                      label
                      parentId
                      cssClasses
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

// const GET_MENU = gql`
//   query GetMenu($id: ID!, $idType: MenuNodeIdTypeEnum!) {
//     menu(id: $id, idType: $idType) {
//       id
//       name
//       menuItems(first: 100, where: { parentId: "0" }) {  # Assuming top-level items have parentId = "0"
//         nodes {
//           id
//           path
//           label
//           parentId
//           cssClasses
//         }
//       }
//     }
//   }
// `;


export default function Header({ title = "Headless by WP Engine", description }) {
  const [isNavShown, setIsNavShown] = useState(false);
  const router = useRouter();
  const baseUrl = `${router.basePath}`; // Extract the base URL

  // Use Apollo Client's useQuery hook to fetch the menu items
  const { data, loading, error } = useQuery(GET_MENU, {
    variables: { id: "Primary menu New", idType: "NAME" },
  });

  // Handle loading and error states
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;

  // Extract menu items from the fetched data
  const menuItems = data?.menu?.menuItems?.nodes || [];

  return (
    <header className="px-7 xl:px-14 bg-primarybgcolor sticky top-0 z-50">
      <div className="relative flex justify-between h-full mx-auto">
        <div className="logo py-3.5">
          <a href={baseUrl}>
            <img
              src={
                "http://192.168.1.106/wppro/wp-content/uploads/2023/10/logo.svg"
              }
              alt="Site Logo"
              className="tablet-large:max-w-[80px]"
            />
          </a>
        </div>
        <div className="sitenavigation">
          {/*<nav
            aria-label="Primary"
            className="h-full gap-4 lg:flex tablet-large:hidden"
          ></nav>*/}
          <NavigationMenu
              className={`h-full gap-4 lg:flex tablet-large:hidden ${isNavShown ? "show" : ""}`}
              aria-label={"Primary"}
              menuItems={menuItems}
            />
        </div>
        <div className="hidden toggle-menus tablet-large:inline-block">
          <span className="cursor-pointer hamburg">
            <img
              src={`${baseUrl}/wppro/wp-content/themes/wppro/assets/images/toggle-icon.svg`}
              width={30}
              height={30}
              alt="Toggle Icon"
            />
            <span className="ml-3 uppercase text-grey_active" />
          </span>
          <div className="menu-list">
            <div className="absolute cursor-pointer close-menu top-7 right-7">
              <img
                src={`${baseUrl}/wppro/wp-content/themes/wppro/assets/images/toggle-icon.svg`}
                width={25}
                height={25}
                alt="Close Icon"
              />
            </div>
            {/*<ul>
              <nav
                aria-label="Primary"
                className="items-center gap-4 lg:flex "
              ></nav>
            </ul>*/}
            <NavigationMenu
              className={`items-center gap-4 lg:flex ${isNavShown ? "show" : ""}`}
              aria-label={"Primary"}
              menuItems={menuItems}
            />
          </div>
        </div>
      </div>
      <div className="overlay-menu"></div>
    </header>
  );
}
