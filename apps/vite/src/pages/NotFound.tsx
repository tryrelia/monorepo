import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-canvas flex items-center justify-center p-6 selection:bg-primary selection:text-on-primary">
      <div className="text-center">
        <h1 className="font-cal text-9xl font-bold text-primary mb-4">404</h1>
        <h2 className="font-cal text-3xl md:text-4xl font-bold text-ink mb-4">
          Page Not Found
        </h2>
        <p className="font-sans text-base text-muted max-w-sm mx-auto mb-8">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button>Go Back Home</Button>
        </Link>
      </div>
    </div>
  );
}
