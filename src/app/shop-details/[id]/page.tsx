import ShopDetailsPage from "@/views/shop-details";
import type { Metadata } from "next";
import { all_products } from "@/data/product-data";

export const metadata: Metadata = {
  title: "Shop Details - MYKD eSports and Gaming React Template",
};

export function generateStaticParams() {
  return all_products.map((product) => ({
    id: String(product.id),
  }));
}

export default function Page() {
  return <ShopDetailsPage />;
}

