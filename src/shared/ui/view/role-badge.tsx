import { cn } from "@/shared/lib/css";
import { getBadgeByUserRole } from "@/shared/lib/utils";
import { UserRole } from "@/shared/types/user.types";
import React from "react";
import Text from "./text";

export const RoleBadge: React.FC<{ role: UserRole | null }> = ({ role }) => {
  const { text, classNames } = getBadgeByUserRole(role);
  return (
    <div
      className={cn(
        "pointer-events-none inline-flex rounded-md border-2 p-1 px-6",
        classNames,
      )}
    >
      <Text size="medium"> {text}</Text>
    </div>
  );
};
