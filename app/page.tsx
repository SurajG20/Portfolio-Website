import ActionButton from "@/components/action-button";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ProjectShowcase from "@/components/project-showcase";
import ResumeButton from "@/components/resume-button";
import Sidebar from "@/components/sidebar";
import SkillOutline from "@/components/skill-outline";
import { Separator } from "@/components/ui/separator";
import WorkShowcase from "@/components/work-showcase";

import {
  Project,
  WorkExperience,
  aboutYou,
  marketingHeadlines,
  projects,
  skills,
  workExperiences,
} from "@/lib/data";

export default function Home() {
  return (
    <div className="md:max-w-5xl mx-auto md:mt-12">
      <Navbar />
      <div className="flex flex-col md:flex-row my-12 mx-10 md:mx-0 space-x-0 md:space-x-12 space-y-10 md:space-y-0">
        <Sidebar />
        <div className="md:min-w-[65vh] min-w-full space-y-12">
          {/* Hero */}
          <section id="home" key="home" className="space-y-6">
            <div className="text-3xl font-bold tracking-tighter">
              {marketingHeadlines.mainHeadline}
            </div>
            <div className="text-lg text-muted-foreground">
              {marketingHeadlines.subHeadline}
            </div>
            <div>
              <Separator className="my-6" />
            </div>
            <div className="flex justify-between md:flex-row flex-col items-center">
              <div className="space-x-3 flex items-center w-full">
                <ActionButton actionText="Hire me" />
                <ResumeButton actionText="Resume" />
              </div>
              <div className="flex flex-col sm:flex-row gap-x-6 w-full mt-6 gap-y-4 sm:mt-0">
                <div className="space-y-2">
                  <h3 className="font-medium leading-none whitespace-nowrap text-lg">
                    {aboutYou.yearsOfExperience}
                  </h3>
                  <p className="text-sm text-muted-foreground">Experience</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium leading-none text-lg">
                    {aboutYou.location}
                  </h3>
                  <p className="text-sm text-muted-foreground">Location</p>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="space-y-3">
                {skills.map((skill) => (
                  <SkillOutline
                    key={skill.text}
                    Icon={skill.icon}
                    text={skill.text}
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground pt-1">Tech stack</p>
            </div>
          </section>
          {/* Projects */}
          <section id="projects" key="projects">
            <h2 className="text-2xl font-bold tracking-tight mb-6">Projects</h2>
            <div>
              <div className="space-y-6">
                {projects.map((project: Project) => (
                  <ProjectShowcase key={project.title} project={project} />
                ))}
              </div>
            </div>
          </section>
          {/* Work */}
          <section id="work" key="work">
            <h2 className="text-2xl font-bold tracking-tight mb-6">Work</h2>
            <div className="rounded-xl border bg-card text-card-foreground shadow-lg">
              <div className="p-8 space-y-8">
                {workExperiences.map(
                  (experience: WorkExperience, index: number) => (
                    <WorkShowcase
                      key={experience.company}
                      experience={experience}
                      whetherlast={workExperiences.length == index + 1}
                    />
                  )
                )}
              </div>
            </div>
          </section>
          {/* Contact */}
          <section id="contact" key="contact">
            <h2 className="text-2xl font-bold tracking-tight mb-6">Contact</h2>
            <div className="rounded-xl border bg-card text-card-foreground shadow-lg">
              <p className="p-8 text-base text-muted-foreground">
                Best way to reach me is through:{" "}
                <a href={`mailto:${aboutYou.email}`} className="hover:underline text-primary">
                  {aboutYou.email}
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
