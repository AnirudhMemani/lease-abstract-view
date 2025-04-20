import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { XIcon } from "lucide-react";
import * as React from "react";
import ReactDOM from "react-dom";

const CustomDialogOverlay = ({ onClose }: { onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.2, ease: "easeOut" }}
    className={cn("fixed inset-0 z-50 bg-black/50")}
    onClick={onClose}
  />
);
CustomDialogOverlay.displayName = "CustomDialogOverlay";

interface CustomDialogContentProps {
  className?: string;
  children: React.ReactNode;
  onClose?: () => void;
}

const CustomDialogContent = React.forwardRef<HTMLDivElement, CustomDialogContentProps>(
  ({ className, children, onClose, ...props }, ref) => {
    React.useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape" && onClose) {
          onClose();
        }
      };
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    return (
      <motion.div
        ref={ref}
        className={cn(
          "fixed  top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] gap-4 rounded-lg border bg-background p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        )}
        role="dialog"
        aria-modal="true"
        initial={{ opacity: 0, scale: 0.95, x: "-50%", y: "-50%" }}
        animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
        exit={{ opacity: 0, scale: 0.95, x: "-50%", y: "-50%" }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        {...props}
      >
        {children}
        <button
          type="button"
          onClick={onClose}
          className={cn(
            "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
          )}
          aria-label="Close"
          disabled={!onClose}
        >
          <XIcon />
        </button>
      </motion.div>
    );
  }
);
CustomDialogContent.displayName = "CustomDialogContent";

const CustomDialogHeader = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col gap-2 text-center sm:text-left", className)} {...props}>
    {children}
  </div>
);
CustomDialogHeader.displayName = "CustomDialogHeader";

const CustomDialogTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, children, ...props }, ref) => (
    <h2 ref={ref} className={cn("text-lg leading-none font-semibold", className)} {...props}>
      {children}
    </h2>
  )
);
CustomDialogTitle.displayName = "CustomDialogTitle";

interface CustomDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

const CustomDialog = ({ open, onOpenChange, children }: CustomDialogProps) => {
  const [portalNode, setPortalNode] = React.useState<HTMLElement | null>(null);

  React.useEffect(() => {
    setPortalNode(document.body);
  }, []);

  if (!portalNode) {
    return null;
  }

  const handleClose = () => onOpenChange(false);

  return ReactDOM.createPortal(
    <AnimatePresence>
      {open && (
        <>
          <CustomDialogOverlay onClose={handleClose} />
          {React.Children.map(children, (child) => {
            if (
              React.isValidElement(child) &&
              typeof child.type === "function" &&
              child.type.name === "CustomDialogContent"
            ) {
              return React.cloneElement(child as React.ReactElement<CustomDialogContentProps>, {
                onClose: handleClose,
              });
            }
            return child;
          })}
        </>
      )}
    </AnimatePresence>,
    portalNode
  );
};
CustomDialog.displayName = "CustomDialog";

export { CustomDialog, CustomDialogContent, CustomDialogHeader, CustomDialogOverlay, CustomDialogTitle };
