import { NextResponse } from "next/server"
type Job = {
    id: number
    title: string
    company: string
    location: string
    description: string
}

const jobData: Job[]=[
    {
      id: 1,
      title: 'UI/UX Designer',
      company: 'Creative Agency',
      location: 'Colombo, Sri Lanka',
      description: 'Design intuitive user interfaces with Figma and Adobe XD.',
    },
    {
      id: 2,
      title: 'Frontend Developer',
      company: 'TechNova',
      location: 'Remote',
      description: 'Build responsive React/Next.js applications.',
    },
]

export async function GET() {
  return NextResponse.json(jobData)
}

