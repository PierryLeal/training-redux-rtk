import { DefaultPageStyle, NavBarStyle } from "./DefaultPage.style";
import { ReactElement } from "react";

const DefaultPage: React.FC<{ children: ReactElement }> = ({ children }) => {
  console.log("DefaultPage...");
  return (
    <DefaultPageStyle>
      <NavBarStyle.Container>
        <NavBarStyle.Content></NavBarStyle.Content>
      </NavBarStyle.Container>
      {children}
    </DefaultPageStyle>
  );
};

export default DefaultPage;
