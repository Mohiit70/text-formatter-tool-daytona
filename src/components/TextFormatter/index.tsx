"use client"

import React from 'react';
import { TextInput } from './TextInput';
import { FormatCard } from './FormatCard';
import { formatters } from '@/lib/formatters';

export const TextFormatter = () => {
  const [inputText, setInputText] = React.useState('');

  const handleCopy = async (text: string) => {
    await navigator.clipboard.writeText(text);
  };

  const handleClear = () => {
    setInputText('');
  };

  return (
    <div className="container mx-auto p-4">
      <TextInput
        value={inputText}
        onChange={setInputText}
        onClear={handleClear}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {formatters.map((formatter) => (
          <FormatCard
            key={formatter.id}
            formatter={formatter}
            text={inputText}
            onCopy={handleCopy}
          />
        ))}
      </div>
    </div>
  );
};
