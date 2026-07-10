export type UserRole =
  | "admin"
  | "instructor"
  | "student";

export interface StudioUser {
  id: string;
  full_name: string | null;
  username: string | null;
  role: UserRole;
}