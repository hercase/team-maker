import "styles/globals.css";
import "styles/tailwind.css";
import "styles/date-picker.css";
import styled, { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#7f5af0",
    primaryDark: "#171f6d",
    secondary: "#2dd4bf",
    accent: "#e45858",
    background: "#16161a",
    backgroundSecondary: "#242629",
    headline: "#fffffe",
    paragraph: "#94a1b2",
  },
  radius: "0.5rem",
};

const StyledLayout = styled.div`
  background: ${(props) => props.theme.colors.primaryDark};
  color: ${(props) => props.theme.colors.paragraph};
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 400;
`;

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledLayout>
        <Component {...pageProps} />
      </StyledLayout>
    </ThemeProvider>
  );
};

export default MyApp;
