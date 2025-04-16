import { Validators } from "@angular/forms";

export const baseValidations = {
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    birthday: ['', Validators.required],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
}

export const baseCreateValidations = {
    ...baseValidations,
    login: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
    passwordConfirmation: ['', [Validators.required, Validators.minLength(6)]],
}