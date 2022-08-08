// import facebook from "@components/svg/facebook.svg"
// import YT from "@components/svg/youtube.svg"
// import Instagram from "@components/svg/instagram.svg"
// import Twitter from "@components/svg/twitter.svg"
// import Linkedin from "@components/svg/linkedin.svg"

// import { Logo } from "@constants/assets"

import React from "react"
import { footerLinks } from "../../constants/data"
// import { fbLink, insLink, lnkLink, twLink, ytLink } from "@constants/links"

const Footer: React.FC = () => {
  return (
    <div className="footer h-full bg-[#F9FAFB] xl:bg-white px-3 lg:px-0 pt-20">
      <div className="wrappper">
        <div className="container mx-auto">
          <div className="4xl:flex pb-7 4xl:gap-40">
            {/*===================================
          Footer Logo 
          ====================================*/}
            <div className="widget">
              <div className="footerLogo mb-12">
                <a href={"/homeLink"}>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ4pA7mRcF8Q-LYV3iaPmlXjlA3hhp7HtzQw&usqp=CAU"
                    alt=""
                    className="h-10"
                  />
                </a>
              </div>
            </div>

            {/*===================================
          Footer Links wrapper div
          ====================================*/}
            <div className="linksWrapper xs:flex-wrap xs:flex lg:justify-between 4xl:justify-between 4xl:flex-auto">
              {footerLinks?.length > 0 &&
                footerLinks.map((sm, i) => (
                  <div
                    className="widget xs:basis-1/2 md:basis-4/12 lg:basis-2/12"
                    key={sm.id}
                  >
                    <h3 className="text-sm-semibold text-gray-400 mb-4">
                      {sm.title}
                    </h3>
                    {sm?.links?.length > 0 && (
                      <ul className="widgetLinks mb-10">
                        {sm?.links?.map((ssm, i) => (
                          <div
                            className="text-md-medium text-gray-500 mb-3"
                            key={ssm.id}
                          >
                            <a href={ssm?.link}>{ssm?.text}</a>
                          </div>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
            </div>
          </div>
          {/*===================================
          Middle border 
          ====================================*/}
          <div className="border-t border-gray-200 pt-5"></div>
          {/*===================================
          Copyright section 
          ====================================*/}
          <div className="copyright lg:flex lg:items-center lg:justify-between lg:flex-row-reverse">
            <div className="socialLinks pt-8 lg:pt-0 justify-left my-4 flex flex-nowrap space-x-4 sm:justify-start items-center">
              <a href="/" rel="noreferrer" target="_blank">
                <img
                  className="h-6"
                  src="https://img.icons8.com/ios-glyphs/452/facebook-new.png"
                  alt=""
                />
              </a>
              <a href="/" rel="noreferrer" target="_blank">
                <img
                  className="h-6"
                  src="https://img.icons8.com/ios-glyphs/452/facebook-new.png"
                  alt=""
                />
              </a>
              <a href="/" rel="noreferrer" target="_blank">
                <img
                  className="h-6"
                  src="https://img.icons8.com/ios-glyphs/452/facebook-new.png"
                  alt=""
                />
              </a>
              <a href="/" rel="noreferrer" target="_blank">
                <img
                  className="h-6"
                  src="https://img.icons8.com/ios-glyphs/452/facebook-new.png"
                  alt=""
                />
              </a>
              <a href="/" rel="noreferrer" target="_blank">
                <img
                  className="h-6"
                  src="https://img.icons8.com/ios-glyphs/452/facebook-new.png"
                  alt=""
                />
              </a>
            </div>
            <p className="text-md-medium text-gray-500 font-normal py-6">
              © 2022 Demo. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

// export const footerLinks = [
//   {
//     id: 1,
//     title: "Company",
//     links: [
//       { id: 1, text: "Home", link: "/home", extraClass: "" },
//       { id: 2, text: "Sign Up", link: "/register", extraClass: "" },
//       { id: 3, text: "About us", link: "/aboutus", extraClass: "" },
//       { id: 4, text: "Careers", link: "/careers", extraClass: "" },
//       { id: 5, text: "Pricing", link: "/pricing", extraClass: "" },
//       { id: 6, text: "Contact Us", link: "/contactus", extraClass: "" },
//     ],
//   },
//   {
//     id: 2,
//     title: "Product",
//     links: [
//       { id: 1, text: "Overview", link: "/overview", extraClass: "" },
//       { id: 2, text: "Find Jobs", link: "/findJobs", extraClass: "" },
//       { id: 3, text: "Post a Job", link: "/postJob", extraClass: "" },
//       { id: 4, text: "Solutions", link: "/solution", extraClass: "badge new" },
//     ],
//   },
//   {
//     id: 3,
//     title: "Support",
//     links: [
//       { id: 1, text: "Help Centre", link: "/helpCenter", extraClass: "" },
//       { id: 2, text: "Contact Support", link: "/contactLink", extraClass: "" },
//       { id: 3, text: "Blog", link: "/blogLink", extraClass: "" },
//     ],
//   },
//   {
//     id: 4,
//     title: "Social",
//     links: [
//       { id: 1, text: "Twitter", link: "/twLink", extraClass: "" },
//       { id: 2, text: "Linkedin", link: "/lnkLink", extraClass: "" },
//       { id: 3, text: "Facebook", link: "/fbLink", extraClass: "" },
//       { id: 4, text: "Instagram", link: "/insLink", extraClass: "" },
//       { id: 5, text: "Youtube", link: "/ytLink", extraClass: "" },
//     ],
//   },
//   {
//     id: 5,
//     title: "Legal",
//     links: [
//       { id: 1, text: "Terms", link: "/termsLink", extraClass: "" },
//       { id: 2, text: "Privacy", link: "/privacyLink", extraClass: "" },
//       { id: 3, text: "Cookies", link: "/cookiesLink", extraClass: "" },
//       { id: 4, text: "Licenses", link: "/licensesLink", extraClass: "" },
//     ],
//   },
// ]

// styles

// @media only screen and (min-width: 320px) {
//   .wrappper {
//     width: calc(100% - 30px);
//     margin: 0 auto;
//   }
// }

// @media only screen and (min-width: 640px) {
//   .wrappper {
//     width: calc(100% - 30px);
//     padding-left: 15px;
//     padding-right: 15px;
//     margin: 0 auto;
//   }
// }

// @media only screen and (min-width: 641px) {
// }

// @media only screen and (min-width: 1024px) {
//   .footerContainer {
//     width: 1024px;
//     margin: 0 auto;
//   }
// }
// @media only screen and (min-width: 1280px) {
//   .footerContainer {
//     width: 1280px;
//     margin: 0 auto;
//   }
// }
// @media only screen and (min-width: 1281px) {
//   .wrappper {
//     width: calc(100% - 60px);
//     padding: 0px 30px;
//     margin: 0 auto;
//   }
// }
// @media only screen and (min-width: 1536px) {
//   .wrappper {
//     width: calc(100% - 100px);
//     padding: 0px 50px;
//     margin: 0 auto;
//   }
// }
// @media only screen and (min-width: 1920px) {
//   .wrappper {
//     width: calc(100% - 250px);
//     padding: 0px 125px;
//     margin: 0 auto;
//   }
// }

// screens: {
//   xs: "375px",
//   sm: "480px",
//   md: "768px",
//   lg: "1024px",
//   xl: "1280px",
//   "2xl": "1366px",
//   "3xl": "1440px",
//   "4xl": "1560px",
//   "5xl": "1920px",
// },
// colors: {
//   primary: {
//     default: "#15C39A",
//     525: "#13B58F",
//     500: "#15C39A",
//     50: "#E8F9F5",
//   },
//   secondary: {
//     main: "#21263B",
//   },
//   warning: {
//     50: "#FFFAEB",
//     300: "#FEC84B",
//     500: "#F79009",
//     600: "#DC6803",
//     900: "#7A2E0E",
//   },
//   gray: {
//     900: "#21263B",
//     500: "#666C85",
//     400: "#98A2B3",
//     300: "#D0D5DD",
//     200: "#E4E7EC",
//     100: "#F2F3F7",
//     50: "#F9F9FB",
//   },
//   success: {
//     900: "#054F31",
//     600: "#039855",
//     500: "#ECFDF3",
//   },
//   purple: {
//     900: "#3E1C96",
//     600: "#6938EF",
//     500: "#F4F3FF",
//   },
//   blue: {
//     light: {
//       900: "#0B4A6F",
//       600: "#0086C9",
//       500: "#F0F9FF",
//     },
//   },
//   white: "#fff",
//   transparent: "transparent",
// },
