import { LoginStudent } from "@/features/auth";
import { RegisterStudent } from "@/features/auth/ui/register-form";
import { RoleBadge } from "@/shared/ui/view/role-badge";
import Title from "@/shared/ui/view/title";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Test",
};
export default function TestPage() {
  return (
    <div className="flex h-screen gap-4 bg-gray-300">
      <div>
        <RoleBadge role="student" />
        <RoleBadge role="admin" />
        <RoleBadge role="teacher" />
      </div>
      <div className="flex flex-col gap-2">
        <Title>Примитив формы LOGIN</Title>
        <LoginStudent />
      </div>
      <div className="flex flex-col gap-2">
        <Title>Примитив формы REGISTER</Title>
        <RegisterStudent />
      </div>
    </div>
  );
}
