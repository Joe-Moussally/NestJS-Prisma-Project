// ** Variants Imports
import { ButtonVariants } from '.'

// ** Button interface
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * If `true`, the button will show a spinner.
   *
   * @default false
   */
  loading: boolean
  /**
   * What should the button text be
   *
   * @default undefined
   */
  label: string
  /**
   * The type of the button. Accepted values are "solid", "outline", and "light"
   *
   * @default solid
   */
  variant: ButtonVariants
}
