import { DNABackground } from '~/components/dnaBackground';
import { useScrollAbsolute } from '~/hooks/useScrollAbsolute';
import { useScale } from '~/hooks/useScale';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { HeroContent } from '~/components/heroContent';
import { Button } from '@/components/ui/button';
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconMail,
} from '@tabler/icons-react';

export const Main = () => {
  const scrollY = useScrollAbsolute();

  /* Shrinking background animation */
  const bgWidth = useScale(scrollY, [0, 400], [100, 40]);
  const bgHeight = useScale(scrollY, [0, 400], [100, 90]);
  const bgRight = useScale(scrollY, [0, 400], [0, 5]);
  const bgTop = useScale(scrollY, [0, 400], [0, 5]);
  const bgBorderRadius = useScale(scrollY, [0, 400], [0, 20]);
  const bgScroll = useScale(scrollY, [450, 2000], [0, -1550]);

  return (
    <div className="relative w-screen flex flex-row justify-center pt-16">
      {/* Background layers */}
      <div className="fixed top-0 h-screen w-screen bg-gradient-to-br from-neutral-900 to-neutral-950 -z-20" />
      <div
        className="fixed h-screen -z-10 overflow-hidden border border-black shadow-black !shadow-lg"
        style={{
          width: `${bgWidth}vw`,
          height: `${bgHeight}vh`,
          right: `${bgRight}vw`,
          top: `calc(${bgTop}vh + ${bgScroll}px)`,
          borderRadius: `${bgBorderRadius}px`,
        }}
      >
        <DNABackground cameraAngle={2.8} />
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
          <HeroContent />
        </div>
        <div className="relative w-full flex flex-col items-center">
          <Tabs defaultValue="experience" className="w-10/12 max-w-5xl">
            <TabsList className="w-full">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="publications">Publications</TabsTrigger>
            </TabsList>
            <TabsContent value="experience">
              Make changes to your account here.
            </TabsContent>
            <TabsContent value="projects">
              Change your password here.
            </TabsContent>
            <TabsContent value="publications">
              Change your password here.
            </TabsContent>
          </Tabs>
        </div>

        <div className="w-1 h-24" />
      </div>
    </div>
  );
};
