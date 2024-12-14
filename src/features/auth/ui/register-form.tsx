"use client";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { RegisterPrimitive } from "@/entities/auth";
import { Separator } from "@/shared/ui/view/separator";
import Text from "@/shared/ui/view/text";
import { LoginProviders } from "./login-providers";
import { UserRole } from "@/shared/types/user.types";

export const RegisterForm: React.FC<{ currentUserRole: UserRole | null }> = ({
  currentUserRole,
}) => {
  const form = useForm({
    defaultValues: {
      login: "",
      password: "",
      role: currentUserRole,
    },
    mode: "onSubmit",
  });

  const onSubmit = (data: unknown) => {
    console.log("Form Data:", data);
  };
  return (
    <FormProvider {...form}>
      <div className="flex items-center justify-center">
        <div className="rounded-2xl p-layout px-1 max-md:w-full md:w-[420px] md:px-10">
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
          >
            <RegisterPrimitive />
          </form>

          <div className="relative my-6">
            <Text
              size="extraSmall"
              className="absolute -bottom-2.5 left-1/2 flex -translate-x-1/2 transform justify-center bg-white px-4 text-center"
            >
              или
            </Text>
            <Separator />
          </div>
          <LoginProviders onClickVk={() => {}} onClickYandex={() => {}} />
        </div>
      </div>
    </FormProvider>
  );
};
