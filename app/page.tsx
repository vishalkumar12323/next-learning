import LandingPage from "@/components/Landing";
import { internal_api_url } from "@/app/lib/api";
import { TTaskProps } from "@/app/lib/types";

export default async function Home() {
  const res = await fetch(`${internal_api_url}/tasks/sample-tasks`);
  const tasks: TTaskProps[] = await res.json();
  return <LandingPage sampleTasks={tasks} />;
}
