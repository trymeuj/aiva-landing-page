import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import BlogSection from '@/components/BlogSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F6F6F6] flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeatureSection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}
