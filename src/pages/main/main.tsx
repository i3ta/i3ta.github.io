import { useEffect, useRef, useState } from 'react';
import { DNABackground } from '@/components/dnaBackground';
import { useScrollAbsolute } from '@/hooks/useScrollAbsolute';
import { useScale } from '@/hooks/useScale';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { HeroContent } from '@/components/heroContent';
import { Button } from '@/components/ui/button';
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconMail,
} from '@tabler/icons-react';
import { Loader } from '@/components/loader';
import { useLoader } from '@/contexts/loaderContext';
import { Experience } from '@/components/experience';
import { Projects } from '@/components/projects';
import { Publications } from '@/components/publications';
import { Footer } from '@/components/footer';
import { useWindowSize } from '@/hooks/useWindowSize';
import { About } from '@/components/about';
import { cn } from '@/lib/utils';

export const Main = () => {
  const { loaded, setLoaded } = useLoader();

  const scrollY = useScrollAbsolute();
  const { width } = useWindowSize();
  const mobileView = width < 920;

  /* Shrinking background animation */
  const bgWidth = useScale(scrollY, [0, 400], [100, 40]);
  const bgHeight = useScale(scrollY, [0, 400], [100, 90]);
  const bgRight = useScale(scrollY, [0, 400], [0, 5]);
  const bgTop = useScale(scrollY, [0, 400], [0, 5]);
  const bgBorderRadius = useScale(scrollY, [0, 400], [0, 20]);

  /* Model stop scrolling position */
  const [heroHeight, setHeroHeight] = useState(0);
  const [dnaHeight, setDnaHeight] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null!);
  const dnaRef = useRef<HTMLDivElement>(null!);
  const stopAt = heroHeight - dnaHeight;
  const shouldFix = scrollY < stopAt;

  console.log(shouldFix, bgRight);

  const bgContainerStyles: React.CSSProperties = mobileView
    ? {
        width: '100vw',
        position: shouldFix ? 'fixed' : 'absolute',
        top: shouldFix ? `0` : `${stopAt}px`,
      }
    : {
        position: shouldFix ? 'fixed' : 'absolute',
        width: `${bgWidth}vw`,
        height: `${bgHeight}vh`,
        right: `${bgRight}vw`,
        top: shouldFix ? `${bgTop}vh` : `calc(${bgTop}vh + ${stopAt}px)`,
        borderRadius: `${bgBorderRadius}px`,
      };

  useEffect(() => {
    const getDims = () => {
      if (heroRef.current) {
        setHeroHeight(heroRef.current.offsetHeight + 180);
      }
      if (dnaRef.current) {
        setDnaHeight(dnaRef.current.offsetHeight);
      }
    };

    window.addEventListener('resize', getDims);
    getDims();
    return () => window.removeEventListener('resize', getDims);
  }, [heroRef, dnaRef]);

  return (
    <>
      {/* Loader */}
      <Loader visible={!loaded} />

      {/* Page */}
      <div className="relative w-screen flex flex-row justify-center pt-16 overflow-hidden">
        {/* Background layers */}
        <div className="fixed top-0 h-screen w-screen bg-gradient-to-br from-neutral-900 to-neutral-950 -z-20" />
        <div
          className="h-screen -z-10 overflow-hidden border border-black shadow-black !shadow-lg"
          style={bgContainerStyles}
        >
          <DNABackground setLoaded={setLoaded} ref={dnaRef} />
        </div>
        <div className="absolute top-8 right-8 flex flex-row gap-4">
          <Button variant="ghost" size="icon" className="cursor-pointer">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/chia-chien-hung-78456a285"
            >
              <IconBrandLinkedin className="!w-6 !h-6" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="cursor-pointer">
            <a target="_blank" rel="noreferrer" href="https://github.com/i3ta">
              <IconBrandGithub className="!w-6 !h-6" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="cursor-pointer">
            <a href="mailto:ahx5x16@gmail.com">
              <IconMail className="!w-6 !h-6" />
            </a>
          </Button>
        </div>

        {/* Content */}
        <div className="relative w-9/10 max-w-5xl flex flex-col items-start gap-8">
          <div className="relative mt-36">
            <HeroContent ref={heroRef} mobile={mobileView} />
          </div>
          <div className="relative w-full flex flex-col items-center">
            <Tabs
              defaultValue="about"
              className={cn('max-w-5xl', mobileView ? 'w-full' : 'w-10/12')}
            >
              <TabsList className="w-full sticky top-8 z-20">
                <TabsTrigger value="about">About Me</TabsTrigger>
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="publications">Publications</TabsTrigger>
              </TabsList>
              <TabsContent value="about">
                <About />
              </TabsContent>
              <TabsContent value="experience">
                <Experience />
              </TabsContent>
              <TabsContent value="projects">
                <Projects />
              </TabsContent>
              <TabsContent value="publications">
                <Publications />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
