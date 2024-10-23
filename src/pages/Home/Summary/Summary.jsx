import "./Summary.scss";
// import wiproLogo from "../../assets/Wipro_Primary_Logo_Color_RGB.svg";
// import ctsLogo from "../../assets/Cognizant-Logo.png";
import wiproLogo from "../../../assets/Wipro_Logo_Bg.avif";
import ctsLogo from "../../../assets/Cognizant_Logo_Bg.jpg";

function Summary() {
  return (
    <div className="home-summary">
      <div className="box box-1 center">
        <div className="title">10+</div>
        <div className="desc">years of IT experience</div>
      </div>
      <div className="box box-2 center">
        <p className="title">Angular + Java</p>
        <p className="title title-2">Expert</p>
      </div>
      <div className="box box-3">
        <div className="title">
          A Reliable Professional that your team always needed.
        </div>
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          quia! Aspernatur aut impedit dignissimos quod soluta maxime pariatur,
          repellat nam hic quae, aliquid qui sapiente animi illum laudantium
          numquam amet adipisci dolor. Libero, aut non. Ut aliquam reprehenderit
          quidem minus.
        </p>
        <div className="button text-button">know more</div>
      </div>
      <div className="box box-4 center">
        <div className="title">6+</div>
        <div className="desc">long-term projects</div>
      </div>
      <div className="box box-5 center">
        <div className="title">5+</div>
        <div className="desc-group">
          <div className="desc">years of professional</div>
          <div className="desc">
            <b>agile</b> experience{" "}
          </div>
        </div>
      </div>
      <div className="box box-6 center">
        <div className="title">Companies worked with</div>
        <div className="logo-container">
          <div className="logo">
            <img src={wiproLogo} alt="wipro logo" />
            <div className="badge center">
              <span className="num">3+</span>
              <span className="years">years</span>
            </div>
          </div>
          <div className="logo">
            <img src={ctsLogo} alt="cognizant logo" />
            <div className="badge center">
              <span className="num">7+</span>
              <span className="years">years</span>
            </div>
          </div>
        </div>
      </div>
      <div className="box box-7">7</div>
      <div className="box box-8">8</div>
      <div className="box box-9">9</div>
      <div className="box box-10">10</div>
    </div>
  );
}
1;

export default Summary;
