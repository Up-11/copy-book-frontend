import { Eye, EyeClosed } from "lucide-react";
import React from "react";

export const ShowPasswordButton: React.FC<{
  onClick: () => void;
  isShown: boolean;
}> = ({ onClick, isShown }) => {
  return isShown ? (
    <Eye
      onClick={onClick}
      className="absolute right-11 top-1/2 h-5 w-5 -translate-y-1/2 cursor-pointer bg-white text-opacity-50 transition-opacity hover:text-opacity-100"
    />
  ) : (
    <EyeClosed
      onClick={onClick}
      className="absolute right-11 top-1/2 h-5 w-5 -translate-y-1/2 cursor-pointer bg-white text-opacity-50 transition-opacity hover:text-opacity-100"
    />
  );
};
