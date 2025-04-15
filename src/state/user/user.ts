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
    cars?: Car[];
}

export interface UserUpdate extends User {
    id: number
}