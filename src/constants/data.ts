export const menusData = [
  {
    id: 1,
    title: "Job Seekers",
    link: {
      pathname: "/",
      query: { type: "developer" },
    },
    type: "middle",
    public: true,
  },
  {
    id: 2,
    title: "Login",
    link: "/login",
    type: "right",
    public: true,
    class: "login",
  },
  {
    id: 3,
    title: "Register",
    link: "/register",
    type: "right",
    public: true,
    class: "register",
  },
  {
    id: 4,
    title: "Recruiters",
    link: "#",
    type: "middle",
    public: true,
    sub: [
      {
        id: 1,
        title: "Settings",
        link: "/settings",
        public: false,
      },

      {
        id: 2,
        title: "Profile",
        link: "/profile",
        public: false,
      },
    ],
  },
]

export const footerLinks = [
  {
    id: 1,
    title: "Company",
    links: [
      { id: 1, text: "Home", link: "/home", extraClass: "" },
      { id: 2, text: "Sign Up", link: "/register", extraClass: "" },
      { id: 3, text: "About us", link: "/aboutus", extraClass: "" },
      { id: 4, text: "Careers", link: "/careers", extraClass: "" },
      { id: 5, text: "Pricing", link: "/pricing", extraClass: "" },
      { id: 6, text: "Contact Us", link: "/contactus", extraClass: "" },
    ],
  },
  {
    id: 2,
    title: "Product",
    links: [
      { id: 1, text: "Overview", link: "/overview", extraClass: "" },
      { id: 2, text: "Find Jobs", link: "/findJobs", extraClass: "" },
      { id: 3, text: "Post a Job", link: "/postJob", extraClass: "" },
      { id: 4, text: "Solutions", link: "/solution", extraClass: "badge new" },
    ],
  },
  {
    id: 3,
    title: "Support",
    links: [
      { id: 1, text: "Help Centre", link: "/helpCenter", extraClass: "" },
      { id: 2, text: "Contact Support", link: "/contactLink", extraClass: "" },
      { id: 3, text: "Blog", link: "/blogLink", extraClass: "" },
    ],
  },
  {
    id: 4,
    title: "Social",
    links: [
      { id: 1, text: "Twitter", link: "/twLink", extraClass: "" },
      { id: 2, text: "Linkedin", link: "/lnkLink", extraClass: "" },
      { id: 3, text: "Facebook", link: "/fbLink", extraClass: "" },
      { id: 4, text: "Instagram", link: "/insLink", extraClass: "" },
      { id: 5, text: "Youtube", link: "/ytLink", extraClass: "" },
    ],
  },
  {
    id: 5,
    title: "Legal",
    links: [
      { id: 1, text: "Terms", link: "/termsLink", extraClass: "" },
      { id: 2, text: "Privacy", link: "/privacyLink", extraClass: "" },
      { id: 3, text: "Cookies", link: "/cookiesLink", extraClass: "" },
      { id: 4, text: "Licenses", link: "/licensesLink", extraClass: "" },
    ],
  },
]
