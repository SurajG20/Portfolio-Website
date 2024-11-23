import { WorkExperience } from "@/lib/data";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";
import DateRange from "./date-range";

interface WorkShowcaseProps {
  experience: WorkExperience;
  whetherlast: boolean; 
}

export default function WorkShowcase({
  experience,
  whetherlast,
}: WorkShowcaseProps) {
  const { company, logo, years, description } = experience;

  return (
    <article className="group transition-all duration-300 hover:bg-accent/50 rounded-lg p-2">
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage src={logo} alt={`${company} logo`} />
              <AvatarFallback>{company.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h3 className="font-semibold leading-none tracking-tight">
                {company}
              </h3>
            
            </div>
          </div>
          <DateRange date={years} />
        </div>
        <p className="text-sm text-muted-foreground">
          {description}
        </p>
        {!whetherlast && <Separator className="mt-4" />}
      </div>
    </article>
  );
}
