"use client";
import { UiIcon } from "@/shared/ui/custom/ui-icon";
import { Input } from "@/shared/ui/input/input";
import Text from "@/shared/ui/view/text";
import Title from "@/shared/ui/view/title";
import { ArrowLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { StepItem } from "./step-item";
import { Label } from "@/shared/ui/input/label";
import { Button } from "@/shared/ui/other/button";
import { useStep } from "usehooks-ts";
import { UiInputOtp } from "@/shared/ui/custom/ui-input-otp";
import { UiTooltip } from "@/shared/ui/custom/ui-tooltip";

export const ResetPassword: React.FC = () => {
  const router = useRouter();

  //TODO Декомпозирвоать компонент(плюс в обсидиане идея по обьекту с инфой)
  const maxSteps = 3;

  const [currentStep, helpers] = useStep(maxSteps);

  const {
    canGoToPrevStep,
    canGoToNextStep,
    goToNextStep,
    goToPrevStep,
    reset,
  } = helpers;

  const getInfoByStep = (currentStep: number) => {
    switch (currentStep) {
      case 1: {
        return (
          <>
            <div className="flex h-full flex-col justify-between">
              <div className="flex w-full flex-col gap-2">
                <Label>
                  Введите адрес электронной почты на который придет код
                  подтверждения
                </Label>
                <Input placeholder="Адрес электронной почты " />
              </div>
            </div>
            <Button className="md:self-end" onClick={goToNextStep}>
              Отправить код
            </Button>
          </>
        );
      }
      case 2: {
        return (
          <>
            <div className="flex">
              <div className="flex w-full flex-col gap-4">
                <Label>Введите код который пришел на электронную почту </Label>
                <div className="mt-2 flex justify-center">
                  <UiInputOtp />
                </div>
                <Button
                  variant={"link"}
                  onClick={reset}
                  className="justify-start p-0 hover:text-primary/80 hover:underline"
                >
                  Отправить письму на другую почту
                </Button>
              </div>
            </div>
            <div className="flex justify-end">
              <Button className="md:self-end" onClick={goToNextStep}>
                Подтвердить код
              </Button>
            </div>
          </>
        );
      }
      case 3: {
        return (
          <>
            <div className="flex">
              <div className="flex flex-col gap-2">
                <div className="flex w-full flex-col gap-2">
                  <Label>Введите новый пароль</Label>
                  <Input placeholder="Новый пароль" />
                </div>
                <div className="flex w-full flex-col gap-2">
                  <Label>Подтвердите новый пароль</Label>
                  <Input placeholder="Подтверждение пароля" />
                </div>
              </div>
            </div>
            <div className="flex flex-col-reverse justify-between gap-2 md:flex-row">
              <Button className="md:self-end" onClick={reset}>
                Отмена
              </Button>

              <Button className="md:self-end" onClick={goToNextStep}>
                Подтвердить смену пароля
              </Button>
            </div>
          </>
        );
      }
    }
  };

  return (
    <div className="flex flex-col justify-between gap-5">
      <div>
        <div onClick={router.back}>
          <UiIcon className="flex h-8 w-8 items-center justify-center rounded-lg text-primary hover:bg-primary/10 hover:text-primary/90">
            <UiTooltip content="Назад к автоизации">
              <ArrowLeftIcon />
            </UiTooltip>
          </UiIcon>
        </div>
        <div className="mt-4 flex w-full justify-center gap-10">
          {Array(maxSteps)
            .fill(maxSteps)
            .map((_, i) => (
              <StepItem
                step={i + 1}
                currentStep={currentStep}
                key={i}
              ></StepItem>
            ))}
        </div>
      </div>
      <div>
        <Title>Восстановление пароля</Title>
        <Text size="small" color="gray">
          Проследуйте всем шагам для того, чтобы восстановить пароль
        </Text>
      </div>
      {getInfoByStep(currentStep)}
    </div>
  );
};
