"use client";
import { ArrowUp } from "lucide-react";
import React from "react";
import { useScrollToTop } from "../model/use-scroll-to-top";
import { cn } from "@/shared/lib/css";
import "./scroll-to-top.styles.css";

export const ScrollToTopButton: React.FC = () => {
  const { scrollToTop, isScrolled } = useScrollToTop();
  return (
    <div
      onClick={scrollToTop}
      className={cn(
        "scroll-to-top sticky bottom-5 left-full z-50 mb-2 mr-5 inline-flex animate-smoothIn cursor-pointer rounded-full bg-indigo-400 p-2 text-center text-white opacity-0",
        isScrolled ? "opacity-100" : "opacity-0",
      )}
    >
      <ArrowUp className="h-6 w-6" />
    </div>
  );
};
