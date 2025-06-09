"use client";

import * as React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export const CustomModal = ({ open, onClose, title, description, children}) => {
    return (
        <Dialog  open={open} onOpenChange={onClose}>
            <DialogContent className="rounded-2xl shadow-xl dark:bg-[#18181B] dark:border dark:border-gray-700 dark:text-white bg-white text-gray-600">
                <DialogHeader>
                    <DialogTitle className="text-lg">{title}</DialogTitle>
                    {description && <DialogDescription className="text-gray-400">{description}</DialogDescription>}
                </DialogHeader>
                <div className="py-4">
                    {children}
                </div>
            </DialogContent>
        </Dialog>
    );
}

