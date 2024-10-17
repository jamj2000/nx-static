import localFont from "next/font/local";
import "./globals.css";
import MenuPrincipal from "@/components/menu-principal";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata = {
  title: "Información tutorial",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} antialiased h-screen flex`} >

        <aside className="w-[310px] overflow-y-auto">
          <MenuPrincipal />
        </aside>
        <main className="grow">
          {children}
        </main>

      </body>
    </html>
  );
}
