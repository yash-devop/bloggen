export function isValidSlug(slug?: string): boolean {
    console.log("slug", slug);
    if (!slug) return false;
    const clients = ["bloggen", "testing"];
  
    if (clients.includes(slug)) return true;
    return false;
  }