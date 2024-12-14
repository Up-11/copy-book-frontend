import { cn } from "@/shared/lib/css";
import React from "react";
import { UiTooltip } from "./ui-tooltip";

interface Props {
  className?: string;
  children: React.ReactNode;
  hasTooltip?: boolean;
  title?: string;
}

export const UiIcon: React.FC<Props> = ({
  className,
  children,
  hasTooltip,
  title,
}) => {
  const withTooltip = () => {
    return (
      <UiTooltip content={title || "icon"}>
        <div
          className={cn(
            "h-6 w-6 cursor-pointer transition-colors hover:text-indigo-200",
            className,
          )}
        >
          {children}
        </div>
      </UiTooltip>
    );
  };
  const withoutTooltip = () => {
    return (
      <div
        className={cn(
          "h-6 w-6 cursor-pointer transition-colors hover:text-indigo-200",
          className,
        )}
      >
        {children}
      </div>
    );
  };
  return hasTooltip ? withTooltip() : withoutTooltip();
};
