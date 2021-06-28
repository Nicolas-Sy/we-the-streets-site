import Navbar from '@/features/navbarContribute';
import Footer from '@/features/footerMain';

export default function Layout({ children }) {
  return (
    <div className="">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
