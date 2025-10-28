import EmergencyService from "./EmergencyService";
import { connectDB } from "@/lib/mongodb";
import SEOMetadata from "@/lib/models/SEOMetadata";
import { ChevronsRight } from "lucide-react";
import PageHeader from "../components/General/PageHeader";

async function getSEOMetadata() {
  try {
    await connectDB();
    const metadata = await SEOMetadata.findOne({ page: "emergency-service" });
    return (
      metadata || {
        title: "Emergency Service | Construction Company",
        description:
          "Get fast and reliable emergency construction services from our expert team, available to assist you anytime.",
      }
    );
  } catch (error) {
    console.error("Error fetching SEO metadata:", error);
    return {
      title: "Emergency Service | Construction Company",
      description:
        "Get fast and reliable emergency construction services from our expert team, available to assist you anytime.",
    };
  }
}

export async function generateMetadata() {
  const metadata = await getSEOMetadata();
  return {
    title: metadata.title,
    description: metadata.description,
  };
}

export default function EmergencyServicePage() {
  return (
    <>
      <PageHeader title="Emergency Service" />
      <EmergencyService />
    </>
  );
}
