"use client";
import { Save, Plus, Trash2, Edit2, X, Upload } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

interface Partner {
  id: number;
  name: string;
  logo: string | null;
}

export default function PartnersManagementPage() {
  const [partners, setPartners] = useState<Partner[]>([
    { id: 1, name: "Steel Solutions Inc.", logo: null },
    { id: 2, name: "BuildTech Equipment", logo: null },
    { id: 3, name: "Concrete Masters Ltd.", logo: null },
    { id: 4, name: "Premier Tools & Hardware", logo: null },
    { id: 5, name: "Elite Construction Materials", logo: null },
    { id: 6, name: "Quality Cement Corporation", logo: null },
  ]);

  const [editingPartner, setEditingPartner] = useState<Partner | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    logoPreview: null as string | null,
  });

  useEffect(() => {
    if (editingPartner) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [editingPartner]);

  const handleEdit = (partner: Partner) => {
    setEditingPartner(partner);
    setFormData({ name: partner.name, logoPreview: partner.logo });
  };

  const handleCancel = () => {
    setEditingPartner(null);
    setFormData({ name: "", logoPreview: null });
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () =>
        setFormData((prev) => ({
          ...prev,
          logoPreview: reader.result as string,
        }));
      reader.readAsDataURL(file);
    }
  };

  const handleSavePartner = () => {
    if (editingPartner) {
      setPartners((prev) =>
        prev.map((p) =>
          p.id === editingPartner.id
            ? { ...p, name: formData.name, logo: formData.logoPreview }
            : p
        )
      );
      handleCancel();
    }
  };

  const handleAddPartner = () => {
    const newPartner = { id: Date.now(), name: "New Partner", logo: null };
    setPartners((prev) => [...prev, newPartner]);
    handleEdit(newPartner);
  };

  const handleDeletePartner = (id: number) => {
    setPartners((prev) => prev.filter((p) => p.id !== id));
  };

  const handleSubmit = () => {
    console.log("Partners saved:", partners);
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 overflow-x-hidden">
      <div className="p-4 sm:p-6 mx-auto">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 items-stretch sm:items-center justify-between mb-4 sm:mb-6">
          <h1 className="text-xl sm:text-2xl font-semibold text-[var(--header-text)] break-words">
            Partners Management
          </h1>
          <button
            onClick={handleAddPartner}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-[var(--primary)] text-[var(--primary-foreground)] rounded font-medium text-sm sm:text-base whitespace-nowrap"
          >
            <Plus className="w-4 h-4 flex-shrink-0" />
            <span>Add Partner</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="bg-[var(--background)] border border-[var(--border-color)] rounded p-3 sm:p-4 w-full overflow-hidden"
            >
              <div className="w-full h-28 sm:h-32 bg-gray-50 border border-[var(--border-color)] rounded flex items-center justify-center mb-2 sm:mb-3 relative">
                {partner.logo ? (
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain p-3 sm:p-4"
                  />
                ) : (
                  <span className="text-xs text-gray-400">No Logo</span>
                )}
              </div>

              <h3 className="font-semibold text-[var(--header-text)] text-xs sm:text-sm mb-2 sm:mb-3 text-center break-words px-1">
                {partner.name}
              </h3>
              <div className="flex justify-center gap-2">
                <button
                  onClick={() => handleEdit(partner)}
                  className="p-2 text-[var(--primary)] rounded"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDeletePartner(partner.id)}
                  className="p-2 text-red-600 rounded"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
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

      {editingPartner && (
        <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
          <div className="bg-[var(--background)] rounded shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-[var(--border-color)]">
              <h2 className="text-lg font-semibold text-[var(--header-text)]">
                Edit Partner
              </h2>
              <button onClick={handleCancel} className="text-gray-500">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm text-[var(--header-text)] mb-2">
                  Partner Logo
                </label>
                <div className="w-full h-32 border-2 border-dashed border-[var(--border-color)] rounded flex items-center justify-center bg-gray-50 mb-3 relative">
                  {formData.logoPreview ? (
                    <Image
                      src={formData.logoPreview}
                      alt="Logo preview"
                      fill
                      className="object-contain p-4"
                    />
                  ) : (
                    <Upload className="w-8 h-8 text-gray-400" />
                  )}
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleLogoChange}
                  className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-medium file:bg-[var(--primary)] file:text-[var(--primary-foreground)] cursor-pointer"
                />
                <p className="text-xs text-gray-500 mt-2">
                  Recommended: 300x150px
                </p>
              </div>

              <div>
                <label className="block text-sm text-[var(--header-text)] mb-2">
                  Partner Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  className="w-full px-4 py-2 border border-[var(--border-color)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                />
              </div>
            </div>

            <div className="flex gap-3 p-4 border-t border-[var(--border-color)]">
              <button
                onClick={handleCancel}
                className="flex-1 px-4 py-2 border border-[var(--border-color)] rounded text-[var(--header-text)]"
              >
                Cancel
              </button>
              <button
                onClick={handleSavePartner}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[var(--primary)] text-[var(--primary-foreground)] rounded font-medium"
              >
                <Save className="w-4 h-4" />
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
