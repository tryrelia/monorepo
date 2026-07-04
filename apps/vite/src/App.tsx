import { Routes, Route } from 'react-router-dom';
import NotFound from '@/pages/NotFound';

function Home() {
  return (
    <div className="min-h-screen bg-canvas flex items-center justify-center p-6 selection:bg-primary selection:text-on-primary">
      <div className="text-center">
        <h1 className="font-cal text-5xl md:text-6xl font-bold text-ink tracking-tight mb-4">
          Hello User
        </h1>
        <p className="font-sans text-sm text-muted max-w-sm mx-auto">
          Welcome to Vite! 
        </p>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
