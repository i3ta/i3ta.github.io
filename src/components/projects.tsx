import { Badge } from '@/components/ui/badge';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import type { Project } from '@/types/project';
import { IconArrowRight } from '@tabler/icons-react';
import { useState } from 'react';

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
    {
      name: 'Doc McQuery',
      summary:
        "Website that compares a patient's symptoms with a database of electronic medical records, finds related case studies, and presents it all in one clean interface.",
      description:
        'In medicine, knowledge is constantly evolving as new conditions are discovered and innovative treatments are developed. Case studies, which are detailed examinations of individual or group patient cases, are one of the richest sources of this evolving knowledge. However, busy healthcare professionals often lack the time to sift through and analyze these studies in detail. Inspired to bridge this gap, we created Doc McQuery, a service designed to streamline the search for relevant case studies, synthesize their insights, and deliver them efficiently. In addition to searching for case studies in reputable medical sources, such as PubMed, we analyze all the electronic medical records (EMRs) within the hospital to find any similar cases, providing health care professionals with as much information in as little time as possible. By reducing the time doctors spend searching, Doc McQuery empowers them to focus more on personalized patient care and make better informed clinical decisions.',
      tags: [
        'HackGT 12 Impiricus 2nd Place',
        'Text Embedding',
        'Artificial Intelligence',
      ],
      link: 'https://github.com/hhsiao24/Doc-McQuery',
      image: '/doc-mcquery-results.jpg',
    },
  ];

  return (
    <div className="w-full max-w-4xl flex flex-col items-center py-8 gap-8">
      <h1 className="gradient-heading">Projects</h1>
      <div className="w-full p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {projects.map((project, i) =>
          project.description ? (
            <ProjectCard key={i} item={project} popup />
          ) : project.link ? (
            <a href={project.link}>
              <ProjectCard key={i} item={project} />
            </a>
          ) : (
            <ProjectCard key={i} item={project} />
          )
        )}
      </div>
    </div>
  );
};

const ProjectCard = ({
  item,
  popup = false,
}: {
  item: Project;
  popup?: boolean;
}) => {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <>
      <Card
        className={cn('p-4 flex flex-col gap-2', popup ? 'cursor-pointer' : '')}
        onClick={() => popup && setPopupOpen(true)}
      >
        <CardTitle className="text-lg">{item.name}</CardTitle>
        {item.summary && <CardDescription>{item.summary}</CardDescription>}
        <div className="flex flex-row flex-wrap gap-2 py-2">
          {item.tags?.map((tag, i) => (
            <Badge key={i}>{tag}</Badge>
          ))}
        </div>
      </Card>
      {popup && (
        <ProjectPopup open={popupOpen} setOpen={setPopupOpen} item={item} />
      )}
    </>
  );
};

const ProjectPopup = ({
  open,
  setOpen,
  item,
}: {
  open: boolean;
  setOpen: (v: boolean) => any;
  item: Project;
}) => {
  return (
    open && (
      <div
        className={cn(
          'fixed w-screen h-screen top-0 left-0 z-100',
          'bg-black/20 backdrop-blur-sm',
          'flex items-center justify-center'
        )}
        onClick={() => setOpen(false)}
      >
        <Card
          className="block p-8 max-w-3xl w-11/12 clear-both"
          onClick={(e) => e.stopPropagation()}
        >
          {item.image && (
            <img
              src={item.image}
              alt={`${item.name} image`}
              className="w-80 mb-4 md:float-right md:ml-4"
            />
          )}
          <CardTitle className="text-2xl">{item.name}</CardTitle>
          <div className="flex flex-row flex-wrap gap-2 my-4">
            {item.link && (
              <a href={item.link} target="_blank">
                <Badge>
                  View <IconArrowRight />
                </Badge>
              </a>
            )}
            {item.tags?.map((tag) => (
              <Badge variant="outline">{tag}</Badge>
            ))}
          </div>
          <CardDescription>{item.description}</CardDescription>
        </Card>
      </div>
    )
  );
};
