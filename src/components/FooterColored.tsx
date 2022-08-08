/* eslint-disable jsx-a11y/anchor-is-valid */
// import facebook from "../components/svg/facebook.svg"
// import Phone from "../components/svg/green-phone.svg"
// import Instagram from "../components/svg/instagram.svg"
// import Twitter from "../components/svg/twitter.svg"

import React from "react"
// import SmallBody from "./common/BodyTitle/SmallBody";

const Footer = () => {
  return (
    <div className="footer h-full bg-[#023154]">
      <div className="footerContainer container mx-auto">
        <div className="grid gap-4 py-6 sm:grid-cols-2 sm:gap-8 sm:py-10 md:grid-cols-4 ">
          <div className="widget text-center sm:text-left">
            <div className="footerLogo mb-5">
              <a href={"/homeLink"}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ4pA7mRcF8Q-LYV3iaPmlXjlA3hhp7HtzQw&usqp=CAU"
                  alt=""
                  className="mx-auto sm:m-0"
                />
              </a>
            </div>
            <p>
              Risus sed morbi nullam aliquam. Ac felis,elementum mauris orci
              lacus, amet, sagittis. Dapibus eleifend placerat.
            </p>
            <div className="socialLinks sm:justify-left mt-4 mb-7 flex flex-nowrap justify-center space-x-4 sm:justify-start">
              <a href="#">
                <img
                  className="h-6"
                  src="https://img.icons8.com/ios-glyphs/452/facebook-new.png"
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  className="h-6"
                  src="https://img.icons8.com/ios-glyphs/452/facebook-new.png"
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  className="h-6"
                  src="https://img.icons8.com/ios-glyphs/452/facebook-new.png"
                  alt=""
                />
              </a>
            </div>
            <div className="footerInfo">
              <div className="flex justify-center sm:justify-start">
                {/* <img src={Phone} alt="" /> */}
                <h3 className="ml-3 text-lg font-bold text-white">
                  0125412464
                </h3>
              </div>
            </div>
          </div>
          <div className="widget hidden sm:block">
            <h3 className="widgetTitle mb-4 text-lg font-bold leading-5 text-white">
              Services
            </h3>
            <ul className="widgetLinks">
              <div className="d-block text-base font-normal capitalize leading-8 text-white">
                <a href={"/contactLink"}>Contact</a>
              </div>
              <div className="d-block text-base font-normal capitalize leading-8 text-white">
                <a href={"/aboutLink"}>About</a>
              </div>
              <div className="d-block text-base font-normal capitalize leading-8 text-white">
                <a href={"/faqLink"}>Faq</a>
              </div>
              <div className="d-block text-base font-normal capitalize leading-8 text-white">
                <a href={"/blogLink"}>Blog</a>
              </div>
              <div className="d-block text-base font-normal capitalize leading-8 text-white">
                <a href={"/privacyPolicyLink"}>Privacy Policy</a>
              </div>
              <div className="d-block text-base font-normal capitalize leading-8 text-white">
                <a href={"/refundLink"}>refund</a>
              </div>
              <div className="d-block text-base font-normal capitalize leading-8 text-white">
                <a href={"/licenseLink"}>License</a>
              </div>
            </ul>
          </div>
          <div className="widget hidden sm:block">
            <h3 className="widgetTitle mb-4 text-lg font-bold leading-5 text-white">
              For Patients
            </h3>
            <ul className="widgetLinks">
              <div className="d-block text-base font-normal capitalize leading-8 text-white">
                <a href={"/searchDoctorsLink"}>Search Doctors</a>
              </div>
              <div className="d-block text-base font-normal capitalize leading-8 text-white">
                <a href={"/searchClinicsLink"}>Search Clinics</a>
              </div>
              <div className="d-block text-base font-normal capitalize leading-8 text-white">
                <a href={"/searchHospitalsLink"}>Search Hospitals</a>
              </div>
              <div className="d-block text-base font-normal capitalize leading-8 text-white">
                <a href={"/searchAmbulanceLink"}>Search Ambulance</a>
              </div>
              <div className="d-block text-base font-normal capitalize leading-8 text-white">
                <a href={"/searchBloodLink"}>Search Blood</a>
              </div>
              <div className="d-block text-base font-normal capitalize leading-8 text-white">
                <a href={"/domiciliaryServicesLink"}>Domiciliary Services</a>
              </div>
              <div className="d-block text-base font-normal capitalize leading-8 text-white">
                <a href={"/healthCheckupPackagesLink"}>
                  Health Checkup Packages
                </a>
              </div>
              <div className="d-block text-base font-normal capitalize leading-8 text-white">
                <a href={"/diagnosticServicesLink"}>Diagnostic Services</a>
              </div>
              <div className="d-block text-base font-normal capitalize leading-8 text-white">
                <a href={"/insurancesLink"}>Insurances</a>
              </div>
            </ul>
          </div>
          <div className="widget hidden sm:block">
            <h3 className="widgetTitle mb-4 text-lg font-bold leading-5 text-white">
              For Doctors/Organisations
            </h3>
            <ul className="widgetLinks">
              <div className="d-block text-base font-normal capitalize leading-8 text-white">
                <a href={"/workWithUsLink"}>Work With Us</a>
              </div>
              <div className="d-block text-base font-normal capitalize leading-8 text-white">
                <a href={"/plansBenefitsLink"}>Plans &amp; Benefits</a>
              </div>
              <div className="d-block text-base font-normal capitalize leading-8 text-white">
                <a href={"/policiesLink"}>Policies</a>
              </div>
              <div className="d-block text-base font-normal capitalize leading-8 text-white">
                <a href={"/reviewsLink"}>Reviews</a>
              </div>
              <div className="d-block text-base font-normal capitalize leading-8 text-white">
                <a href={"/partnershipLink"}>partnership</a>
              </div>
            </ul>
          </div>
        </div>
        <div className="copyright mx-4 pb-5 text-center">
          <p className="text-xs font-normal leading-5 text-black-tint-600">
            Copyright © 2022 Demo Brand. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
