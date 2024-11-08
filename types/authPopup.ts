import { FieldErrors, FieldErrorsImpl, UseFormRegister } from "react-hook-form";

export interface IInputs {
  name: string
  email: string
  number: number
}

export interface INameErrorMessageProps {
  errors: FieldErrors<IInputs & { [index: string]: string }>
  fieldName: string
  className?: string
}

export interface IAuthInput {
  register: UseFormRegister<IInputs>
  errors: Partial<FieldErrorsImpl<IInputs>>
}
