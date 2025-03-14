"use client";

import React from 'react';
import { CustomModal } from '../customModal';
import useModalStore from '@/store/useModalStore';
import { Document , pdfjs} from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const ResumeModal = () => {
    const { isOpen, type, closeModal } = useModalStore();

    return (
        <CustomModal open={isOpen && type === "ResumeModal"} title={"My Resume"} onClose={closeModal}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6 overflow-y-auto max-h-[70vh]">
                <div className="overflow-auto h-[80vh] border rounded">
                    <Document file={"../../assets/Sameer khan.resume.pdf"} >

                    </Document>
                </div>
            </div>
        </CustomModal>
    );
};

export default ResumeModal;
