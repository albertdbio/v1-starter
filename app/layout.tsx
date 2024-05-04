import "./globals.css"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Navbar } from "./components/nav"
import { TailwindIndicator } from "./components/tailwind-indicator"
import Footer from "./components/footer"

export const metadata: Metadata = {
  title: "Albert | AI Engineer",
  description: "Albert is a software engineer and writer working in AI.",
}

const cx = (...classes: string[]) => classes.filter(Boolean).join(" ")

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={cx(
        "text-black bg-white dark:text-white dark:bg-black",
        GeistSans.variable,
        GeistMono.variable,
      )}
    >
      <body className="antialiased max-w-xl px-4 lg:mx-auto">
        <main className="flex-auto min-w-0 pt-8 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
          <TailwindIndicator />
        </main>
      </body>
    </html>
  )
}
