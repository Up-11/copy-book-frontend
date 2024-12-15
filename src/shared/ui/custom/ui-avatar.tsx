import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../view/avatar";

interface IAvatarProps {}

export const UiAvatar: React.FC<IAvatarProps> = () => {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};
