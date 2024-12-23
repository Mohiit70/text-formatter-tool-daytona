import React from 'react';
import { ThemeToggle } from './ThemeToggle';

export const Header = () => {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
          Bold Text Generator
        </h1>
        <ThemeToggle />
      </div>
    </header>
  );
};