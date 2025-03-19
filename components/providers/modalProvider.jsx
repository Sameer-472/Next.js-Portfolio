"use client";

import { useEffect, useState } from "react";
import SKillsModal from "../modals/skillsModal";

export default function ModalProvider() {
    // Optional: Ensure modal does not flash on first render (Hydration issue)
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <>
            <SKillsModal />
            {/* <ResumeModal /> */}
        </>
    );
}

