export async function getPageContent(page, section, key) {
  try {
    const response = await fetch(
      `/api/pageContent?page=${page}&section=${section}&key=${key}`,
      { cache: "no-store" }
    );
    if (!response.ok) return null;
    const data = await response.json();
    return data?.content || null;
  } catch (error) {
    console.error("Content fetch error:", error);
    return null;
  }
}

export async function getFeatures() {
  try {
    const response = await fetch("/api/features", { cache: "no-store" });
    if (!response.ok) return [];
    return await response.json();
  } catch (error) {
    console.error("Features fetch error:", error);
    return [];
  }
}

export async function getServices() {
  try {
    const response = await fetch("/api/services", { cache: "no-store" });
    if (!response.ok) return [];
    return await response.json();
  } catch (error) {
    console.error("Services fetch error:", error);
    return [];
  }
}

export async function getValues() {
  try {
    const response = await fetch("/api/values", { cache: "no-store" });
    if (!response.ok) return [];
    return await response.json();
  } catch (error) {
    console.error("Values fetch error:", error);
    return [];
  }
}
