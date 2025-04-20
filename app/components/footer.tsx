import { Card } from '@/components/ui/card';

export const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center pb-8">
      <Card className="w-9/10 max-w-5xl flex flex-col items-center gap-2">
        <span className="text-xs text-neutral-500 text-center">
          © 2025 Aaron Hung.
        </span>
        <div className="flex flex-row gap-2">
          <img src="/dew.png" className="h-6" />
          <img src="/snowy.png" className="h-6" />
          <img src="/cherri.png" className="h-6" />
        </div>
        <span className="text-xs text-neutral-500 text-center">
          All rights reserved. All content on this website, including text,
          images, graphics, and design, is the intellectual property of Aaron
          Hung unless otherwise stated. Unauthorized use and/or duplication of
          this material without express and written permission from this site’s
          author and/or owner is strictly prohibited.
        </span>
      </Card>
    </div>
  );
};
