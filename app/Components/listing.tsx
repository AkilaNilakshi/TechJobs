"use client";
import { LucideEye } from "lucide-react";
import { useEffect, useState } from "react";
import JobDetails from "./JobDetail";

type Job = {
    id: number
    title: string
    company: string
    location: string
    description: string
}

export default function Listing(){

    const[jobTableData,setJobTableData] = useState<Job[]>([]);
    const[selectedJob,setSelectedJob] = useState<Job | null>(null);
    const[isDrawerOpen,setIsDrawerOpen] = useState(false);

    useEffect(()=>{
        const getJobData = async ()=>{
            const res = await fetch('/api/jobs')
            const data = await res.json()
            setJobTableData(data)
        }
        getJobData();
    },[])

    const openDrawer= (job: Job)=>{
        console.log(job)
        setSelectedJob(job);
        setIsDrawerOpen(true);
    }

    const closeDrawer = ()=>{
        setIsDrawerOpen(false);
        setSelectedJob(null);
    }

    return (
        <>
            <table className="job-listing">
                <thead>
                    <th>Job Title</th>
                    <th>Company</th>
                    <th>Location</th>
                    <th>Description</th>
                    <th></th>
                </thead>
                <tbody>
                    {jobTableData.length > 0 && (

                        jobTableData.map((job) => (

                            <tr key={job.id}>
                                <td>{job.title}</td>
                                <td>{job.company}</td>
                                <td>{job.location}</td>
                                <td>{job.description}</td>
                                <td><LucideEye onClick={()=>openDrawer(job)}/></td>
                            </tr>
                        ))

                    )
                    }

                </tbody>
            </table>
            {
                isDrawerOpen && <JobDetails open={isDrawerOpen} onClose={closeDrawer} job={selectedJob}/>
            }
        </>
    )
}