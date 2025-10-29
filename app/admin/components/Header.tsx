import React from "react";
import { LogOut, Menu, User } from "lucide-react";
import { useGeneralSettings } from "@/app/context/GeneralSettingsContext";
import Image from "next/image";

interface AdminHeaderProps {
  onMenuClick: () => void;
}

export default function AdminHeader({ onMenuClick }: AdminHeaderProps) {
  const { settings } = useGeneralSettings();
  return (
    <header className="bg-white fixed top-0 border-b w-full border-gray-200 z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-1 z-20">
            {settings?.logo && (
              <div className="w-10 h-10 lg:w-12 lg:h-12 relative">
                <Image
                  src={settings.logo}
                  alt="Company Logo"
                  fill
                  className="object-contain"
                />
              </div>
            )}
            <span className="text-xl lg:text-2xl font-bold text-header-text">
              {settings?.companyName}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button className="hidden sm:flex gap-2 items-center px-4 py-2 bg-[var(--primary)] text-[var(--primary-foreground)] rounded transition-colors text-sm font-medium">
              <User className="w-4 h-4" />
              <span>Go to User Side</span>
            </button>
            <button className="sm:hidden p-2 bg-[var(--primary)] text-[var(--primary-foreground)] rounded transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button className="hidden sm:flex gap-2 items-center px-4 py-2 bg-[var(--primary)] text-[var(--primary-foreground)] rounded transition-colors text-sm font-medium">
              <LogOut className="w-4 h-4" />
              <span>LogOut</span>
            </button>
            <button className="sm:hidden p-2 bg-[var(--primary)] text-[var(--primary-foreground)] rounded transition-colors">
              <LogOut className="w-5 h-5" />
            </button>
            <button
              onClick={onMenuClick}
              className="lg:hidden p-2 bg-[var(--primary)] text-[var(--primary-foreground)] rounded transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
