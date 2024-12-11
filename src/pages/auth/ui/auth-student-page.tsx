import { AuthStudent } from "@/widgets/auth";
import React from "react";
import "./auth.styles.css";

export const AuthStudentPage: React.FC = () => {
  return (
    <main className="mx-auto min-h-screen w-full">
      <div className="auth-bg-image fixed inset-0 -z-10 bg-gray-200"></div>
      <div className="flex h-full flex-col items-center gap-3">
        <AuthStudent />
      </div>
    </main>
  );
};
