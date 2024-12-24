import { Copy, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/Button';
import { GradientText } from './ui/GradientText';

interface FormattedOutputProps {
  title: string;
  text: string;
  transformedText: string;
}

export function FormattedOutput({
  title,
  text,
  transformedText,
}: FormattedOutputProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(transformedText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <div className="backdrop-blur-lg bg-white/5 rounded-xl p-4 border border-white/10 transition-all duration-200 hover:bg-white/10">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-semibold">
          <GradientText>{title}</GradientText>
        </h3>
        <Button onClick={handleCopy}>
          {copied ? (
            <CheckCircle className="w-4 h-4 text-green-400" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
          <span>{copied ? 'Copied!' : 'Copy'}</span>
        </Button>
      </div>
      <div className="bg-gray-800/30 rounded-lg p-3 min-h-[60px] border border-white/10">
        <p className="text-lg">{text ? transformedText : 'Preview'}</p>
      </div>
    </div>
  );
}