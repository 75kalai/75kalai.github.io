import { useTranslation } from "react-i18next";
import "./Summary.scss";
import DATA from "@/data";

function Summary() {
  const { t } = useTranslation();
  return (
    <div className="home-summary">
      <MiniBox
        className="box-1"
        title1={DATA.SUMMARY.box1.title1}
        title2={DATA.SUMMARY.box1.title2}
      />
      <MiniBox
        className="box-2"
        title1={DATA.SUMMARY.box2.title1}
        title2={DATA.SUMMARY.box2.title2}
      />
      <SummaryBox
        className="box-3"
        title={DATA.SUMMARY.box3.title}
        content={DATA.SUMMARY.box3.content}
        buttonText={DATA.SUMMARY.box3.button}
      />
      <MiniBox
        className="box-4"
        title1={DATA.SUMMARY.box4.title1}
        title2={DATA.SUMMARY.box4.title2}
      />
      <MiniBox
        className="box-5"
        title1={DATA.SUMMARY.box5.title1}
        title2={DATA.SUMMARY.box5.title2}
      />
      <CompaniesBox
        className="box-6"
        companies={DATA.SUMMARY.box6}
      />
      
      <MiniBox
        className="box-7"
        title1={DATA.SUMMARY.box7.title1}
        title2={DATA.SUMMARY.box7.title2}
      />
      
      <MiniBox
        className="box-8"
        title1={DATA.SUMMARY.box8.title1}
        title2={DATA.SUMMARY.box8.title2}
      />
      
      <MiniBox
        className="box-9"
        title1={DATA.SUMMARY.box9.title1}
        title2={DATA.SUMMARY.box9.title2}
      />
      
      <MiniBox
        className="box-10"
        title1={DATA.SUMMARY.box10.title1}
        title2={DATA.SUMMARY.box10.title2}
      />
    </div>
  );
}

function MiniBox({ className, title1, title2 }) {
  return (
    <div className={`box ${className} center`}>
      <div className="title">{title1}</div>
      <div
        className="desc desc-center"
        dangerouslySetInnerHTML={{ __html: title2 }}
      />
    </div>
  );
}

function SummaryBox({ className, title, content, buttonText }) {
  return (
    <div className={`box ${className}`}>
      <div className="title">{title}</div>
      <p className="desc">{content}</p>
      <div className="button text-button">{buttonText}</div>
    </div>
  );
}

function CompaniesBox({ className, companies }) {
  return (
    <div className={`box ${className} center`}>
      <div className="title">Companies worked with</div>
      <div className="logo-container">
        {companies.map((obj) => (
          <div className="logo">
            <img src={obj.logoPath} alt={obj.imgAltText} />
            <div className="badge center">
              <span className="num">{obj.experience}</span>
              <span className="years">years</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Summary;
