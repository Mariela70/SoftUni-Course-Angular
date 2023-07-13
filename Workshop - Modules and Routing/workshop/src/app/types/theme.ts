import { Post } from "./post";
import { UserId } from "./user-id";

export interface Theme {
    subscribers: string[];
    posts: any;
    _id: string;
    themeName: string;
    userId: UserId;
    created_at: string;
    updatedAt: string;
    _v: number;
    
}