
import { Provider } from "@/components/providers/ChakraProvider";

export const metadata = {
  title: "Matossers de Molins de Rei",
  description: "Pàgina web oficial de la Colla castellera Matossers de Molins de Rei",
  icons: {
    icon: [{ url: "/favicon.ico" }],
    shortcut: "/favicon.ico",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="ca" suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
