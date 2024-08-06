'use client';

import React from 'react';
import { Button } from './ui/button';
import { CheckCircle } from 'lucide-react';

interface ActionButtonProps {
  actionText: string;
}

export default function ResumeButton({ actionText }: ActionButtonProps) {
  return (
    <Button>
      <a
        target='_blank'
        href='https://drive.google.com/file/d/1gkuBRRlDmO8CMb-Ha1YzMsK_xgz-NS9C/view?usp=sharing'
        className='no-underline flex items-center'
      >
        <CheckCircle className='mr-2 h-4 w-4' />
        {actionText}
      </a>{' '}
    </Button>
  );
}
