import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mavera Business Group",
    short_name: "Mavera",
    description: "One group. Distinct experiences. Shared ambition.",
    start_url: "/",
    display: "standalone",
    background_color: "#F7F5F0",
    theme_color: "#FCB040",
    icons: [{ src: "/mavera-business-group.svg", sizes: "any", type: "image/svg+xml" }]
  };
}
