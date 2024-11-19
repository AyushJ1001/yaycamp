import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Navbar from "~/components/navbar";
import { ThemeProvider } from "~/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "~/components/footer";

export const metadata: Metadata = {
  title: "Yay Camp",
  description: "Find your next camp",
  icons: [{ rel: "icon", url: "/favicon.webp" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "hsl(263.4, 70%, 50.4%)", // change this value (you can get it from you're css variables, make sure to include 'hsl' and commas)
        },
      }}
    >
      <html
        lang="en"
        className={`${GeistSans.variable}`}
        suppressHydrationWarning
      >
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
