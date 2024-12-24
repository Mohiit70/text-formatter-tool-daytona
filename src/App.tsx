import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { TextInput } from './components/TextInput';
import { FormattedOutput } from './components/FormattedOutput';
import { transformText } from './utils/textTransforms';
import { Github, Sun, Moon } from 'lucide-react';
import { Button } from './components/ui/Button';

function App() {
  const [inputText, setInputText] = useState('');
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const handleTextChange = (text: string) => {
    setInputText(text);
  };

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <div className="flex justify-end mb-6 space-x-4">
            <Button 
              variant="icon" 
              onClick={() => setIsDark(!isDark)}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </Button>
            <a
              href="https://github.com/Mohiit70/text-formatter-tool-daytona"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View on GitHub"
            >
              <Button variant="icon">
                <Github className="w-5 h-5" />
              </Button>
            </a>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="lg:sticky lg:top-8">
              <TextInput onTextChange={handleTextChange} />
            </div>
            <div className="space-y-6">
              <FormattedOutput
                title="Bold (serif)"
                text={inputText}
                transformedText={transformText.boldSerif(inputText)}
              />
              <FormattedOutput
                title="Bold (sans)"
                text={inputText}
                transformedText={transformText.boldSans(inputText)}
              />
              <FormattedOutput
                title="Italic Bold (serif)"
                text={inputText}
                transformedText={transformText.italicBold(inputText)}
              />
              <FormattedOutput
                title="Medieval"
                text={inputText}
                transformedText={transformText.medieval(inputText)}
              />
              <FormattedOutput
                title="Double-Struck"
                text={inputText}
                transformedText={transformText.doubleStruck(inputText)}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;