import TournamentPage from "@/views/tournament";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Games & Tournaments - Betwin Games",
};

export default function GamesPage() {
  return <TournamentPage />;
}
