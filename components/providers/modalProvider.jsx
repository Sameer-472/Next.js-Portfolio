"use client";

import { useEffect, useState } from "react";
import SKillsModal from "../modals/skillsModal";
import ResumeModal from "../modals/resumeModal";

export default function ModalProvider() {
    // Optional: Ensure modal does not flash on first render (Hydration issue)
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <>
            <SKillsModal />
            <ResumeModal />
        </>
    );
}

