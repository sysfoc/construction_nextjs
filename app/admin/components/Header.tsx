import React from "react";
import { Home, LogOut, Menu, User } from "lucide-react";

interface AdminHeaderProps {
  onMenuClick: () => void;
}

export default function AdminHeader({ onMenuClick }: AdminHeaderProps) {
  return (
    <header className="bg-white fixed top-0 border-b w-full border-gray-200">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Name */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
              <Home className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-xl font-semibold text-blue-900">
              Construct
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
