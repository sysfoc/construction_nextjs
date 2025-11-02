// app/emergency-service/page.tsx
"use client";

import { useEffect, useState } from "react";
import {
  AlertCircle,
  Clock,
  MessageCircle,
  Mail as MailIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface EmergencyService {
  _id: string;
  title: string;
  slug: string;
  image: string;
  calloutPrice: number;
  price: number;
  responseTime: string;
  whatWeHelpWith: string[];
}

interface Settings {
  emergencyEmail?: string;
  emergencyPhone?: string;
}

export default function EmergencyServicePage() {
  const [services, setServices] = useState<EmergencyService[]>([]);
  const [settings, setSettings] = useState<Settings>({
    emergencyEmail: "",
    emergencyPhone: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [servicesRes, settingsRes] = await Promise.all([
          fetch("/api/emergency-services"),
          fetch("/api/emergency-services/settings"),
        ]);

        if (!servicesRes.ok) throw new Error("Failed to fetch services");
        if (!settingsRes.ok) throw new Error("Failed to fetch settings");

        const servicesData = await servicesRes.json();
        const settingsData = await settingsRes.json();

        setServices(servicesData);
        setSettings({
          emergencyEmail: settingsData.emergencyEmail || "",
          emergencyPhone: settingsData.emergencyPhone || "",
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <main className="max-w-7xl mx-auto">
        <div className="px-6 md:px-12 py-12 text-center">
          <p className="text-gray-600">Loading services...</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="max-w-7xl mx-auto">
        <div className="px-6 md:px-12 py-12 text-center text-red-600">
          <p>Error: {error}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 md:px-12 py-12 bg-gray-50">
        <div className="flex flex-col justify-center order-2 lg:order-1">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-800">
            Emergency Services
          </h1>
          <p className="text-base mb-4 leading-relaxed text-gray-600">
            Professional emergency response when you need it most. Our team of
            certified technicians is ready to handle any urgent situation
            affecting your property.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch gap-3">
            <a
              href={`https://wa.me/${settings.emergencyPhone?.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center gap-2 px-3 py-2 bg-green-500 text-primary-foreground rounded-md transition-colors"
            >
              <MessageCircle size={20} className="flex-shrink-0" />
              <div className="leading-tight overflow-hidden">
                <p className="text-xs font-semibold">Chat on WhatsApp</p>
                <p className="text-sm font-bold truncate">
                  {settings.emergencyPhone}
                </p>
              </div>
            </a>

            <a
              href={`mailto:${settings.emergencyEmail}`}
              className="flex-1 flex items-center gap-2 px-3 py-2 rounded-md bg-primary text-primary-foreground transition-colors"
            >
              <MailIcon size={20} className="flex-shrink-0" />
              <div className="leading-tight overflow-hidden">
                <p className="text-xs font-semibold">Send us an Email</p>
                <p className="text-sm font-medium truncate">
                  {settings.emergencyEmail}
                </p>
              </div>
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center rounded overflow-hidden h-60 md:h-80 order-1 lg:order-2">
          <div className="w-full h-full relative flex items-center justify-center bg-gray-100">
            <Image
              src="/emergency-services/img_01 (3).jpg"
              alt="Emergency Response"
              width={1024}
              height={1024}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="px-6 md:px-12 py-10 bg-gray-100">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800">
          Why Choose Our Emergency Services?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="text-center">
            <Clock size={36} className="text-orange-500 mx-auto mb-2" />
            <h3 className="text-lg font-bold mb-2 text-gray-700">
              Rapid Response
            </h3>
            <p className="text-sm text-gray-600">
              Our teams reach you within 1-2 hours of your emergency call.
            </p>
          </div>
          <div className="text-center">
            <AlertCircle size={36} className="text-orange-500 mx-auto mb-2" />
            <h3 className="text-lg font-bold mb-2 text-gray-700">
              Certified Professionals
            </h3>
            <p className="text-sm text-gray-600">
              Fully licensed, insured, and trained in emergency response
              protocols.
            </p>
          </div>
          <div className="text-center">
            <MessageCircle size={36} className="text-orange-500 mx-auto mb-2" />
            <h3 className="text-lg font-bold mb-2 text-gray-700">
              Always Available
            </h3>
            <p className="text-sm text-gray-600">
              24/7 emergency support with no holidays or off-hours.
            </p>
          </div>
        </div>
      </section>

      {/* Service List Section */}
      <section className="px-6 md:px-12 py-10 bg-gray-100">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800">
          Services We Provide
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service) => (
            <Link
              key={service._id}
              href={`/emergency-service/${service.slug}`}
              className="p-6 border border-gray-300 rounded bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-center rounded overflow-hidden h-48 mb-4">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={300}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-800 text-center mb-3">
                {service.title}
              </h3>
              <div className="mb-4 pb-4 border-b border-gray-200">
                <p className="text-xs font-semibold mb-1 text-orange-500 text-center">
                  PRICE RANGE
                </p>
                <p className="text-lg font-bold text-gray-700 text-center">
                  ${service.price}
                </p>
              </div>
              <div className="w-full px-4 py-2 text-sm font-bold text-white rounded bg-orange-500 hover:bg-orange-600 transition-colors text-center">
                Learn More
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 md:px-12 py-10 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
            Contact Us for Emergency Assistance
          </h2>
          <p className="text-base mb-8 leading-relaxed text-gray-600">
            When disaster strikes, don't wait. Our team is ready to respond
            immediately to your emergency.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <a
              href={`https://wa.me/${settings.emergencyPhone?.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 max-w-xs text-primary-foreground p-6 bg-green-500 rounded-lg transition-colors"
            >
              <MessageCircle size={32} className="mx-auto mb-2" />
              <p className="text-xs mb-1 font-semibold">
                Message on WhatsApp
              </p>
              <p className="text-sm font-medium">{settings.emergencyPhone}</p>
            </a>
            <a
              href={`mailto:${settings.emergencyEmail}`}
              className="flex-1 max-w-xs text-primary-foreground p-6 bg-primary rounded-lg transition-colors"
            >
              <MailIcon size={32} className="mx-auto mb-2" />
              <p className="text-xs mb-1 font-semibold">Send us an Email</p>
              <p className="text-sm font-medium">{settings.emergencyEmail}</p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
