import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import type { TimelineItem } from '@/types/timelineItem';
import Markdown from 'react-markdown';
import { AnimatePresence, motion } from 'motion/react';
import { Separator } from '@/components/ui/separator';

const TimelineEntry = ({
  item,
  lastEntry = false,
}: {
  item: TimelineItem;
  lastEntry?: boolean;
}) => {
  const [expanded, setExpanded] = useState(false);

  const formatDateString = (date: Date) => {
    return date.toLocaleString('en-US', {
      month: 'long',
      year: 'numeric',
      timeZone: 'UTC',
    });
  };

  const startDateString = formatDateString(item.startDate);
  const endDateString = item.endDate
    ? formatDateString(item.endDate)
    : 'Present';

  const handleClick = () => {
    if (item.description) {
      setExpanded(!expanded);
    }
  };

  return (
    <div className="w-full px-4 flex flex-row gap-4 items-stretch">
      <div className="flex flex-col items-center justify-center">
        <div className="w-4 h-4 rounded-full bg-white"></div>
        {/* bg-white bg-linear-to-b from-white to-neutral-950 */}
        <div
          className={`w-[3px] flex-1 ${
            lastEntry
              ? 'bg-linear-to-b from-white to-neutral-950 min-h-64'
              : 'bg-white'
          }`}
        ></div>
      </div>
      <div className="relative flex flex-col top-[-18px] w-full">
        <div className="relative flex flex-col gap-4 items-start px-4 py-2 w-full flex-1">
          <div
            className={`absolute top-0 left-0 w-full h-full from-neutral-800 to-neutral-900 transition-all bg-gradient-to-br rounded-lg  !shadow-lg shadow-black -z-10 ${
              expanded ? 'opacity-100' : 'opacity-0'
            }`}
          ></div>
          <div
            className={`flex flex-col w-full items-start transition-all ${
              item.description && 'hover:opacity-80'
            }`}
            style={{
              cursor: item.description !== undefined ? 'pointer' : 'auto',
            }}
            onClick={handleClick}
          >
            <h3>{item.organization}</h3>
            <h4>{item.role}</h4>
            <h4 className="text-neutral-400">
              {startDateString} - {endDateString}
            </h4>
            {item.tags && (
              <div className="flex flex-row flex-wrap gap-2 py-2">
                {item.tags.map((tag, i) => (
                  <Badge key={i}>{tag}</Badge>
                ))}
              </div>
            )}
          </div>
          <div className="w-full overflow-hidden">
            <AnimatePresence>
              {item.description && expanded && (
                <>
                  <motion.div
                    className="timeline-description px-4"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <Separator />
                    <Markdown>{item.description}</Markdown>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className="w-1 h-4"></div>
      </div>
    </div>
  );
};

export const Timeline = ({ items }: { items: Array<TimelineItem> }) => {
  return (
    <div className="w-full">
      {items.map((item, i) => (
        <TimelineEntry key={i} item={item} lastEntry={i === items.length - 1} />
      ))}
    </div>
  );
};
