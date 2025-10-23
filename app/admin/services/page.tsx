// app/admin/services/page.tsx
"use client";
import { Save, Plus, Trash2, Upload, Edit2, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface Service {
  id: number;
  heading: string;
  slug: string;
  shortContent: string;
  fullContent: string;
  photo: string | null;
  banner: string | null;
}

interface FormData {
  heading: string;
  slug: string;
  shortContent: string;
  fullContent: string;
  photoPreview: string | null;
  bannerPreview: string | null;
}

export default function ServicesManagementPage() {
  const [services, setServices] = useState<Service[]>([
    {
      id: 1,
      heading: "Residential Construction",
      slug: "residential-construction",
      shortContent:
        "Building quality homes with precision and care for your family.",
      fullContent:
        "Our residential construction services include custom home building, renovations, and remodeling. We work closely with homeowners to bring their vision to life.",
      photo: null,
      banner: null,
    },
    {
      id: 2,
      heading: "Commercial Projects",
      slug: "commercial-projects",
      shortContent:
        "Professional commercial construction for businesses of all sizes.",
      fullContent:
        "We specialize in commercial construction projects including office buildings, retail spaces, and industrial facilities. Our team ensures timely delivery and quality workmanship.",
      photo: null,
      banner: null,
    },
    {
      id: 3,
      heading: "Renovation & Remodeling",
      slug: "renovation-remodeling",
      shortContent:
        "Transform your existing space into something extraordinary.",
      fullContent:
        "Our renovation and remodeling services breathe new life into your property. From kitchen and bathroom updates to complete home makeovers.",
      photo: null,
      banner: null,
    },
  ]);

  const [editingService, setEditingService] = useState<number | null>(null);
  const [formData, setFormData] = useState<FormData>({
    heading: "",
    slug: "",
    shortContent: "",
    fullContent: "",
    photoPreview: null,
    bannerPreview: null,
  });

  const handleEdit = (service: Service) => {
    setEditingService(service.id);
    setFormData({
      heading: service.heading,
      slug: service.slug,
      shortContent: service.shortContent,
      fullContent: service.fullContent,
      photoPreview: service.photo,
      bannerPreview: service.banner,
    });
  };

  const handleCancel = () => {
    setEditingService(null);
    setFormData({
      heading: "",
      slug: "",
      shortContent: "",
      fullContent: "",
      photoPreview: null,
      bannerPreview: null,
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "photo" | "banner"
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          [type === "photo" ? "photoPreview" : "bannerPreview"]:
            reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveService = () => {
    setServices((prev) =>
      prev.map((service) =>
        service.id === editingService
          ? {
              ...service,
              heading: formData.heading,
              slug: formData.slug,
              shortContent: formData.shortContent,
              fullContent: formData.fullContent,
              photo: formData.photoPreview,
              banner: formData.bannerPreview,
            }
          : service
      )
    );
    handleCancel();
  };

  const handleAddService = () => {
    const newService: Service = {
      id: Date.now(),
      heading: "New Service",
      slug: "new-service",
      shortContent: "Short description of the service",
      fullContent: "Full description of the service with more details",
      photo: null,
      banner: null,
    };
    setServices((prev) => [...prev, newService]);
  };

  const handleDeleteService = (id: number) => {
    setServices((prev) => prev.filter((service) => service.id !== id));
  };

  const handleSubmit = () => {
    console.log("Services saved:", services);
  };

  return (
    <div className="p-4 sm:p-6 mx-auto bg-gray-50 min-h-screen">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mb-6">
        <h1 className="text-lg sm:text-2xl font-semibold text-[var(--header-text)]">
          Services Management
        </h1>
        <button
          onClick={handleAddService}
          className="flex items-center gap-2 px-4 py-2 bg-[var(--primary)] text-[var(--primary-foreground)] rounded font-medium whitespace-nowrap"
        >
          <Plus className="w-4 h-4" />
          Add Service
        </button>
      </div>

      <div className="space-y-4">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-[var(--background)] border border-[var(--border-color)] rounded p-3 sm:p-4"
          >
            {editingService === service.id ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base sm:text-lg font-semibold text-[var(--header-text)]">
                    Edit Service
                  </h3>
                  <button onClick={handleCancel} className="text-gray-500">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-[var(--header-text)] mb-2">
                      Service Photo
                    </label>
                    <div className="relative w-full h-32 border-2 border-dashed border-[var(--border-color)] rounded flex items-center justify-center bg-gray-50 mb-2 overflow-hidden">
                      {formData.photoPreview ? (
                        <Image
                          src={formData.photoPreview}
                          alt="Photo preview"
                          fill
                          className="object-cover rounded"
                        />
                      ) : (
                        <Upload className="w-6 h-6 text-gray-400" />
                      )}
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageChange(e, "photo")}
                      className="block text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-medium file:bg-[var(--primary)] file:text-[var(--primary-foreground)] cursor-pointer"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Recommended: 600x400px
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm text-[var(--header-text)] mb-2">
                      Service Banner
                    </label>
                    <div className="relative w-full h-32 border-2 border-dashed border-[var(--border-color)] rounded flex items-center justify-center bg-gray-50 mb-2 overflow-hidden">
                      {formData.bannerPreview ? (
                        <Image
                          src={formData.bannerPreview}
                          alt="Banner preview"
                          fill
                          className="object-cover rounded"
                        />
                      ) : (
                        <Upload className="w-6 h-6 text-gray-400" />
                      )}
                    </div>

                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageChange(e, "banner")}
                      className="block text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-medium file:bg-[var(--primary)] file:text-[var(--primary-foreground)] cursor-pointer"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Recommended: 1920x400px
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-[var(--header-text)] mb-2">
                      Heading
                    </label>
                    <input
                      type="text"
                      name="heading"
                      value={formData.heading}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-[var(--border-color)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-[var(--header-text)] mb-2">
                      Slug
                    </label>
                    <input
                      type="text"
                      name="slug"
                      value={formData.slug}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-[var(--border-color)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-[var(--header-text)] mb-2">
                    Short Content
                  </label>
                  <textarea
                    name="shortContent"
                    value={formData.shortContent}
                    onChange={handleInputChange}
                    rows={2}
                    className="w-full px-4 py-2 border border-[var(--border-color)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  />
                </div>

                <div>
                  <label className="block text-sm text-[var(--header-text)] mb-2">
                    Full Content
                  </label>
                  <textarea
                    name="fullContent"
                    value={formData.fullContent}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-[var(--border-color)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  />
                </div>

                <div className="flex flex-col sm:flex-row justify-end gap-2 pt-2">
                  <button
                    onClick={handleCancel}
                    className="w-full sm:w-auto px-4 py-2 border border-[var(--border-color)] rounded text-[var(--header-text)]"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSaveService}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-[var(--primary)] text-[var(--primary-foreground)] rounded font-medium"
                  >
                    <Save className="w-4 h-4" />
                    Save Service
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row items-start justify-between gap-3 sm:gap-0">
                <div className="flex items-start gap-3 sm:gap-4 flex-1 w-full min-w-0">
                  <div className="relative w-20 sm:w-24 h-20 sm:h-24 bg-gray-100 border border-[var(--border-color)] rounded flex items-center justify-center shrink-0 overflow-hidden">
                    {service.photo ? (
                      <Image
                        src={service.photo}
                        alt="Service"
                        fill
                        className="object-cover rounded"
                      />
                    ) : (
                      <span className="text-xs text-gray-400">No Photo</span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-[var(--header-text)] mb-1 text-sm sm:text-base break-words">
                      {service.heading}
                    </h3>
                    <p className="text-xs text-gray-500 mb-2 break-all">
                      /{service.slug}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 break-words">
                      {service.shortContent}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 self-end sm:self-auto">
                  <button
                    onClick={() => handleEdit(service)}
                    className="p-2 text-[var(--primary)] rounded"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDeleteService(service.id)}
                    className="p-2 text-red-600 rounded"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-end mt-6">
        <button
          onClick={handleSubmit}
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2 bg-[var(--primary)] text-[var(--primary-foreground)] rounded font-medium"
        >
          <Save className="w-4 h-4" />
          Save All Changes
        </button>
      </div>
    </div>
  );
}
