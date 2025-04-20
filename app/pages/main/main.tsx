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

      {/* Content */}
      <div className="relative w-9/10 max-w-5xl flex flex-col items-start gap-8">
        <div className="absolute top-0 right-0 flex flex-row gap-4">
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
        <div className="relative top-36">
          <HeroContent />
        </div>
        <div className="w-full">
          <Tabs defaultValue="account" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              Make changes to your account here.
            </TabsContent>
            <TabsContent value="password">
              Change your password here.
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};
