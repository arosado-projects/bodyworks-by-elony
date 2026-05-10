import type { MetadataRoute } from "next";
import { getBookingUrl, siteConfig } from "./lib/site";

const routes = [
  {
    path: "",
    priority: 1,
  },
  {
    path: "/services",
    priority: 0.9,
  },
  {
    path: "/pricing",
    priority: 0.85,
  },
  {
    path: "/booking",
    priority: 0.8,
  },
  {
    path: "/about",
    priority: 0.75,
  },
  {
    path: "/contact",
    priority: 0.7,
  },
  {
    path: "/faq",
    priority: 0.65,
  },
  {
    path: "/policies",
    priority: 0.6,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteConfig.siteUrl}${route.path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
