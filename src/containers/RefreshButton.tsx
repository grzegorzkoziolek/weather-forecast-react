import { Header } from "appSrc/components";
import { useNavigate } from "react-router-dom";

export default function RefreshButton() {
  const navigate = useNavigate();

  return (
    <Header
      onClick={() => navigate("/")}
      htmlTag="a"
      fontSize="2rem"
      fontWeight="400"
      smFontColor="red"
      lgFontColor="red"
      position="absolute"
      top="20px"
      right="20px"
      cursor="pointer"
    >
      refresh
    </Header>
  );
}
