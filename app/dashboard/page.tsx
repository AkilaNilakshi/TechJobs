import Dashboard from "./dashboard";
import { JobProvider } from "../context/JobContext";
export default function Home() {
  return (
    <JobProvider>
      <Dashboard/>
    </JobProvider>
  );
}
