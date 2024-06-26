import "@/styles/scss/main.scss";
import Layout from "../components/PageLayout/PageLayout";
import { SessionProvider } from "next-auth/react";
import { useEffect } from "react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  async function getUserTheme(){
    const body = document.querySelector("body");

    const response = await fetch('/api/theme')
    const data = await response.json();
    body.className = data.theme || 'default';
  }

  useEffect(() => {
    getUserTheme();
  }, []);

  return (
    <SessionProvider session={session}>
      <Layout showDeleteOverlay={() => setShowDeleteOverlay((prev) => !prev)}>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
