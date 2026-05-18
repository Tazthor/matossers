import Footer from "@/components/general/Footer";
import "../../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
