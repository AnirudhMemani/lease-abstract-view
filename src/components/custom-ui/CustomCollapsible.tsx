import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import * as React from "react";

interface CustomCollapsibleProps {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export const CustomCollapsible = ({
  title,
  children,
  isOpen: externalIsOpen,
  onOpenChange,
}: CustomCollapsibleProps) => {
  const [internalIsOpen, setInternalIsOpen] = React.useState(false);

  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;

  const handleToggle = () => {
    const newState = !isOpen;
    if (onOpenChange) {
      onOpenChange(newState);
    } else {
      setInternalIsOpen(newState);
    }
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleToggle}
        className="flex w-full items-center justify-between cursor-pointer"
        aria-expanded={isOpen}
      >
        <h3 className="font-semibold">{title}</h3>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2, ease: "easeInOut" }}>
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <div className="overflow-hidden">
            <motion.div
              initial={{ height: 0, scaleY: 0.95, transformOrigin: "top" }}
              animate={{
                height: "auto",
                scaleY: 1,
                transition: {
                  height: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
                  scaleY: { duration: 0.2, ease: "easeOut" },
                },
              }}
              exit={{
                height: 0,
                scaleY: 0.95,
                transition: {
                  height: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
                  scaleY: { duration: 0.2, ease: "easeIn" },
                },
              }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    duration: 0.15,
                  },
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.1,
                  },
                }}
              >
                <div className="pt-2">{children}</div>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

CustomCollapsible.displayName = "CustomCollapsible";
