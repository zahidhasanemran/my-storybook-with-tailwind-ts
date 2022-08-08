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
