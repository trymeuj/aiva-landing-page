import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-background px-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl mb-6">Page Not Found</h2>
      <p className="mb-8 text-center">Sorry, the page you're looking for doesn't exist or has been moved.</p>
      <Link href="/" className="bg-foreground text-background px-8 py-3 rounded-full hover-effect">
        Go Back Home
      </Link>
    </div>
  );
} 