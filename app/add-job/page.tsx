'use client'
import { useState } from "react";
import { addJob } from "../lib/jobStore";
import { useRouter } from "next/navigation";

export default function NewJob() {

    const router = useRouter();

    const [form, setForm] = useState({
        title: '',
        company: '',
        location: '',
        description: '',
    });

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }

    const saveNewJob = () => {
        addJob({
            id: Date.now(),
            ...form,
        })
        router.push('/dashboard');
    }

    return (
        <div className="min-h-full">
            <main>
                <div className="mx-auto max-w-7xl px-4 py-6 bg-white sm:px-6 lg:px-8 main-wrapper">
                    <h2 className="text-3xl font-semibold tracking-tight text-blue-700">Post New Job</h2>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-4">
                            <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">Title</label>
                            <div className="mt-2">
                                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                    <input onChange={handleChange} value={form.title} id="title" name="title" type="text" placeholder="Enter title" className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" />
                                </div>
                            </div>
                        </div>
                        <div className="sm:col-span-4">
                            <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">Company</label>
                            <div className="mt-2">
                                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                    <input onChange={handleChange} value={form.company} id="company" name="company" type="text" placeholder="Enter company" className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" />
                                </div>
                            </div>
                        </div>
                        <div className="sm:col-span-4">
                            <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">Location</label>
                            <div className="mt-2">
                                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                    <input onChange={handleChange} value={form.location} id="location" name="location" type="text" placeholder="Enter location" className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" />
                                </div>
                            </div>
                        </div>
                        <div className="sm:col-span-4">
                            <label htmlFor="about" className="block text-sm/6 font-medium text-gray-900">
                                About
                            </label>
                            <div className="mt-2">
                                <textarea
                                    id="description"
                                    name="description"
                                    rows={3}
                                    onChange={handleChange}
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                    defaultValue={form.description}
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-4 flex justify-end gap-2 mt-6">
                            <button className="px-4 py-2 rounded bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300"> Cancel</button>
                            <button onClick={saveNewJob} className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">Save</button>
                        </div>

                    </div>

                </div>
            </main>
        </div>
    )
}