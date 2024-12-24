import { Type } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-violet-600 to-indigo-600 py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-2">
          <Type className="w-6 h-6 text-white/90" />
          <h1 className="text-xl font-semibold text-white">Text Formatter</h1>
        </div>
        <p className="text-center text-white/80 text-xs mt-0.5">
          Transform your text into beautiful styles
        </p>
      </div>
    </header>
  );
}