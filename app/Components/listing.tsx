"use client";
import { LucideEye } from "lucide-react";
import { useEffect, useState } from "react";

type Job = {
    id: number
    title: string
    company: string
    location: string
    description: string
}

export default function Listing(){

    const[jobTableData,setJobTableData] = useState<Job[]>([])

    useEffect(()=>{
        const getJobData = async ()=>{
            const res = await fetch('/api/jobs')
            const data = await res.json()
            setJobTableData(data)
        }
        getJobData()
    },[])

    return(
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

                        <tr>
                            <td>{job.title}</td>
                            <td>{job.company}</td>
                            <td>{job.location}</td>
                            <td>{job.description}</td>
                            <td><LucideEye /></td>
                        </tr>
                    ))

                )
                }                    
                    
                </tbody>
            </table>
    )
}