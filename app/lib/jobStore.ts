let jobs: any[] = [];

export const getJobs = () => jobs;

export const addJob = (job: any) => {
  jobs.push(job);
};
