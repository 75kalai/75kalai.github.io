import PORTFOLIO_DATA_TYPE, { _companies } from "./portfolioDataType";

// COMPANY Object
export const COMPANY: _companies = {
  google: {
    name: "Google",
    logoPath: "/src/assets/john/logo/google.webp",
    imgAltText: "Google Logo",
  },
  microsoft: {
    name: "Microsoft",
    logoPath: "/src/assets/john/logo/microsoft.jpg",
    imgAltText: "Microsoft Logo",
  },
  amazon: {
    name: "Amazon",
    logoPath: "/src/assets/john/logo/amazon.jpg",
    imgAltText: "Amazon Logo",
  },
};

// JOHN_PORTFOLIO_DATA Object
const JOHN_PORTFOLIO_DATA: PORTFOLIO_DATA_TYPE = {
  bio: {
    name: "John Doe",
    profilePicPath: "/src/assets/john/john.jpg",
    dob: new Date("1990-01-01"),
    motherTounge: "English",
    currentLocation: "New York, USA",
  },
  introText: "Passionate software engineer with over a decade of experience.",
  SUMMARY: {
    box1: { title1: "Title 1", title2: "Subtitle 1" },
    box2: { title1: "Title 2", title2: "Subtitle 2" },
    box3: {
      title: "Long Description Box",
      content: "This is a detailed description for the portfolio summary.",
    },
    box4: { title1: "Title 4", title2: "Subtitle 4" },
    box5: { title1: "Title 5", title2: "Subtitle 5" },
    box6: [
      {
        companyName: COMPANY.google.name,
        experience: "3 years",
        logoPath: COMPANY.google.logoPath,
        imgAltText: COMPANY.google.imgAltText,
      },
      {
        companyName: COMPANY.microsoft.name,
        experience: "5 years",
        logoPath: COMPANY.microsoft.logoPath,
        imgAltText: COMPANY.microsoft.imgAltText,
      },
      {
        companyName: COMPANY.amazon.name,
        experience: "2 years",
        logoPath: COMPANY.amazon.logoPath,
        imgAltText: COMPANY.amazon.imgAltText,
      },
    ],
    box7: { title1: "Title 7", title2: "Subtitle 7" },
    box8: { title1: "Title 8", title2: "Subtitle 8" },
    box9: { title1: "Title 9", title2: "Subtitle 9" },
    box10: { title1: "Title 10", title2: "Subtitle 10" },
  },
  PROJECTS: [
    {
      company: COMPANY.google.name,
      title: "Google Search Enhancement",
      logoPath: COMPANY.google.logoPath,
      imgAltText: COMPANY.google.imgAltText,
      location: "Mountain View, CA",
      duration: "2 years",
      description: ["Worked on enhancing search algorithms."],
      responsibilities: ["Algorithm design", "Performance optimization"],
    },
  ],
  TECHNICAL_SKILLS: [
    { title: "JavaScript", skillLogoImgPath: "/skills/javascript.png" },
    { title: "TypeScript", skillLogoImgPath: "/skills/typescript.png" },
  ],
  ABOUT_ME: [
    {
      position: "left",
      title: "Who Am I?",
      content: "A passionate coder and lifelong learner.",
    },
  ],
  CONTACT: [
    { contactMethod: "Email", description: "john.doe@example.com" },
    { contactMethod: "Phone", description: "+1234567890" },
  ],
  RESUME: {
    path: "/resume/john_doe_resume.pdf",
  },
};

export default JOHN_PORTFOLIO_DATA;
