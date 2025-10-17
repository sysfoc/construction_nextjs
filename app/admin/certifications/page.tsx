"use client";
import { Save, Plus, Trash2, Edit2, X, Upload } from "lucide-react";
import Image from "next/image";
import { useState, ChangeEvent } from "react";

interface Certification {
  id: number;
  title: string;
  description: string;
  image: string | null;
}

interface FormData {
  title: string;
  description: string;
  imagePreview: string | null;
}

export default function CertificationsManagementPage() {
  const [certifications, setCertifications] = useState<Certification[]>([
    {
      id: 1,
      title: "ISO 9001:2015 Quality Management",
      description:
        "Certified for maintaining international standards in quality management systems, ensuring consistent delivery of high-quality construction services.",
      image: null,
    },
    {
      id: 2,
      title: "OSHA Safety Certification",
      description:
        "Occupational Safety and Health Administration certified, demonstrating our commitment to workplace safety and regulatory compliance.",
      image: null,
    },
    {
      id: 3,
      title: "LEED Green Building Certification",
      description:
        "Leadership in Energy and Environmental Design certified, showcasing our expertise in sustainable and environmentally responsible construction.",
      image: null,
    },
    {
      id: 4,
      title: "Construction Industry Scheme",
      description:
        "Registered under the Construction Industry Scheme, ensuring compliance with tax regulations and industry standards.",
      image: null,
    },
  ]);

  const [editingCertification, setEditingCertification] = useState<
    number | null
  >(null);
  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
    imagePreview: null,
  });

  const handleEdit = (certification: Certification) => {
    setEditingCertification(certification.id);
    setFormData({
      title: certification.title,
      description: certification.description,
      imagePreview: certification.image,
    });
  };

  const handleCancel = () => {
    setEditingCertification(null);
    setFormData({
      title: "",
      description: "",
      imagePreview: null,
    });
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          imagePreview: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveCertification = () => {
    setCertifications((prev) =>
      prev.map((certification) =>
        certification.id === editingCertification
          ? {
              ...certification,
              title: formData.title,
              description: formData.description,
              image: formData.imagePreview,
            }
          : certification
      )
    );
    handleCancel();
  };

  const handleAddCertification = () => {
    const newCertification: Certification = {
      id: Date.now(),
      title: "New Certification",
      description: "Description of the certification",
      image: null,
    };
    setCertifications((prev) => [newCertification, ...prev]);
  };

  const handleDeleteCertification = (id: number) => {
    setCertifications((prev) =>
      prev.filter((certification) => certification.id !== id)
    );
  };

  const handleSubmit = () => {
    console.log("Certifications saved:", certifications);
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 overflow-x-hidden">
      <div className="p-4 sm:p-6 max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 items-stretch sm:items-center justify-between mb-4 sm:mb-6">
          <h1 className="text-xl sm:text-2xl font-semibold text-[var(--header-text)] break-words">
            Certifications Management
          </h1>
          <button
            onClick={handleAddCertification}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-[var(--primary)] text-[var(--primary-foreground)] rounded font-medium text-sm sm:text-base whitespace-nowrap"
          >
            <Plus className="w-4 h-4 flex-shrink-0" />
            <span>Add Certification</span>
          </button>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {certifications.map((certification) => (
            <div
              key={certification.id}
              className="bg-[var(--background)] border border-[var(--border-color)] rounded p-3 sm:p-4 w-full overflow-hidden"
            >
              {editingCertification === certification.id ? (
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <h3 className="text-base sm:text-lg font-semibold text-[var(--header-text)]">
                      Edit Certification
                    </h3>
                    <button
                      onClick={handleCancel}
                      className="text-gray-500 flex-shrink-0"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="w-full">
                    <label className="block text-xs sm:text-sm text-[var(--header-text)] mb-2">
                      Certification Image
                    </label>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-28 h-28 sm:w-32 sm:h-32 border-2 border-dashed border-[var(--border-color)] rounded flex items-center justify-center bg-gray-50 flex-shrink-0 relative">
                        {formData.imagePreview ? (
                          <Image
                            src={formData.imagePreview}
                            alt="Image preview"
                            fill
                            className="object-contain p-2"
                          />
                        ) : (
                          <Upload className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                          className="block text-xs sm:text-sm text-gray-600 file:mr-2 sm:file:mr-4 file:py-1.5 sm:file:py-2 file:px-3 sm:file:px-4 file:rounded file:border-0 file:text-xs sm:file:text-sm file:font-medium file:bg-[var(--primary)] file:text-[var(--primary-foreground)] cursor-pointer"
                        />
                        <p className="text-xs text-gray-500 mt-2">
                          Recommended: 360x240px badge
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-full">
                    <label className="block text-xs sm:text-sm text-[var(--header-text)] mb-1.5 sm:mb-2">
                      Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 border border-[var(--border-color)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm sm:text-base"
                    />
                  </div>

                  <div className="w-full">
                    <label className="block text-xs sm:text-sm text-[var(--header-text)] mb-1.5 sm:mb-2">
                      Description
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-3 sm:px-4 py-2 border border-[var(--border-color)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm sm:text-base resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row justify-end gap-2 pt-2 w-full">
                    <button
                      onClick={handleCancel}
                      className="w-full sm:w-auto px-4 py-2 border border-[var(--border-color)] rounded text-[var(--header-text)] text-sm sm:text-base"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSaveCertification}
                      className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-[var(--primary)] text-[var(--primary-foreground)] rounded font-medium text-sm sm:text-base"
                    >
                      <Save className="w-4 h-4 flex-shrink-0" />
                      <span>Save Certification</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row items-start justify-between gap-3 sm:gap-0 w-full">
                  <div className="flex items-start gap-3 sm:gap-4 flex-1 min-w-0 w-full">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 border border-[var(--border-color)] rounded flex items-center justify-center flex-shrink-0 relative">
                      {certification.image ? (
                        <Image
                          src={certification.image}
                          alt={certification.title}
                          fill
                          className="object-contain p-2"
                        />
                      ) : (
                        <span className="text-xs text-gray-400">No Image</span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-[var(--header-text)] mb-1 sm:mb-2 text-sm sm:text-base break-words">
                        {certification.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 break-words">
                        {certification.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 w-full sm:w-auto justify-end sm:ml-4 flex-shrink-0">
                    <button
                      onClick={() => handleEdit(certification)}
                      className="p-2 text-[var(--primary)] rounded"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() =>
                        handleDeleteCertification(certification.id)
                      }
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

        <div className="flex justify-end mt-4 sm:mt-6 w-full">
          <button
            onClick={handleSubmit}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2 bg-[var(--primary)] text-[var(--primary-foreground)] rounded font-medium text-sm sm:text-base"
          >
            <Save className="w-4 h-4 flex-shrink-0" />
            <span>Save All Changes</span>
          </button>
        </div>
      </div>
    </div>
  );
}
