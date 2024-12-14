import { cn } from "@/shared/lib/css";
import React from "react";

export const StepItem: React.FC<{ step: number; currentStep?: number }> = ({
  step,
  currentStep,
}) => {
  return (
    <div
      className={cn(
        "pointer-events-none flex h-10 w-10 items-center justify-center rounded-lg border text-xl",
        currentStep === step
          ? "border-indigo-600 bg-indigo-50 text-indigo-500"
          : "border-indigo-300",
      )}
    >
      {step}
    </div>
  );
};
