import { Geist, Geist_Mono, Hammersmith_One, Alexandria } from "next/font/google";
import "./globals.css";
import AuthProvider from './providers/AuthProvider'; 

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

const alexandria = Alexandria({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // escolha os pesos que quiser
  display: "swap",
  variable: "--font-alexandria",
});

export const metadata = {
  title: "Abraço literário",
  description: "Site abraços literários",
  icons: {
    icon: '/logo_abraco_literario.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${geistSans.variable} ${geistMono.variable} ${hammersmith.variable} ${alexandria.variable}`}>
        <header>
        </header>
          <AuthProvider>
             {children}
          </AuthProvider>
        
      </body>
    </html>
  );
}
