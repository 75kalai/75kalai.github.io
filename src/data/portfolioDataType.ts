import React from "react";

type PORTFOLIO_DATA_TYPE = {
  bio:{
    name: string;
    profilePicPath: string;
    dob: Date
    motherTounge: string;
    currentLocation: string;
  };
  introText: string;
  SUMMARY: {
    box1: section_summary_box_type_1;
    box2: section_summary_box_type_1;
    box3: section_summary_box_type_2; // long desc box
    box4: section_summary_box_type_1;
    box5: section_summary_box_type_1;
    box6: section_summary_box_companies[]; // company list box
    box7: section_summary_box_type_1;
    box8: section_summary_box_type_1;
    box9: section_summary_box_type_1;
    box10: section_summary_box_type_1;
  };
  PROJECTS: project_type[];
  TECHNICAL_SKILLS: technical_skills_type[];
  ABOUT_ME: about_me_type[];
  CONTACT: contact_type[];
  RESUME: resume_type;

  // LANGUAGES: languages_type[],
  // AWARDS: awards_type[],
  // REFERENCES: references_type[],
  // OTHER_SKILLS: other_skills_type[],
  // EDUCATION: education_type[],
  // EXPERIENCE: experience_type[],
  // LIFE_EVENTS: life_events_type[],
  // TESTIMONIALS: testimonials_type[],
};

export default PORTFOLIO_DATA_TYPE;

// --------------------------------------------------------------------------------
export type  _companies = {
  [key:string]:{
    name: string;
    logoPath: string;
    imgAltText?: string;
  }
};


// ------------------------------ SECTION 1 : SUMMARY ------------------------------

export type section_summary_box_type_1 = {
  title1: string | React.ReactNode;
  title2: string | React.ReactNode;
  link? : undefined | string;
};

export type section_summary_box_type_2 = {
  title: string;
  content: string;
  button?: string;
};

export type section_summary_box_companies = {
  companyName: string;
  experience: Number | string;
  logoPath: string;
  imgAltText?: string;
};

// ------------------------------ SECTION 2 : PROJECTS ------------------------------

export type project_type = {
  company: string;
  title: string;
  logoPath: string;
  imgAltText?: string;
  client?: string;
  location?: string;
  duration: string;
  teamSize?: string | number;
  environment?: string;
  description?: string | Array<string>;
  responsibilities?: string | Array<string>;
};

// ------------------------------ SECTION 3 : Technical Skills ----------------------

export type technical_skills_type = {
  title: string;
  skillLogoImgPath: string;
};

// ------------------------------ SECTION 4 : ABOUT ME ------------------------------

export type about_me_type = {
  position?: "left" | "right";
  title?: string;
  content: string | string[];
};

// ------------------------------ SECTION 5 : CONTACT ------------------------------

export type contact_type = {
  contactMethod: "Location" | "Email" | "Phone";
  description?: string;
  // link?: string;
};

// ------------------------------ SECTION 6 : RESUME -------------------------------

export type resume_type = {
  path: string;
};
