import Link from "next/link";
import React from "react";
import Title from "./title";
import { routes } from "@/shared/config/routes";
import Image from "next/image";
import { cn } from "@/shared/lib/css";

export const LogoWithText: React.FC<{
  hasLink?: boolean;
  color?: "primary" | "indigo";
}> = ({ color = "indigo", hasLink = true }) => {
  return hasLink ? (
    <Link
      href={routes.home}
      className="flex animate-smoothIn items-center gap-1"
    >
      <Image src="/assets/images/logo.svg" width={40} height={40} alt="logo" />
      <Title
        size="large"
        gentiumFont
        className={cn(
          "uppercase",
          color === "indigo" ? "text-indigo-50" : "text-primary",
        )}
      >
        copybook
      </Title>
    </Link>
  ) : (
    <div className="flex animate-smoothIn items-center gap-1">
      <Image src="/assets/images/logo.svg" width={40} height={40} alt="logo" />
      <Title
        size="large"
        gentiumFont
        className={cn(
          "uppercase",
          color === "indigo" ? "text-indigo-50" : "text-primary",
        )}
      >
        copybook
      </Title>
    </div>
  );
};
