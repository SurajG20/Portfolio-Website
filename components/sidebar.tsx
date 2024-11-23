import { aboutYou } from '@/lib/data';
import { Github, Linkedin } from 'lucide-react';
import { Button } from './ui/button';

export default function Sidebar() {
  return (
    <div className='rounded-xl border bg-card text-card-foreground shadow flex flex-col space-y-4 p-6 h-fit static md:sticky top-24'>
      {/* Title/Name */}
      <h2 className='text-xl font-semibold tracking-tight'>{aboutYou.name}</h2>
      
      {/* Description */}
      <p className='text-sm text-muted-foreground leading-relaxed'>
        {aboutYou.description}
      </p>

      {/* Social Links */}
      <div className='flex gap-2 pt-2'>
        <Button variant="outline" size="icon" asChild>
          <a 
            href={aboutYou.github}
            target='_blank'
            rel='noopener noreferrer'
            aria-label='GitHub Profile'
          >
            <Github className='h-4 w-4' />
          </a>
        </Button>

        <Button variant="outline" size="icon" asChild>
          <a
            href={aboutYou.linkedin}
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn Profile'
          >
            <Linkedin className='h-4 w-4' />
          </a>
        </Button>
      </div>
    </div>
  );
}
