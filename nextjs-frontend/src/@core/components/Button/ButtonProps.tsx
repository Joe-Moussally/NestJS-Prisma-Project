// ** Variants Imports
import { ButtonVariants } from '.'

// ** Button interface
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * If `true`, the button will show a spinner.
   *
   * @default false
   */
  loading?: boolean
  /**
   * What should the button text be
   *
   * @default undefined
   */
  label?: string
  /**
   * The type of the button. Accepted values are "solid", "outline", and "light"
   *
   * @default solid
   */
  variant?: ButtonVariants
  /**
   * Render an icon for the button
   *
   * @default undefined
   */
  icon?: React.ReactNode
  /**
   * If true, only show the icon without a background
   *
   * @default false
   */
  iconButton?: boolean
}
