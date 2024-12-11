"use client";

import { LoginStudent, RegisterStudent } from "@/features/auth";
import { Skeleton } from "@/shared/ui/other/skeleton";
import { LogoWithText } from "@/shared/ui/view/logo-with-text";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/shared/ui/view/tabs";
import Title from "@/shared/ui/view/title";
import { useTabsQuery } from "../model/use-tabs-query";
import { RoleBadge } from "@/shared/ui/view/role-badge";

export const AuthStudent: React.FC = () => {
  const { currentTab, handleTabChange } = useTabsQuery();

  if (currentTab === "") {
    return (
      <div className="flex h-screen justify-center">
        <div className="mt-2 flex flex-col items-center gap-3">
          <LogoWithText color="primary" />
          <Skeleton className="h-[1000px] w-[400px] rounded-lg" />
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="mt-2 flex items-center gap-2">
        <LogoWithText color="primary" />
        <RoleBadge role="student" />
      </div>
      <div className="flex flex-col items-center rounded-xl bg-white pt-3 shadow-lg max-md:w-full md:rounded-2xl">
        <Tabs
          value={currentTab}
          onValueChange={handleTabChange}
          className="mb-2 flex flex-col items-center"
        >
          <TabsList className="flex">
            <TabsTrigger value="login">Вход</TabsTrigger>
            <TabsTrigger value="register">Регистрация</TabsTrigger>
          </TabsList>
          <TabsContent
            value="login"
            className="flex w-full flex-col items-center"
          >
            <Title size="large" color="indigo">
              Вход
            </Title>
            <LoginStudent />
          </TabsContent>
          <TabsContent value="register" className="flex flex-col items-center">
            <Title size="large" color="indigo">
              Регистрация
            </Title>
            <RegisterStudent />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};
