import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="w-full bg-background sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-content mx-auto px-container py-8 flex justify-between items-center">
        <Link href="/" className="font-bold text-2xl">
          <span className="text-foreground">Aiva</span>
        </Link>
        
        <nav className="hidden md:flex space-x-10">
          {['Features', 'Use Cases', 'Blog'].map((item) => (
            <Link 
              key={item} 
              href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-secondary hover:text-foreground transition-colors duration-200"
            >
              {item}
            </Link>
          ))}
          <Link 
            href="/enroll-now"
            className="bg-buttonBg text-buttonText px-nav-button-padding-x py-nav-button-padding-y rounded-button primary-button"
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