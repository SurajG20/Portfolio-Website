import { aboutYou } from '@/lib/data';

export default function Sidebar() {
  return (
    <div className='rounded-xl border bg-card text-card-foreground shadow flex flex-col space-y-4 p-4 h-fit static md:sticky top-24'>
      {/* Title/Name */}
      <p className='font-semibold leading-none tracking-tight'>{aboutYou.name}</p>
      {/* Description */}
      <p className=' text-muted-foreground tracking-tight text-justify sm:text-left'>
        {aboutYou.description}
        <br />
        <a target='_blank' className='mt-4' href='https://github.com/SurajG20'>
          My GitHub
        </a>
      </p>
    </div>
  );
}
