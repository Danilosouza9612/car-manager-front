import { Car } from "../car/car";

export interface User {
    firstName: string;
    lastName: string;
    email: string;
    birthday: string;
    phone: String;
}

export interface UserCreation extends User {
    login: string;
    password: string;
}

export interface UserFull extends UserCreation{
    cars?: Car[];
    lastLogin: string;
    createdAt: string;
    photoPath: String;
}

export interface UserUpdate extends User {
    id: number
}

export interface UserResponse extends User{
    id: number;
    photoPath: String
}