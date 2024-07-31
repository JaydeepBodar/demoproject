// components/Footer.js
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import jQuery from 'jquery';
import React, { useEffect } from 'react';

const GET_FOOTER_DATA = gql`
  query GetFooterData {
  menu(id: "Footer Menu", idType: NAME) {
    id
    name
    menuItems(first: 100) {
      nodes {
        id
        label
        url
      }
    }
  }
  footerSettings {
    footer {
      footerLogo {
        cursor
        node {
          mediaItemUrl
        }
      }
      socialLinks {
        fieldGroupName
        socialIcon {
          node {
            altText
            mediaItemUrl
          }
          cursor
        }
        socialUrl {
          target
          title
          url
        }
      }
      copyrightSection
      location
      contact {
        flagAlt
        countryFlag {
          node {
            mediaItemId
            mediaItemUrl
            sourceUrl
            slug
            srcSet
          }
          cursor
        }
        fieldGroupName
        contactNumber {
          target
          title
          url
        }
      }
      email {
        target
        title
        url
      }
      partnerReview {
        partnerLogo {
          node {
            altText
            mediaItemUrl
          }
        }
        totalReviews
      }
    }
  }
}
`;

const Footer = () => {
  const { loading, error, data } = useQuery(GET_FOOTER_DATA);
  const baseUrl = process.env.NEXT_PUBLIC_WORDPRESS_URL;

    useEffect(() => {
      if (typeof window !== 'undefined') {       
          jQuery('#back_to_top').click(function (e) {
            e.preventDefault();
            jQuery("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        });
        jQuery("#back_to_top").hide();
        jQuery(window).on("load scroll", function () {
            var scroll = jQuery(window).scrollTop();
            if (scroll > 100) {
                jQuery("#back_to_top").fadeIn();
            } else {
                jQuery("#back_to_top").fadeOut();
            }
        });
     }
    }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { menu, footerSettings } = data;
  const { footer } = footerSettings;

  return (
    <footer className="bg-primarybgcolor pt-32 desktop_min:pt-20 tablet:pt-16 mobile:pt-14 tablet:px-3 mobile:px-3 bg-no-repeat bg-center" style={{ backgroundImage: "url('https://wppro.agency/wp-content/themes/wppro/assets/images/bg-img-5.svg')" }}>
      <article className="container flex flex-wrap items-start px-4">
        <section className="max-w-[21%] tablet-large:max-w-[17%] tablet:max-w-[100%] mobile:max-w-[100%] w-full pr-5 tablet:pr-0 tablet:border-b-[1px] tablet:mb-6 tablet:border-white/[20%] mobile:pb-3 mobile:border-none border-white/[20%]">
          <figure className="mb-8 mobile:mb-0 tablet:text-center mobile:text-center mobile:w-full">
            <a href="" target="_blank" className="inline-block">
              <img
                src={footer.footerLogo.node.mediaItemUrl}
                width=""
                height=""
                alt="Footer Logo"
                className="tablet:mx-auto inline-block"
              />
            </a>
          </figure>
        </section>
        <section className="max-w-[40%] tablet-large:max-w-[40%] tablet:max-w-[43%] mobile:max-w-[100%] w-full pr-5 mobile:pr-0 tablet:mb-8 mobile:mb-0 mobile:py-6 mobile:border-t-[1px] mobile:border-white/[20%]">
          <h6 className="text-white text-2xl font-poppins font-semibold mb-7 mobile:mb-2 mobile:text-center">WordPress Web Services</h6>
          <ul className="flex flex-col">
            {menu.menuItems.nodes.map((menuItem) => (
              <li key={menuItem.id} className="flex items-center mobile:justify-center mb-2.5 mobile:mb-1 text-base_fs leading-7 mobile:text-sm_fs mobile:leading-27 mobile:text-center">
                <span className="text-secbodyfontcolor"></span>
                <a href={menuItem.url} className="flex items-center font-SegoeUI font-normal text-secbodyfontcolor hover:text-white">
                  <span>{menuItem.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
        <section className="max-w-[30%] desktop:max-w-[31%] tablet:max-w-[37%] mobile:max-w-[100%] tablet:mb-8 mobile:mb-0 w-full pr-5 mobile:pr-0 mobile:py-6 mobile:border-t-[1px] mobile:border-white/[20%]">
          <h6 className="text-white text-2xl font-poppins font-semibold mb-7 mobile:mb-2 mobile:text-center">
            Contact us
          </h6>
          <div className="mb-5 mobile:mb-3 flex flex-start mobile:justify-center">
            <div className="min-w-[18px] mr-3 relative top-[7px] mobile:top-[3px]">
              <img src={`${baseUrl}/wp-content/themes/wppro/assets/images/location.svg`} alt="Location Icon" className="mx-auto" />
            </div>
            <div className="text-secbodyfontcolor">{footer.location}</div>
          </div>
          {footer.contact.map((contact, index) => (
            <div key={index} className="mb-5 mobile:mb-3">
              <a
                href={contact.contactNumber.url}
                target={contact.contactNumber.target}
                className="hover:text-white flex items-center mobile:justify-center"
              >
                <div className="min-w-[18px] mr-3">
                  <img src={`${baseUrl}/wp-content/themes/wppro/assets/images/phone.svg`} alt="Phone Call Icon" className="mx-auto" />
                </div>
                <div className="text-secbodyfontcolor hover:text-white">{contact.contactNumber.title}</div>
              </a>
            </div>
          ))}

          <div className="mb-5 mobile:mb-0 flex flex-start mobile:justify-center">
            <a
              href={footer.email.url}
              target="_blank"
              className="hover:text-white flex items-center mobile:justify-center w-max"
            >
              <div className="min-w-[18px] mr-3">
                <img src={`${baseUrl}/wp-content/themes/wppro/assets/images/mail.svg`} alt="Mail" className="mx-auto" />
              </div>
              <div className="text-secbodyfontcolor hover:text-white">{footer.email.title}</div>
            </a>
          </div>
        </section>
        <section className="max-w-[9%] desktop:max-w-[12%] tablet:max-w-[20%] mobile:max-w-[100%] w-full mobile:pt-6 mobile:pr-0 mobile:py-6 mobile:border-t-[1px] mobile:border-white/[20%]">
          <h6 className="text-white text-2xl font-poppins font-semibold mb-7 mobile:mb-2 mobile:text-center">
            Follow us
          </h6>
          <ul>
            {footer.socialLinks.map((socialLink) => (
              <li key={socialLink.cursor} className="mb-5 mobile:mb-3 flex items-center mobile:justify-center">
                <a href={socialLink.socialUrl.url} target={socialLink.socialUrl.target} className="hover:text-white flex items-center mobile:justify-center text-secbodyfontcolor text-sm_fs">
                  <img src={socialLink.socialIcon.node.mediaItemUrl} alt={socialLink.socialIcon.node.altText} className="mr-3 max-w-[17px] min-w-[17px] min-h-[17px] max-h-[17px] object-contain" />{socialLink.socialUrl.title}
                </a>
              </li>
            ))}
          </ul>
        </section>
        <div className="py-20 tablet:pt-8 tablet:pb-12 flex flex-wrap items-start tablet:justify-center w-[79%] tablet:w-[100%] mobile:max-w-[100%] mobile:w-[100%] ml-auto mobile:py-6 mobile:border-t-[1px] mobile:border-white/[20%]">
          {footer.partnerReview && footer.partnerReview.map((partner, index) => (
            <div key={index} className="mobile:last:self-end first:w-[19%] mobile:first:w-[33.33%] first:pl-0 w-[28%] tablet:w-[33.33%] mobile:w-[33.33%] min-h-[100px] mobile:min-h-minauto px-12 mobile:px-4 border-r mobile:border-none border-bdr_color/[40%] flex items-center justify-between last:border-transparent">
              <a href="javascript:void(0)" className="w-full " aria-label="">
                <div className="flex text-white mb-2 justify-center tablet:min-h-[24px] mobile:min-h-full ">
                  {partner.totalReviews && <img src={`${baseUrl}/wp-content/themes/wppro/assets/images/review-img.svg`} alt="start-img" className="mr-2" />}
                  {partner.totalReviews && <span>{partner.totalReviews}</span>}
                </div>
                <img src={partner.partnerLogo.node.mediaItemUrl} alt={partner.partnerLogo.node.altText} className="mx-auto" />
              </a>
            </div>
          ))}
        </div>


      </article>
      <div className="py-10 tablet:py-8 mobile:py-7 px-5 text-center border-t border-white/[14%] text-secbodyfontcolor text-sm_fs">{footer.copyrightSection.replace(/<\/?p>/g, '')}</div>
    
      <button
        type="button"
        data-twe-ripple-init=""
        data-twe-ripple-color="light"
        className="!fixed bottom-5 end-5 bg-primarybgcolor border-2 border-white z-50 p-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-secondarycolor hover:shadow-lg mobile:p-2"
        id="back_to_top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mobile:w-5 mobile:h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            className="group-hover:text-secondarycolor group-focus:text-secondarycolor"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>

    </footer>
  );
};

export default Footer;
