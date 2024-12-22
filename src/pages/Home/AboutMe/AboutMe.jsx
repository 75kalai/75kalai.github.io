import "./AboutMe.scss";
import DATA from "@/data";

export default function AboutMe() {
  return (
    <div id="about-me">
      <h1 className="section-title center">About Me</h1>
      {DATA.ABOUT_ME.map((item, index) => (
        <AboutBlock key={index + 1} item={item} />
      ))}
    </div>
  );
}

function AboutBlock({ item, index }) {
  return (
    <div className={`about-me-content-${index}`}>
      <div className={`${item.position ?? "left"} text-content`}>
        {item.title && (
          <h3>
            <b>{item.title}</b>
          </h3>
        )}
        {Array.isArray(item.content) ? (
          item.content.map((content, index) => <p key={index} dangerouslySetInnerHTML={{ __html: content }} />)
        ) : (
          <p>{item.content}</p>
        )}
      </div>
    </div>
  );
}
