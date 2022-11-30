import { Global, css, useTheme } from "@emotion/react";

const GlobalStyle = () => {
  // const theme = useTheme();
  // const theme = null;
  return (
    <Global
      styles={css`
        *,
        *::before,
        *::after {
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          padding: 0;
          margin: 0;

          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;

          scrollbar-color: #000 transparent;
        }

        *::-webkit-scrollbar {
          height: 0.3rem;
          width: 0.3rem;
        }

        *::-webkit-scrollbar-thumb {
          background: #000;
          border-radius: 0.3rem;
        }

        /* ::selection {
          background: "";
        }
        ::-moz-selection {
          background: "";
        } */

        html {
          height: 100%;
        }

        body {
          background: "";
          color: "";
          height: 100vh;
        }

        button {
          cursor: pointer;
        }

        a {
          text-decoration: none;
          cursor: pointer;
        }

        .pointer {
          cursor: pointer;
        }

        .text-center {
          text-align: center;
        }
      `}
    />
  );
};

export default GlobalStyle;
