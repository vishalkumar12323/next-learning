import TaskForm from "@/components/Task-Form";

export default function AddTaskPage() {
  return (
    <main className="w-4/5 mx-auto p-4 mt-4">
      <h1 className="text-2xl font-bold mb-4">Add New Task</h1>
      <div className="w-full space-y-4 ">
        <TaskForm />
      </div>
    </main>
  );
}
