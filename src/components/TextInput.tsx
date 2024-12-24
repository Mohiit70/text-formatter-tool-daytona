import { useState } from 'react';
import { Eraser } from 'lucide-react';
import { Button } from './ui/Button';
import { GradientText } from './ui/GradientText';

interface TextInputProps {
  onTextChange: (text: string) => void;
}

export function TextInput({ onTextChange }: TextInputProps) {
  const [text, setText] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setText(newText);
    onTextChange(newText);
  };

  const handleClear = () => {
    setText('');
    onTextChange('');
  };

  return (
    <div className="space-y-4 backdrop-blur-lg bg-white/5 p-6 rounded-2xl border border-white/10">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">
          <GradientText>Input Text</GradientText>
        </h2>
        <Button onClick={handleClear}>
          <Eraser className="w-4 h-4" />
          <span>Clear</span>
        </Button>
      </div>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Type or paste your text here..."
        className="w-full h-48 p-4 bg-gray-800/30 text-white rounded-xl focus:ring-2 focus:ring-purple-500/50 focus:outline-none border border-white/10 placeholder-gray-400 transition-all duration-200"
      />
    </div>
  );
}