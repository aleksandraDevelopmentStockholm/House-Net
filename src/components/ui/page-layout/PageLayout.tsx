import { Box, Container, Heading } from "@radix-ui/themes";
import Link from "next/link";
import { ReactNode } from "react";
import { SkipNavigation } from "../skip-navigation";
import { Header } from "../header";
import { Footer } from "../footer";
interface SkipLink {
  label: string;
  href: string;
}

interface PageLayoutProps {
  children: ReactNode;
  skipLinks: SkipLink[];
}

export function PageLayout({ children, skipLinks }: PageLayoutProps) {
  return (
    <>
      <SkipNavigation links={skipLinks} />
      <Box style={{ backgroundColor: "var(--accent-5)" }}>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </Box>
    </>
  );
}
