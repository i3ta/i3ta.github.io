import { Main } from '~/pages/main/main';
import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Aaron Hung — Personal Website' },
    {
      name: 'description',
      content:
        'Computer science + biochemistry student at Georgia Tech, passionate about biotech and healthcare innovation.',
    },
  ];
}

export default function Home() {
  return <Main />;
}
