import { Validators } from "@angular/forms";

export const baseCarValidations = {
    licensePlate: ['', [Validators.required, Validators.maxLength(7), Validators.minLength(7)]],
    model: ['', Validators.required],
    color: ['', Validators.required],
    year: [2000, [Validators.required]]
}