"use client";
import {
  Upload,
  Save,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function GeneralSettingsPage() {
  const [formData, setFormData] = useState({
    companyName: "Construct",
    address: "123 Construction Ave, Building District, City 12345",
    phone: "+1 (555) 123-4567",
    email: "info@sysfoc.com",
    officeHours: "Mon-Fri: 8:00 AM - 6:00 PM, Sat-Sun: Closed",
    facebook: "https://facebook.com/Construct",
    twitter: "https://twitter.com/Construct",
    instagram: "https://instagram.com/Construct",
    linkedin: "https://linkedin.com/company/Construct",
    youtube: "https://youtube.com/Construct",
  });

  const [logoPreview, setLogoPreview] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  return (
    <div className="p-4 mx-auto bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-semibold text-[var(--header-text)] mb-6">
        General Settings
      </h1>

      <div className="space-y-6">
        {/* Company Logo */}
        <div className="bg-[var(--background)] border border-[var(--border-color)] rounded p-6">
          <h2 className="text-lg font-semibold text-[var(--header-text)] mb-4">
            Company Logo
          </h2>
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="relative w-32 h-32 border-2 border-dashed border-[var(--border-color)] rounded flex items-center justify-center bg-gray-50">
              {logoPreview ? (
                <div className="relative w-full h-full p-2">
                  <Image
                    src={logoPreview}
                    alt="Logo preview"
                    fill
                    className="object-contain"
                  />
                </div>
              ) : (
                <Upload className="w-8 h-8 text-gray-400" />
              )}
            </div>

            <div className="flex-1">
              <label className="block">
                <span className="text-sm text-[var(--header-text)] mb-2 block">
                  Upload Logo
                </span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleLogoChange}
                  className="block text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-medium file:bg-[var(--primary)] file:text-[var(--primary-foreground)] cursor-pointer"
                />
              </label>
              <p className="text-xs text-gray-500 mt-2">
                Recommended size: 200x200px. Max file size: 2MB
              </p>
            </div>
          </div>
        </div>

        {/* Company Information */}
        <div className="bg-[var(--background)] border border-[var(--border-color)] rounded p-6">
          <h2 className="text-lg font-semibold text-[var(--header-text)] mb-4">
            Company Information
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-[var(--header-text)] mb-2">
                Company Name
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-[var(--border-color)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              />
            </div>

            <div>
              <label className="block text-sm text-[var(--header-text)] mb-2">
                Address
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-2 border border-[var(--border-color)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-[var(--header-text)] mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-[var(--border-color)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                />
              </div>

              <div>
                <label className="block text-sm text-[var(--header-text)] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-[var(--border-color)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-[var(--header-text)] mb-2">
                Office Hours
              </label>
              <input
                type="text"
                name="officeHours"
                value={formData.officeHours}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-[var(--border-color)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              />
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="bg-[var(--background)] border border-[var(--border-color)] rounded p-6">
          <h2 className="text-lg font-semibold text-[var(--header-text)] mb-4">
            Social Media Links
          </h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Facebook className="w-5 h-5 text-blue-600" />
              <input
                type="url"
                name="facebook"
                value={formData.facebook}
                onChange={handleInputChange}
                placeholder="Facebook URL"
                className="flex-1 px-4 py-2 border border-[var(--border-color)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              />
            </div>

            <div className="flex items-center gap-3">
              <Twitter className="w-5 h-5 text-sky-500" />
              <input
                type="url"
                name="twitter"
                value={formData.twitter}
                onChange={handleInputChange}
                placeholder="Twitter URL"
                className="flex-1 px-4 py-2 border border-[var(--border-color)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              />
            </div>

            <div className="flex items-center gap-3">
              <Instagram className="w-5 h-5 text-pink-600" />
              <input
                type="url"
                name="instagram"
                value={formData.instagram}
                onChange={handleInputChange}
                placeholder="Instagram URL"
                className="flex-1 px-4 py-2 border border-[var(--border-color)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              />
            </div>

            <div className="flex items-center gap-3">
              <Linkedin className="w-5 h-5 text-blue-700" />
              <input
                type="url"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleInputChange}
                placeholder="LinkedIn URL"
                className="flex-1 px-4 py-2 border border-[var(--border-color)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              />
            </div>

            <div className="flex items-center gap-3">
              <Youtube className="w-5 h-5 text-red-600" />
              <input
                type="url"
                name="youtube"
                value={formData.youtube}
                onChange={handleInputChange}
                placeholder="YouTube URL"
                className="flex-1 px-4 py-2 border border-[var(--border-color)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              />
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            className="flex items-center gap-2 px-6 py-2 bg-[var(--primary)] text-[var(--primary-foreground)] rounded font-medium"
          >
            <Save className="w-4 h-4" />
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
