"use client";
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Menu as MenuIcon, Bell, X, LucideEye } from 'lucide-react';
import Listing from './components/Listing';
import { useState } from 'react';
import JobDetails from './components/JobDetail';
import { useRouter } from 'next/navigation';

type Job = {
  id: number
  title: string
  company: string
  location: string
  description: string
}

export default function Dashboard() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const router = useRouter();

  const openDrawer = (job: Job) => {
    console.log(job);
    setSelectedJob(job);
    setIsDrawerOpen(true);
  }

  const addNewJob = ()=>{
    router.push('/add-job');
  }
  return (
    <>
      <div className="min-h-full">
        

        <header className="bg-white shadow-sm">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-blue-700">Find your dream job or let companies find you</h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl px-4 py-6 bg-white sm:px-6 lg:px-8 main-wrapper">
            <div className="flex justify-end mb-10">
              <button className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300' onClick={addNewJob}>Post New Job</button>
            </div>
            <Listing />
          </div>
        </main>
      </div>
      {
        isDrawerOpen && <JobDetails/>
      }
    </>
  )
}
