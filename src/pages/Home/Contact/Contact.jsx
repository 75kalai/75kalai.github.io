import "./Contact.scss";
import {
  EnvironmentFilled,
  MailFilled,
  PhoneFilled,  
} from "@ant-design/icons";

import DATA from "@/data";

export default function Contact() {
  const iconMap = {
    Location: <EnvironmentFilled />,
    Email: <MailFilled />,
    Phone: <PhoneFilled />,
  }

  return (
    <div id="contact">
      <h1 className="section-title center">Contact</h1>
      <div className="contact-content">
        {DATA.CONTACT.map((item, index) => (
          <div key={index} className="contact-item">
            <div className="icon">{iconMap[item.contactMethod]}</div>
            <div className="contact-item-content">
              <h2>{item.contactMethod}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
