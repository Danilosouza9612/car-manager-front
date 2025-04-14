import { Car } from "../car/car";

export interface User {
    firstName: string;
    lastName: string;
    email: string;
    birthday: string;
    cars?: Car[];
    lastLogin?: String;
    createdAt?: String
}