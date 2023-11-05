export type Theme = {
  mode: 'light' | 'dark'
  palette: {
    primary: string
    secondary: string
    background: string
    text: string
    contrastText: string
    error: string
    success: string
    warning: string
    info: string
  }
  spacing: {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
  }
}
