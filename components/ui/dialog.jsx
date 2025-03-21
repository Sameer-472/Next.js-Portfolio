"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { XIcon } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion";

import { cn } from "@/lib/utils"

function Dialog({
  ...props
}) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

function DialogTrigger({
  ...props
}) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

function DialogPortal({
  ...props
}) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

function DialogClose({
  ...props
}) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

// background k lye 
function DialogOverlay({
  className,
  ...props
}) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        "fixed inset-0 z-40 backdrop-blur-md bg-black/30 transition-all duration-300 ease-out",
        className
      )}
      {...props}
    />
  );
}

function DialogContent({
  className,
  children,
  ...props
}) {
  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <AnimatePresence>
        <DialogPrimitive.Content asChild forceMount {...props}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={cn(
              "fixed top-[50%] left-[50%] z-50 w-[90%] md:max-w-4xl translate-x-[-50%] translate-y-[-50%] rounded-xl border border-white/20 bg-white/30 p-6 shadow-xl backdrop-blur-lg dark:bg-neutral-900/40",
              className
            )}
          >
            {children}
            <DialogPrimitive.Close
              className="absolute right-4 top-4 rounded-full bg-white/20 p-1 backdrop-blur-md transition-opacity hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              <XIcon className="h-4 w-4 text-black/70 dark:text-white/70" />
              <span className="sr-only">Close</span>
            </DialogPrimitive.Close>
          </motion.div>
        </DialogPrimitive.Content>
      </AnimatePresence>
    </DialogPortal>
  );
}


function DialogHeader({
  className,
  ...props
}) {
  return (
    (<div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props} />)
  );
}

function DialogFooter({
  className,
  ...props
}) {
  return (
    (<div
      data-slot="dialog-footer"
      className={cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className)}
      {...props} />)
  );
}

function DialogTitle({
  className,
  ...props
}) {
  return (
    (<DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("text-lg leading-none font-semibold", className)}
      {...props} />)
  );
}

function DialogDescription({
  className,
  ...props
}) {
  return (
    (<DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props} />)
  );
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}
