import { gql } from '@apollo/client';
import Link from 'next/link';
import flatListToHierarchical from '../../utilities/flatListToHierarchical';

export default function NavigationMenu({ menuItems, className }) {
  if (!menuItems) {
    return null;
  }

  // Based on https://www.wpgraphql.com/docs/menus/#hierarchical-data
  const hierarchicalMenuItems = flatListToHierarchical(menuItems);

  function renderMenu(items, isSubmenu = false, submenuClass = 'menu flex') {
    return (
      <ul className={submenuClass}>
        {items.map((item, index) => {
          const { id, path, label, children, cssClasses } = item;

          // @TODO - Remove guard clause after ghost menu items are no longer appended to array.
          if (!item.hasOwnProperty('__typename')) {
            return null;
          }

          const liClassNames = isSubmenu
            ? 'submenu-item text-gray-200 text-sm hover:text-secondarycolor relative border-b border-[rgba(66,134,40,.33)]'
            : `main-item ${cssClasses} text-white px-8 py-2 text-base_fs hover:text-secondarycolor relative`;

          return (
            <li key={id} className={liClassNames}>
              {isSubmenu ? (
                <a href={path ?? ''} className='font-SegoeUI font-normal px-8 py-4 text-sm_fs inline-block'>{label ?? ''}</a>
              ) : (
                <Link href={path ?? ''} className='font-SegoeUI font-normal'>{label ?? ''}</Link>
              )}
              {children.length ? renderMenu(children, true, 'absolute bg-[#091427] top-[71px] left-0 shadow-lg rounded-br-2xl rounded-bl-2xl w-[332px]') : null}
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <nav
      className={`items-center gap-4 lg:flex ${className}`}
      role="navigation"
      aria-label={`${menuItems[0]?.menu?.node?.name} menu`}>
      {renderMenu(hierarchicalMenuItems)}
    </nav>
  );
}

NavigationMenu.fragments = {
  entry: gql`
    fragment NavigationMenuItemFragment on MenuItem {
      id
      path
      label
      parentId
      cssClasses
      menu {
        node {
          name
        }
      }
    }
  `,
};
