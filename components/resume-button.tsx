'use client';

import React from 'react';
import { Button } from './ui/button';
import { CheckCircle } from 'lucide-react';

interface ActionButtonProps {
  actionText: string;
}

export default function ResumeButton({ actionText }: ActionButtonProps) {
  return (
    <Button asChild>
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="no-underline flex items-center"
      >
        <CheckCircle className="mr-2 h-4 w-4" />
        {actionText}
      </a>
    </Button>
  );
}