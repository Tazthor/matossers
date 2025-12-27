
import { Provider } from "@/components/providers/ChakraProvider";

export const metadata = {
  title: "Òmnium Cultural, Catalunya Nord",
  description: "Òmnium Cultural | Catalunya Nord",
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
