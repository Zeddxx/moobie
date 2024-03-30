import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Moobie | KDrama Streaming Web Application",
        short_name: "Moobie",
        description: "Watch your favorite korean movies and kdrama's only on moobie without any ads and popups.",
        start_url: "/",
        display: "standalone",
        background_color: "#fffff",
        theme_color: "#fffff",
        icons: [
            {
                src: "/assets/logos/moobie-dark.svg",
                sizes: "192x192",
                type: "image/svg",
                purpose: "maskable"
            },
            {
                src: "/assets/logos/moobie-dark.svg",
                sizes: "512x512",
                type: "image/svg",
                purpose: "maskable"
            }
        ]
    }
}