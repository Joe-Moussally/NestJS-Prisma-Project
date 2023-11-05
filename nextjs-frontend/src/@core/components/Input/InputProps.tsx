// ** Input interface
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * The label of the input field
   *
   * @default ''
   */
  label: string
  /**
   * If `true`, the input accent color will turn red
   *
   * @default false
   */
  error: boolean
  /**
   * If error is true, this error message will be displayed
   *
   * @default '''
   */
  errorMessage: string
  /**
   * If `true`, the input container will be at 100% full width
   *
   * @default false
   */
  fullWidth: boolean
}
