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

          scrollbar-color: "";
          font-family: "";
        }

        *::-webkit-scrollbar {
          height: 0.3rem;
          width: 0.3rem;
        }

        *::-webkit-scrollbar-thumb {
          background: "";
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
