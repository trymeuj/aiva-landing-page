import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="w-full bg-[#F6F6F6] sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-[5%] py-5 flex justify-between items-center">
        <Link href="/" className="font-bold text-2xl">
          <span className="text-[#222222]">Aiva</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-10">
          {['Features', 'Use Cases', 'Blog'].map((item) => (
            <Link 
              key={item} 
              href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-[#333333] hover:text-[#222222] transition-colors duration-200 py-2"
            >
              {item}
            </Link>
          ))}
          <Link 
            href="/enroll-now"
            className="bg-[#111111] text-white px-6 py-2.5 rounded-md hover:opacity-90 transition-opacity"
          >
            Enroll Now
          </Link>
        </nav>
        
        <button className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header; 