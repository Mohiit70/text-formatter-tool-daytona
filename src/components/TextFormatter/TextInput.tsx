"use client"

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
}

export const TextInput: React.FC<TextInputProps> = ({ value, onChange, onClear }) => {
  return (
    <Card className="mb-8">
      <CardContent className="p-6">
        <textarea
          className="w-full min-h-[200px] p-4 bg-background border rounded-md focus:outline-none focus:ring-2 resize-none"
          placeholder="Type or paste your text here..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <Button
          variant="outline"
          onClick={onClear}
          className="mt-4"
        >
          Clear
        </Button>
      </CardContent>
    </Card>
  );
};
