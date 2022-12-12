import "../styles/globals.css";
import NotificationProvider from "../store/NotificationProvider";

function MyApp({ Component, pageProps }) {
  return (
    <NotificationProvider>
      <Component {...pageProps} />;
    </NotificationProvider>
  );
}
export default MyApp;
