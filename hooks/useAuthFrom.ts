import { Store } from 'effector'
import { useUnit } from 'effector-react'
import { useForm } from 'react-hook-form'
import { IInputs } from '@/types/authPopup'

export const useAuthForm = (
) => {

  const {
    register,
    formState: { errors },
  } = useForm<IInputs>()

  return {
    register,
    errors,
  }
}
