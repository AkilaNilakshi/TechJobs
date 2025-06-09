// app/context/JobContext.tsx
'use client'

import { createContext, useContext, useState, ReactNode } from 'react';
import { Job } from '../types/Job';

type JobContextType = {
  jobs: Job[];
  addJob: (job: Job) => void;
}

const JobContext = createContext<JobContextType | undefined>(undefined);

const initialJobs: Job[] = require('../../public/data/job_data.json') // Assume you have 100 records here

export const JobProvider = ({ children }: { children: ReactNode }) => {
  const [jobs, setJobs] = useState<Job[]>(initialJobs)

  const addJob = (job: Job) => {
    setJobs(prev => [...prev, job])
  }

  return (
    <JobContext.Provider value={{ jobs, addJob }}>
      {children}
    </JobContext.Provider>
  )
}

export const useJobContext = () => {
  const context = useContext(JobContext)
  if (!context) throw new Error('useJobContext must be used within JobProvider')
  return context
}
