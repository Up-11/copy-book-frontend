export type UserRole = "admin" | "student" | "teacher" | "noRole";

export const isUserRole = (value: string): value is UserRole => {
  return ["admin", "student", "teacher"].includes(value);
};
