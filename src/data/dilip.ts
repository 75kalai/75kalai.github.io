import PORTFOLIO_DATA_TYPE, { _companies } from "./portfolioDataType";

const COMPANY:_companies = {
  cogniant:{
    name: "Cognizant",
    logoPath: "/src/assets/dilip/Cognizant_Logo_Bg.jpg",
    imgAltText: "Cognizant logo",
  },
  wipro:{
    name: "Wipro",
    logoPath: "/src/assets/dilip/Wipro_Logo_Bg.avif",
    imgAltText:  "Wipro logo",
  }
}

const DILIP_PORTFOLIO_DATA: PORTFOLIO_DATA_TYPE = {
  bio:{
    name:"Dilip Kumar",
    profilePicPath:"/src/assets/dilip/dilip.jpg",
    dob: new Date("Jun 3, 1993"),
    motherTounge: "Tamil",
    currentLocation: "Chennai, India",
  },
  introText: "Full stack Web Devlopment Expert",
  SUMMARY: {
    box1: {
      title1: "10+",
      title2: "years of IT experience",
    },
    box2: {
      title1: "Angular + Java",
      title2: "<b>Expert</b>",
    },
    box3: {
      title: "A Reliable Professional that your team always needed.",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          quia! Aspernatur aut impedit dignissimos quod soluta maxime pariatur,
          repellat nam hic quae, aliquid qui sapiente animi illum laudantium
          numquam amet adipisci dolor. Libero, aut non. Ut aliquam reprehenderit
          quidem minus.`,
      button: "know more",
    },
    box4: {
      title1: "6+",
      title2: "long-term projects",
    },
    box5: {
      title1: "5+",
      title2: `years of professional<br><b>agile</b> experience`,
    },
    box6: [
      {
        companyName: COMPANY.wipro.name,
        experience: "3+",
        logoPath: COMPANY.wipro.logoPath,
        imgAltText: COMPANY.wipro.imgAltText,
      },
      {
        companyName: COMPANY.cogniant.name,
        experience: "7+",
        logoPath:COMPANY.cogniant.logoPath,
        imgAltText: COMPANY.cogniant.imgAltText,
      },
    ],
    box7: {
      title1: ".",
      title2: "y",
    },
    box8: {
      title1: ".",
      title2: "y",
    },
    box9: {
      title1: ".",
      title2: "y",
    },
    box10: {
      title1: ".",
      title2: "y",
    }
  },
  PROJECTS:  [
    {
      company: COMPANY.cogniant.name,
      logoPath: COMPANY.cogniant.logoPath,
      title: "FARMERS INSURANCE",
      duration: "May 2019 – till Date",
      teamSize: "8",
      environment:
        "Angular 16, Java 11, Spring Boot, Spring batch, sonar coding standards, Heroku/ Rosa Server and GIT.",
      description:
        "Farmers Insurance is one of the largest insurers in the United States, serving over 10 million households with agents and employees across all 50 states",
      responsibilities: [
        "I have been working in the ACE development application as a Full Stack Developer, with recent version of Angular and Java 11",
        "I am presently working on the ALTA application (earlier named AQS), which is for the agent to create a Quote on behalf of the customer, with some special feature only applicable for the Agent.",
        "I am working as Full stack developer, and I am taking responsibility of technical support for two teams (Impeccable and Sparklers) in delivering stories. PFA the resume.",
        "I have developed front end using Angular version starting with 6 upgrading till 16.",
        "I have been working with the development of a few modules as well as reusable components throughout the application.",
        "I have participated in team building and Knowledge transfer sessions for fresher employees.",
        "I have good Knowledge of code flow and functionality of the application, both UI and Api.",
      ],
    },
    {
      company:  COMPANY.cogniant.name,
      logoPath: COMPANY.cogniant.logoPath,
      title: "Mercury Insurance",
      duration: "January 2019 – May 2019",
      teamSize: "5",
      environment: "Angular 7.",
      description:
        "Mercury General Corporation is a multiple-line insurance organization that offers personal automobiles, homeowners, renters, and business insurance. I worked as a UIdeveloper with angular 7 and we integrated custom payment gateway to save user card details.",
    },
    {
      company:  COMPANY.cogniant.name,
      logoPath: COMPANY.cogniant.logoPath,
      title: "CSAA Insurance Exchange",
      client: "CSAA General Insurance Company",
      duration: "December 22,2017 to January 2019",
      teamSize: "6",
      environment: "Java 1.6, J2EE and Reacts",
      description:
        "CSAA Insurance, also known as CSAA Insurance Group, is the insurance arm of AAA (American Automobile Association) for a specific set of states.",
    },
    {
      company:  COMPANY.wipro.name,
      logoPath: COMPANY.wipro.logoPath,
      title: "Crime and Criminal Tracking Network System (CCTNS)",
      client: "NCRB, Delhi",
      duration: "May 2015 – 2017",
      teamSize: "30",
      environment:
        "Spring 1.0, Glassfish Server 2.1, SSO & LDAP Authentication, JDK 1.6, JDBC, MySQL, SVN, NetBeans",
      description:
        "Crime and Criminal Tracking Network & Systems (CCTNS) is a highly ambitious project done for the Government of India. The objective of the project was to develop a strong and transparent application to register and keep complete track of Crimes and Criminals for the 15000+ police stations throughout India.",
      responsibilities: [
        "Have been responsible for the development of several major modules as well as reusable components throughout the application.",
        "Have participated in application build and war file deployment using Ant build and have taken sole responsibility in the deployment for UAT, SIT, and production servers.",
        "Have handled client and production Bug fixes on the go.",
        "Have participated in team building and Knowledge transfer sessions for fresher employees.",
        "Have extensive Knowledge of code flow and functionality of the application.",
        "Have developed front end using JSP, Java script, jQuery and Ajax.",
        "Have been involved in validations using client side and server side Struts Validation.",
        "Have been involved in the project documentation like preparation of Low Level Design Documents, Unit Test Matrices, Understanding documents for production support team.",
      ],
    },
    {
      company:  COMPANY.wipro.name,
      logoPath: COMPANY.wipro.logoPath,
      title: "Telenor Myanmar",
      client: "Telenor",
      location: "Greater Noida",
      duration: "January 2015 to May 2015",
      environment:
        "Spring 2.1, WebLogic Server, JDK1.8, MySQL, Hibernate, SVN, NetBeans.",
      description:
        "Telenor Myanmar is a project to track the sim card Activation process and development of application for Enabling the customer care Application to the Client.",
      responsibilities: [
        "Have worked on the prototype development and UI frontend using JSP for few of the modules.",
        "Have handled client Bug fixes.",
      ],
    },
    {
      company:  COMPANY.wipro.name,
      logoPath: COMPANY.wipro.logoPath,
      title: "MAWANI (Dubai Port Application Development for Kochi)",
      client: "NCRB, Delhi",
      location: "Greater Noida",
      duration: "August 01, 2016, to Nov 2016",
      teamSize: "6",
      environment:
        "Spring 1.0, Tomcat Server 8, JDK1.8, MySQL, Hibernate 4.3, SVN, Eclipse",
      description:
        "MAWANI is a light weight stand alone application for handling the Port activities at ease, along with digitizing the activities carried on the Kochi port. The project has a higher scope of being carried over to be implemented in other ports of the Client",
      responsibilities: [
        "Involved in the development of major module",
        "Developed reusable components throughout the application.",
        "Participated in team building and Knowledge transfer sessions for fresher employees.",
        "Have developed front end using JSP, Java script, jQuery and Ajax.",
        "Involved in Java bug fixes",
      ],
    },
  ],
  TECHNICAL_SKILLS: [
    { title: "JavaScript", skillLogoImgPath: "/src/assets/logos/icons8-javascript.svg" },
    { title: "Angular", skillLogoImgPath: "/src/assets/logos/angular_gradient.png" },
    { title: "Redux", skillLogoImgPath: "/src/assets/logos/icons8-redux.svg" },
    { title: "Java", skillLogoImgPath: "/src/assets/logos/icons8-java.svg" },
    { title: "Spring", skillLogoImgPath: "/src/assets/logos/spring.svg" },
    { title: "Spring Boot", skillLogoImgPath: "/src/assets/logos/icons8-spring-boot.svg" },
    { title: "Spring Batch", skillLogoImgPath: "/src/assets/logos/spring batch.png" },
    { title: "MySQL", skillLogoImgPath: "/src/assets/logos/icons8-mysql.svg" },
    { title: "Postgres", skillLogoImgPath: "/src/assets/logos/icons8-postgres.svg" },
    { title: "DB2", skillLogoImgPath: "/src/assets/logos/ibm db2.svg" },
    { title: "Eclipse", skillLogoImgPath: "/src/assets/logos/eclipse.svg" },
    { title: "Spring Tools", skillLogoImgPath: "/src/assets/logos/spring-tool.svg" },
    { title: "VS Code", skillLogoImgPath: "/src/assets/logos/vscode.svg" },
    { title: "Git", skillLogoImgPath: "/src/assets/logos/icons8-git.svg" },
    { title: "GitHub", skillLogoImgPath: "/src/assets/logos/icons8-git (1).svg" },
    { title: "GitLab", skillLogoImgPath: "/src/assets/logos/icons8-gitlab.svg" },
    { title: "Tortoise SVN", skillLogoImgPath: "/src/assets/logos/tortoise svn.png" }
  ],
  ABOUT_ME: [
    {
      position:"left",
      title:"Meet Your Next Web Development Partner!",
      content:[
        "<b>Hey there!</b>",
        ` I'm a full stack web developer with over 10 years of experience
          under my belt. With a passion for creating seamless digital
          experiences, I’m here to bring your ideas to life.`
      ]
    },
    {
      position:"left",
      title:"What sets me apart?",
      content:`Well, I'm not just about coding. I pride myself on being
          charismatic, responsible, and a key player in any team. No matter the
          challenge, I stay calm and reliable, ensuring that your project is in
          safe hands.`
    },
    {
      position:"right",
      content:`I'm currently on the lookout for an exciting opportunity to
            collaborate with a great client or project, where I can showcase my
            technical excellence and dedication. So, if you want a partner who’s
            as dependable as your morning coffee, let’s connect!`
    },
    {
      position:"right",
      content:[
        `<b>Don’t hesitate</b>`,
        `-Get my resume, Hire me, or simply Contact me today! You won’t want
            to miss the chance to create something amazing together!`
      ]
    }
  ],
  CONTACT: [
    {
      contactMethod:"Location",
      description:"Chennai, Tamil Nadu, India"
    },
    {
      contactMethod:"Phone",
      description:"+9789890265"
    },
    {
      contactMethod:"Email",
      description:"imedilipkumar@gmail.com"
    }
  ],
  RESUME: {
    path: "/src/assets/dilip/Cognizant_Logo_Bg.jpg",
  },
};

export default DILIP_PORTFOLIO_DATA;

