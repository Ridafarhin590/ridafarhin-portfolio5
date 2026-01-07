import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Rida Farhin | Software Developer",
  description: "Portfolio of Rida Farhin – Full Stack & MERN Developer",
  authors: [{ name: "Rida Farhin" }],
  icons: {
    icon: "/public/icon.png",       // browser tab iconk
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-slate-800 antialiased dark:bg-[#020617] dark:text-slate-200">

        <Navbar />

        <main className="pt-[96px]">
          {children}
        </main>

      </body>
    </html>
  );
}
