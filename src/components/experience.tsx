import type { TimelineItem } from '@/types/timelineItem';
import { Timeline } from './timeline';

import isbDescription from '@/docs/isb.md';
import coskunDescription from '@/docs/coskun.md';
import siplabDescription from '@/docs/siplab.md';
import bsdpDescription from '@/docs/bsdp.md';

export const Experience = () => {
  const items: Array<TimelineItem> = [
    {
      role: 'Student Researcher',
      organization: 'Integrative Systems Biology Lab @ Georgia Tech',
      startDate: new Date('2024-12-01'),
      tags: ['Computatational Biology', 'HPC', 'C/C++'],
      description: isbDescription,
    },
    {
      role: 'Research Assistant',
      organization: 'Coskun Lab @ Georgia Tech',
      startDate: new Date('2024-12-01'),
      tags: ['Immunofluorescence staining', 'Wet lab'],
      description: coskunDescription,
    },
    {
      role: 'Student Researcher',
      organization: 'SIPLab @ Georgia Tech',
      startDate: new Date('2024-05-01'),
      tags: ['Computatational Biology', 'Deep Learning', 'PyTorch'],
      description: siplabDescription,
    },
    {
      role: 'Software Engineering Lead',
      organization: 'Molecular Evolution Core Lab @ Georgia Tech',
      startDate: new Date('2024-01-01'),
      tags: ['Fullstack Development', 'MERN'],
      description: bsdpDescription,
    },
    {
      role: 'Cancer Research Intern',
      organization: 'Institute of Statistical Science @ Academia Sinica',
      startDate: new Date('2021-03-01'),
      endDate: new Date('2023-08-01'),
      tags: ['Computatational Biology', 'HPC', 'C/C++', 'NGS Data Analysis'],
    },
  ];

  return (
    <div className="w-full max-w-4xl flex flex-col items-center py-8 gap-8">
      <h1 className="gradient-heading">Experience</h1>
      <Timeline items={items} />
    </div>
  );
};
