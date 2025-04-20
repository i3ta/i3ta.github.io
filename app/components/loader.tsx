import '~/styles/loader.css';
import { motion, AnimatePresence } from 'motion/react';

export const Loader = ({ visible = false }: { visible?: boolean }) => {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed w-screen h-screen bg-neutral-900 flex flex-col gap-4 justify-center items-center z-30"
        >
          <div className="loader"></div>
          <p>Loading...</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
