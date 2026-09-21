import apiClient from "./apiClient";

export async function getThreads(page) {
  try {
    const response = await apiClient.get("/api/threads", {
      params: { page },
    });

    return response.data;
  } catch (error) {
    console.error("Failed to fetch threads:", error);
    throw error;
  }
}