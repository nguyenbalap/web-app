export type Blog = {
    id: number;
    title: string;
    content: string;
    user: User;
    comments_count: number;
}

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    isActive: boolean;
    email: string;
    avatar: string;
    role: UserRole;
    username: string;
    created_at?: Date;
    updated_at?: Date
}

export enum UserRole {
    ADMIN = 1,
    USER = 2,
  }
  