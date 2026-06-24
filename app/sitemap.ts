import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://learningnow.in",
      lastModified: new Date(),
    },
    {
      url: "https://learningnow.in/about",
      lastModified: new Date(),
    },
    {
      url: "https://learningnow.in/book",
      lastModified: new Date(),
    },
    {
      url: "https://learningnow.in/communication",
      lastModified: new Date(),
    },
    {
      url: "https://learningnow.in/masterclass",
      lastModified: new Date(),
    },
    {
      url: "https://learningnow.in/podcast",
      lastModified: new Date(),
    },
  ];
}