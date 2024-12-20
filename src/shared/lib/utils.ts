import { UserRole } from "@/shared/types/user.types";

export const getBadgeByUserRole = (role: UserRole | null) => {
  let text = "";
  let classNames = "";
  switch (role) {
    case "student":
      text = "Ученик";
      classNames = "border-sky-200 bg-sky-100";
      return { text, classNames };
    case "teacher":
      text = "Учитель";
      classNames = "border-violet-200 bg-violet-100";
      return { text, classNames };
    case "admin":
      text = "Админ";
      classNames = "border-red-200 bg-red-100";
      return { text, classNames };
    default:
      return { text, classNames };
  }
};
//TODO переписать свич кейс
