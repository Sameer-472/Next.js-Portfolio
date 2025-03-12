"use client";

import * as React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export const CustomModal = ({ open, onClose, title, description, children}) => {
    return (
        <Dialog  open={open} onOpenChange={onClose}>
            <DialogContent className="rounded-2xl shadow-xl bg-gray-900 border border-gray-700 text-white">
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

