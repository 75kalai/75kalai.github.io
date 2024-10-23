import { useMediaQuery } from "react-responsive";

export default function TopNavbar() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  if (isMobile) {
    return <div>TopNavbar</div>;
  }
  return null;
}
