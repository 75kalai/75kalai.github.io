import { useTranslation } from "react-i18next";
import "./Summary.scss";
import DATA from "@/data";

function Summary() {
  const { t } = useTranslation();
  return (
    <div className="home-summary">
      <MiniBox className="box-1" data={DATA.SUMMARY.box1} />
      <MiniBox className="box-2" data={DATA.SUMMARY.box2} />
      <SummaryBox
        className="box-3"
        title={DATA.SUMMARY.box3.title}
        content={DATA.SUMMARY.box3.content}
        buttonText={DATA.SUMMARY.box3.button}
      />
      <MiniBox className="box-4" data={DATA.SUMMARY.box4} />
      <MiniBox className="box-5" data={DATA.SUMMARY.box5} />
      <CompaniesBox className="box-6" companies={DATA.SUMMARY.box6} />
      <MiniBox className="box-7" data={DATA.SUMMARY.box7} />
      <MiniBox className="box-8" data={DATA.SUMMARY.box8} />
      <MiniBox className="box-9" data={DATA.SUMMARY.box9} />
      <MiniBox className="box-10" data={DATA.SUMMARY.box10} />
    </div>
  );
}

function MiniBox({ className, data }) {
  const onClickHandler= ()=>{
    if(data.link){
      window.open(data.link, "_blank");
    }
  }
  return (
    <div className={`box ${className} center ${data.link?"box-link":""}`} onClick={onClickHandler}>
      <h1 className="title">{data.title1}</h1>
      <div className="desc desc-center">{data.title2}</div>
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
