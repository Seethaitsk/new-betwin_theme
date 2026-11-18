import NotFoundPage from "@/views/not-found";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 Not Found - MYKD eSports and Gaming React Template",
};

export default function NotFound() {
  return <NotFoundPage />;
}

