import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "store";

import GlobalStyle from "shell/Global";
import { CoreLayout, MainContainer } from "shell/Basement";
import ToolBar from "shell/Toolbar";

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <CoreLayout>
        <MainContainer>
          <ToolBar />
          <Component {...pageProps} />
        </MainContainer>
      </CoreLayout>
    </Provider>
  );
}

export default App;
