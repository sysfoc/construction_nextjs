"use client";
import { Save, Plus, Trash2, Edit2, X, Shield, User } from "lucide-react";
import { useState } from "react";

interface UserRole {
  id: string;
  name: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: "active" | "inactive";
  joinDate: string;
  permissions: string[];
}

interface FormData {
  name: string;
  email: string;
  role: string;
  status: "active" | "inactive";
  permissions: string[];
}

const roles: UserRole[] = [
  { id: "admin", name: "Admin" },
  { id: "user", name: "User" },
];

const allPermissions = [
  "manage_users",
];

export default function UserManagementPage() {
  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      name: "John Admin",
      email: "john@example.com",
      role: "admin",
      status: "active",
      joinDate: "2024-01-15",
      permissions: allPermissions,
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah@example.com",
      role: "admin",
      status: "active",
      joinDate: "2024-02-20",
      permissions: ["manage_users"],
    },
    {
      id: 3,
      name: "Mike Wilson",
      email: "mike@example.com",
      role: "user",
      status: "active",
      joinDate: "2024-03-10",
      permissions: [],
    },
    {
      id: 4,
      name: "Emma Davis",
      email: "emma@example.com",
      role: "user",
      status: "inactive",
      joinDate: "2024-04-05",
      permissions: [],
    },
    {
      id: 5,
      name: "David Smith",
      email: "david@example.com",
      role: "admin",
      status: "active",
      joinDate: "2024-05-12",
      permissions: ["manage_users"],
    },
  ]);

  const [editingUser, setEditingUser] = useState<number | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    role: "",
    status: "active",
    permissions: [],
  });

  const handleEdit = (user: User) => {
    setEditingUser(user.id);
    setFormData({
      name: user.name,
      email: user.email,
      role: user.role,
      status: user.status,
      permissions: user.permissions,
    });
  };

  const handleCancel = () => {
    setEditingUser(null);
    setFormData({
      name: "",
      email: "",
      role: "",
      status: "active",
      permissions: [],
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePermissionChange = (permission: string) => {
    setFormData((prev) => ({
      ...prev,
      permissions: prev.permissions.includes(permission)
        ? prev.permissions.filter((p) => p !== permission)
        : [...prev.permissions, permission],
    }));
  };

  const handleSaveUser = () => {
    if (editingUser) {
      setUsers((prev) =>
        prev.map((u) =>
          u.id === editingUser
            ? {
                ...u,
                name: formData.name,
                email: formData.email,
                role: formData.role,
                status: formData.status,
                permissions: formData.permissions,
              }
            : u
        )
      );
      handleCancel();
    }
  };

  const handleAddUser = () => {
    const newUser: User = {
      id: Date.now(),
      name: "New User",
      email: "newuser@example.com",
      role: "user",
      status: "active",
      joinDate: new Date().toISOString().split("T")[0],
      permissions: [],
    };
    setUsers((prev) => [newUser, ...prev]);
    handleEdit(newUser);
  };

  const handleDeleteUser = (id: number) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  const handleSubmit = () => {
    console.log("Users saved:", users);
  };

  const getRoleLabel = (roleId: string) => {
    return roles.find((r) => r.id === roleId)?.name || roleId;
  };

  const getPermissionLabel = (permission: string) => {
    return permission
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 overflow-x-hidden">
      <div className="p-4 sm:p-6 mx-auto">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 items-stretch sm:items-center justify-between mb-4 sm:mb-6">
          <h1 className="text-xl sm:text-2xl font-semibold text-[var(--header-text)] break-words">
            User Management
          </h1>
          <button
            onClick={handleAddUser}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-[var(--primary)] text-[var(--primary-foreground)] rounded font-medium text-sm sm:text-base whitespace-nowrap"
          >
            <Plus className="w-4 h-4 flex-shrink-0" />
            <span>Add User</span>
          </button>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-[var(--background)] border border-[var(--border-color)] rounded p-3 sm:p-4 w-full overflow-hidden"
            >
              {editingUser === user.id ? (
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <h3 className="text-base sm:text-lg font-semibold text-[var(--header-text)]">
                      Edit User
                    </h3>
                    <button
                      onClick={handleCancel}
                      className="text-gray-500 flex-shrink-0"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="w-full">
                      <label className="block text-xs sm:text-sm text-[var(--header-text)] mb-1.5 sm:mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-3 sm:px-4 py-2 border border-[var(--border-color)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm sm:text-base"
                      />
                    </div>

                    <div className="w-full">
                      <label className="block text-xs sm:text-sm text-[var(--header-text)] mb-1.5 sm:mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 sm:px-4 py-2 border border-[var(--border-color)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="w-full">
                      <label className="block text-xs sm:text-sm text-[var(--header-text)] mb-1.5 sm:mb-2">
                        Role
                      </label>
                      <select
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        className="w-full px-3 sm:px-4 py-2 border border-[var(--border-color)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary)] bg-white text-sm sm:text-base"
                      >
                        {roles.map((r) => (
                          <option key={r.id} value={r.id}>
                            {r.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="w-full">
                      <label className="block text-xs sm:text-sm text-[var(--header-text)] mb-1.5 sm:mb-2">
                        Status
                      </label>
                      <select
                        name="status"
                        value={formData.status}
                        onChange={handleInputChange}
                        className="w-full px-3 sm:px-4 py-2 border border-[var(--border-color)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--primary)] bg-white text-sm sm:text-base"
                      >
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                      </select>
                    </div>
                  </div>

                  <div className="w-full">
                    <label className="block text-xs sm:text-sm text-[var(--header-text)] mb-2 sm:mb-3">
                      Permissions
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-gray-50 p-3 sm:p-4 rounded border border-[var(--border-color)]">
                      {allPermissions.map((permission) => (
                        <label
                          key={permission}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={formData.permissions.includes(permission)}
                            onChange={() => handlePermissionChange(permission)}
                            className="w-4 h-4 accent-[var(--primary)]"
                          />
                          <span className="text-xs sm:text-sm text-[var(--header-text)]">
                            {getPermissionLabel(permission)}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-end gap-2 pt-2 w-full">
                    <button
                      onClick={handleCancel}
                      className="w-full sm:w-auto px-4 py-2 border border-[var(--border-color)] rounded text-[var(--header-text)] text-sm sm:text-base"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSaveUser}
                      className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-[var(--primary)] text-[var(--primary-foreground)] rounded font-medium text-sm sm:text-base"
                    >
                      <Save className="w-4 h-4 flex-shrink-0" />
                      <span>Save User</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row items-start justify-between gap-3 sm:gap-0 w-full">
                  <div className="flex items-start gap-3 sm:gap-4 flex-1 w-full min-w-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[var(--primary)] rounded flex items-center justify-center shrink-0">
                      <User className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--primary-foreground)]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1">
                        <h3 className="font-semibold text-[var(--header-text)] text-sm sm:text-base break-words">
                          {user.name}
                        </h3>
                        <span
                          className={`text-xs px-2 py-1 rounded whitespace-nowrap flex-shrink-0 font-medium ${
                            user.status === "active"
                              ? "bg-green-100 text-green-700"
                              : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {user.status === "active" ? "Active" : "Inactive"}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mb-1 break-all">
                        {user.email}
                      </p>
                      <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-600 mb-1.5">
                        <Shield className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                        <span>{getRoleLabel(user.role)}</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {user.permissions.slice(0, 2).map((perm) => (
                          <span
                            key={perm}
                            className="text-xs bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded"
                          >
                            {getPermissionLabel(perm)}
                          </span>
                        ))}
                        {user.permissions.length > 2 && (
                          <span className="text-xs text-gray-500 px-1.5 py-0.5">
                            +{user.permissions.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 w-full sm:w-auto sm:ml-4 justify-end flex-shrink-0">
                    <button
                      onClick={() => handleEdit(user)}
                      className="p-2 text-[var(--primary)] rounded"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteUser(user.id)}
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