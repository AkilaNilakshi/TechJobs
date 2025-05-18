'use client'
import { useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, TransitionChild } from '@headlessui/react';
import { Globe, Locate, X } from 'lucide-react';

type Job = {
  jobDetails: any;
  id: number;
  title: string;
  company: string;
  location: string;
  description: string;
};

interface JobDetailsProps {
  open: boolean;
  onClose: () => void;
  job: Job | null;
  jobDetails?: {
    about: string;
    salary: string;
    skills: string[];
    benefits: string;
  };
}


export default function JobDetails({open, onClose, job}:JobDetailsProps) {
    
    const[selectedJob,setSelectedJob]=useState(job);

    return (

        <Dialog open={open} onClose={onClose} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
            />

            <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                        <DialogPanel
                            transition
                            className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
                        >
                            <TransitionChild>
                                <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 duration-500 ease-in-out data-closed:opacity-0 sm:-ml-10 sm:pr-4">
                                    <button
                                        type="button"
                                        onClick={onClose}
                                        className="relative rounded-md text-gray-300 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden"
                                    >
                                        <span className="absolute -inset-2.5" />
                                        <span className="sr-only">Close panel</span>
                                        <X aria-hidden="true" className="size-6" />
                                    </button>
                                </div>
                            </TransitionChild>
                            <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                <div className="px-4 sm:px-6">
                                    <DialogTitle className="text-2xl text-gray-900">{selectedJob?.title}</DialogTitle>
                                    <p className='text-xl1 font-bold text-orange-500 mb-2'>{selectedJob?.company}</p>
                                    <div className="flex items-center gap-2 text-xs text-blue-800">
                                        <Globe className="w-4 h-4" />
                                        <p>{selectedJob?.location}</p>
                                    </div>
                                </div>
                                <div  className="relative mt-6 flex-1 px-4 sm:px-6">
                                    <div className='mb-4'>
                                        <h2 className='text-base font-semibold text-gray-900 pb-2'>About the role</h2>
                                        <p className='text-sm text-gray-800'>{selectedJob && selectedJob.jobDetails?.about}</p>
                                    </div>
                                    <div className='mb-4'>
                                        <h2 className='text-base font-semibold text-gray-900 pb-2'>Salary</h2>
                                        <p className='text-sm text-gray-800'>{selectedJob && selectedJob.jobDetails?.salary}</p>
                                    </div>
                                    <div className='mb-4'>
                                        <h2 className='text-base font-semibold text-gray-900 pb-2'>Skills</h2>
                                        <ul className="list-disc pl-5 space-y-1 text-gray-900">
                                            {selectedJob?.jobDetails?.skills?.map((skill:string, index:number) => (
                                                <li key={index}>{skill}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className='mb-4'>
                                        <h2 className='text-base font-semibold text-gray-900 pb-2'>Benefits</h2>
                                        <p className='text-sm text-gray-800'>{selectedJob && selectedJob.jobDetails?.benefits}</p>
                                    </div>
                                    <div className="flex justify-end">
                                        <button className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300'>Apply</button>
                                    </div>
                                </div>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </div>
        </Dialog>
    )
}
