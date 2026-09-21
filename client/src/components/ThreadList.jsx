jsx
import { useQuery } from "@tanstack/react-query";
import { getThreads } from "../services/threads.service";
import ThreadItem from "./ThreadItem.jsx";

export default function ThreadList() {
  const {
    data: threads = [],
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["threads"],
    queryFn: getThreads,
  });

  // Loading state
  if (isPending) {
    return <p className="muted">Loading threads...</p>;
  }

  // Error state
  if (isError) {
    return (
      <p className="error">
        Could not load threads: {error?.message || "Something went wrong"}
      </p>
    );
  }

  // Empty state
  if (threads.length === 0) {
    return <p className="muted">No threads found.</p>;
  }

  // Display threads
  return (
    <ul className="threads">
      {threads.map((thread) => (
        <ThreadItem key={thread.id} thread={thread} />
      ))}
    </ul>
  );
}

