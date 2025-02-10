import { ThemeProvider } from "next-themes";
import TopBar from "../components/TopBar";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    // attribute="class" 태그를 지정해서
    // 메인 <html> 태그에 "dark" CSS 클래스를 적용합니다.
    <ThemeProvider attribute="class">
      <div className="dark:bg-gray-900 w-full min-h-screen">
        <TopBar />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
