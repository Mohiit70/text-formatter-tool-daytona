"use client"

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy } from 'lucide-react';
import { FormatterType } from '@/types';

interface FormatCardProps {
  formatter: FormatterType;
  text: string;
  onCopy: (text: string) => void;
}

export const FormatCard: React.FC<FormatCardProps> = ({ formatter, text, onCopy }) => {
  const formattedText = formatter.transform(text || 'Preview text');

  return (
    <Card className="relative">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">{formatter.label}</h3>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onCopy(formattedText)}
          >
            <Copy className="h-4 w-4" />
          </Button>
        </div>
        <div className="min-h-[40px] break-words">
          {formattedText}
        </div>
      </CardContent>
    </Card>
  );
};