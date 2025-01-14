import "./TopNavbar.scss";
import { MenuUnfoldOutlined } from "@ant-design/icons";
// import { useMediaQuery } from "react-responsive";

export default function TopNavbar() {
  // const isMobile = useMediaQuery({ query: "(max-width: 1000px)" });

  const onClick = () => {
    document.querySelector("#left-navbar").classList.toggle("active")
  };

  // if (isMobile) {
  //   return (
  //     <p>hello</p>
  //   );
  // }
  return (
    <div id="top-navbar">
      <div className="left" onClick={onClick}>
        <MenuUnfoldOutlined />
      </div>
    </div>
  );
}
