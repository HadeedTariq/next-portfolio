"use client";

import { AdminPasswordHandler } from "./AdminPasswordHandler";
import { useStore } from "@/store/stroe";

interface AdminProviderProps {
  children: React.ReactNode;
}

const AdminProvider = ({ children }: AdminProviderProps) => {
  const { adminPassword, setAdminPassword } = useStore();
  if (!adminPassword) {
    return (
      <>
        <AdminPasswordHandler
          onEnter={(password: string) => setAdminPassword(password)}
        />
      </>
    );
  }
  if (adminPassword !== process.env.NEXT_PUBLIC_ADMIN_PASSWORD!) {
    return (
      <>
        <AdminPasswordHandler
          onEnter={(password: string) => setAdminPassword(password)}
          error
        />
      </>
    );
  }
  return <>{children}</>;
};

export default AdminProvider;
