import { routes } from "@/shared/config/routes";
import { UiTooltip } from "@/shared/ui/custom/ui-tooltip";
import { FormInput } from "@/shared/ui/forms/form-input";
import { Button } from "@/shared/ui/other/button";
import { Skeleton } from "@/shared/ui/other/skeleton";
import Text from "@/shared/ui/view/text";
import Link from "next/link";
import React from "react";

export const LoginPrimitive: React.FC = () => {
  return (
    <>
      <div className="flex flex-col gap-1">
        <FormInput name="fisrtName" placeholder="Введите имя..." label="Имя" />
        <FormInput
          name="lastName"
          placeholder="Введите фамилию..."
          label="Фамилия"
        />
        <FormInput name="role" hidden />

        <FormInput
          name="email"
          placeholder="Введите электронную почту..."
          label="E-mail"
          type="text"
        />
        <FormInput
          name="password"
          placeholder="Введите пароль..."
          label="Пароль"
          type="password"
        />
      </div>
      <Button variant={"primary"} type="submit" className="mt-6 h-10 py-3">
        Войти
      </Button>
      <Skeleton className="h-20 w-9/12 self-center" />
      <div className="flex flex-col items-center justify-center">
        <UiTooltip
          content="Для восстановления пароля перейдите по этой ссылке"
          className="max-w-56"
        >
          <Link href={routes.resetPassword} className="inline-flex">
            <Text size="small" className="text-indigo-600 hover:underline">
              Забыли пароль?
            </Text>
          </Link>
        </UiTooltip>
      </div>
    </>
  );
};
