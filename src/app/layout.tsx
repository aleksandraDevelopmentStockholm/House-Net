import { ThemeProvider } from "@/contexts/ThemeContext";
import { getTheme } from "@/lib/getTheme";
import { ClientInit } from "./client-init";
import { ThemeWrapper } from "./theme-wrapper";
import "@radix-ui/themes/styles.css";
import "./globals.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = await getTheme();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        <ClientInit />
        <ThemeProvider initialTheme={theme}>
          <ThemeWrapper>{children}</ThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
