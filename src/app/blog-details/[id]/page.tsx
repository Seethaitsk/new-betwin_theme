import DynamicBlogDetailsPage from "@/views/blog-details";
import type { Metadata } from "next";
import blog_data from "@/data/blog-data";

export const metadata: Metadata = {
  title: "Blog Details - MYKD eSports and Gaming React Template",
};

export function generateStaticParams() {
  return blog_data.map((blog) => ({
    id: String(blog.id),
  }));
}

export default function Page() {
  return <DynamicBlogDetailsPage />;
}

