import type { AppProps } from "next/app";

import GlobalStyle from "shell/Global";
import { CoreLayout, MainContainer } from "shell/Basement";
import ToolBar from "shell/Toolbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <CoreLayout>
        <MainContainer>
          <ToolBar />
          <Component {...pageProps} />
        </MainContainer>
      </CoreLayout>
    </>
  );
}

export default MyApp;
