import { FlexBox, Header } from "appSrc/components";

export default function ErrorPage() {
  return (
    <main>
      <FlexBox
        smWidth="100vw"
        smHeight="100vh"
        smJustifyContent="flex-start"
      >
        <FlexBox smHeight="70vh">
          <Header fontSize="6rem" fontWeight="600">
            ;(
          </Header>
          <Header
            htmlTag="h1"
            fontSize="2.5rem"
            fontWeight="400"
            textAlign="center"
            marginTop="30px"
          >
            not connected
          </Header>
          <Header
            htmlTag="h2"
            fontSize="2.5rem"
            fontWeight="400"
            textAlign="center"
            marginTop="5px"
          >
            to the interwebs.
          </Header>
          <Header
            htmlTag="h2"
            fontSize="1.5rem"
            fontWeight="400"
            textAlign="center"
            marginTop="40px"
          >
            try again after establishing
          </Header>
          <Header
            htmlTag="h2"
            fontSize="1.5rem"
            fontWeight="400"
            textAlign="center"
            marginTop="5px"
          >
            network connection
          </Header>
        </FlexBox>
      </FlexBox>
    </main>
  );
}
