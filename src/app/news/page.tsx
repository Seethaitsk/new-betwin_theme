import BlogPage from "@/views/blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Latest News & Updates - Betwin Games",
};

export default function NewsPage() {
  return <BlogPage />;
}
