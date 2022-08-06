import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";
import LoadingScreen from "../components/shared/LoadingScreen";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading && loading ? (
        <LoadingScreen />
      ) : (
        <ThemeProvider enableSystem={true} attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      )}
    </>
  );
}

export default MyApp;
