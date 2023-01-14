import { FC, ReactNode } from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "../themes/global";

interface IAppProvider {
  children: ReactNode;
}

const AppProvider: FC<IAppProvider> = ({ children }) => {
  return (
    <ThemeProvider theme={{}}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default AppProvider;
