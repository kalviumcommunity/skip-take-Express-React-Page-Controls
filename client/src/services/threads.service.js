```js
import apiClient from "./apiClient";

export async function getThreads() {
  try {
    const response = await apiClient.get("/api/threads");

    return response.data.threads;
  } catch (error) {
    console.error("Failed to fetch threads:", error);
    throw error;
  }
}
```

