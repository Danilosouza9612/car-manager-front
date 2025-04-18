import { Validators } from "@angular/forms";

export const baseValidations = {
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    birthday: ['', Validators.required],
    phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(11)]],
}

export const baseCreateValidations = {
    ...baseValidations,
    login: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
    passwordConfirmation: ['', [Validators.required, Validators.minLength(6)]],
}