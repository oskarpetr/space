import { Dispatch, ReactNode, SetStateAction } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BEZIER_EASING } from "@/constants/animation";
import Icon from "./Icon";

interface Props {
  title: string;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  children?: ReactNode;
}

export default function Modal({ title, open, setOpen, children }: Props) {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: BEZIER_EASING, duration: 0.5 }}
          onClick={() => setOpen(false)}
          className="fixed top-0 left-0 z-10 flex h-screen w-screen items-center justify-center bg-black/70"
        >
          <motion.div
            data-lenis-prevent
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ ease: BEZIER_EASING, duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
            className="relative m-12 flex max-h-2/3 min-h-1/2 max-w-[50rem] flex-col gap-8 overflow-y-auto rounded-sm border-[0.5px] bg-neutral-950 p-10"
          >
            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold">{title}</div>
              <button className="cursor-pointer" onClick={() => setOpen(false)}>
                <Icon name="X" size={24} />
              </button>
            </div>

            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
