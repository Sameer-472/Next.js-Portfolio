"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CustomModal } from '../customModal';
import useModalStore from '@/store/useModalStore';
import { Github, PlayCircleIcon } from 'lucide-react';

const ProjectDetailsModal = () => {
    const { isOpen, type, closeModal, data } = useModalStore();

    return (
        <CustomModal
            open={isOpen && type == "projectDetails"}
            title={data?.name}
            onClose={closeModal}
        >
            <div className="p-6 max-h-[70vh] overflow-y-auto">
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div className="col-span-4 flex flex-col gap-4 bg-gray-900 p-6 rounded-lg shadow-lg text-white">
                        <h3 className="text-lg font-semibold">
                            External Links
                        </h3>
                        <div className="flex justify-start gap-5">
                            <a href={data?.demo} target="_blank" rel="noopener noreferrer" className="cursor-pointer flex items-center gap-2 text-white bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700">
                                <PlayCircleIcon className="w-5 h-5 text-white/80" />
                                <span>Live Demo</span>
                            </a>
                            {data?.sourceCodeEnable && (
                                <a href={data?.code} target="_blank" rel="noopener noreferrer" className="cursor-pointer flex items-center gap-2 text-white bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700">
                                    <Github className="w-5 h-5" />
                                    <span>Source Code</span>
                                </a>
                            )}
                        </div>
                        <div className="border-t border-gray-700 my-4"></div>
                        {/* Overview Section */}
                        {/* <div>
                            <h3 className="text-lg font-semibold">OVERVIEW</h3>
                            <p className="text-sm text-gray-300">
                                {data?.overview}
                            </p>
                            <p className="text-sm text-gray-300 mt-2">
                                This case study explores how TalentVare empowers both HR professionals and job seekers through a suite of innovative features.
                            </p>
                        </div> */}
                        {/* What is TalentVare Section */}
                        <div>
                            <h3 className="text-lg font-semibold">
                                What&apos;s <span className="text-green-400">{data?.name}</span>
                            </h3>
                            <p className="text-sm text-gray-300">
                                {data?.overview}
                            </p>
                        </div>
                        {
                            data?.problemStatement && (
                                <>
                                    <div className="border-t border-gray-700 my-4"></div>
                                    <div>
                                        <h3 className="text-lg font-semibold">
                                            Problem Statement
                                        </h3>
                                        <p className="text-sm text-gray-300">
                                            {data?.problemStatement}
                                        </p>
                                    </div>
                                </>
                            )
                        }
                        {
                            data?.solution && (
                                <>
                                    <div className="border-t border-gray-700 my-4"></div>
                                    <div>
                                        <h3 className="text-lg font-semibold">
                                            Solution
                                        </h3>
                                        <p className="text-sm text-gray-300">
                                            {data?.solution}
                                        </p>
                                    </div>
                                </>
                            )
                        }


                        {/* <div className="border-t border-gray-700 my-4"></div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="md:col-span-1">
                                <h3 className="text-lg font-semibold">MY ROLE</h3>
                                <p className="text-sm text-gray-300">Frontend Development & Integration</p>
                            </div>

                            <div className="md:col-span-1">
                                <h3 className="text-lg font-semibold">TIMELINE</h3>
                                <p className="text-sm text-gray-300">Feb 2024 - Feb 2025</p>
                            </div>
                        </div>
                        <div className="md:col-span-1">
                            <h3 className="text-lg font-semibold">THE TEAM</h3>
                            <p className="text-sm text-gray-300">
                                Shebaan (Design), Maheer (Backend Lead), Noman Rehman (Backend), Musadiq Shariq (Sr. Frontend)
                            </p>
                        </div> */}

                    </div>
                </div>
            </div>
        </CustomModal>

    );
};

export default ProjectDetailsModal;
