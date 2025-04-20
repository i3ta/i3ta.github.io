import { Badge } from '@/components/ui/badge';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import type { Project } from '~/types/project';

const ProjectCard = ({ item }: { item: Project }) => {
  return (
    <Card className="p-4 flex flex-col gap-2">
      <CardTitle className="text-lg">{item.name}</CardTitle>
      {item.summary && <CardDescription>{item.summary}</CardDescription>}
      <div className="flex flex-row flex-wrap gap-2 py-2">
        {item.tags?.map((tag, i) => (
          <Badge key={i}>{tag}</Badge>
        ))}
      </div>
    </Card>
  );
};

export const Projects = () => {
  const projects: Array<Project> = [
    {
      name: 'Pin Preview',
      summary:
        'An app on the Snap Spectacles AR glasses to identify chips and get datasheets.',
      tags: ['Snap Spectacles', 'AR', 'Computer Vision'],
    },
    {
      name: 'Lamieux Website',
      summary:
        'A website for the Taiwanese low-pressure molding company, Lamieux.',
      tags: ['UI/UX', 'Fullstack', 'Next.js'],
    },
    {
      name: 'Frame by Frame',
      summary:
        'A photobooth website that allows you take, edit, and save photos however you like.',
      tags: ['WIP', 'Fullstack', 'Computer Vision'],
    },
  ];

  return (
    <div className="w-full max-w-4xl flex flex-col items-center py-8 gap-8">
      <h1 className="text-4xl font-bold bg-linear-to-r from-neutral-100 to-neutral-300 text-transparent bg-clip-text">
        Projects
      </h1>
      <div className="w-full p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {projects.map((project, i) => (
          <ProjectCard key={i} item={project} />
        ))}
      </div>
    </div>
  );
};
