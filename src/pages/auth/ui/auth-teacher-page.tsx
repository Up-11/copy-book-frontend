import React from "react";
import "./auth.styles.css";
import { AuthWidget } from "@/widgets/auth";

export const AuthTeacherPage: React.FC = () => {
  return (
    <main className="mx-auto min-h-screen w-full">
      <div className="fixed inset-0 -z-10 bg-gray-200"></div>
      <div className="flex h-full flex-col items-center gap-3">
        <AuthWidget />
      </div>
    </main>
  );
};
