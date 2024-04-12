import './globals.css';
import './bg.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ScrollToTopButton from '../../components/ScrollToTopButton';

export const metadata = {
  title: 'Lalaween',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Navbar />
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  );
}