import { Geist, Geist_Mono, Hammersmith_One } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const hammersmith = Hammersmith_One({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-hammersmith',
});

export const metadata = {
  title: "Abraços Literários",
  description: "Site abraços literários",
  icons: {
    icon: '/logo_abraco_literario.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${geistSans.variable} ${geistMono.variable} ${hammersmith.variable}`}>
        <header>
        </header>
        {children}
      </body>
    </html>
  );
}
