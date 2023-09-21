const devices = {
  mobile: 320,
  tablet: 640,
  desktop: 960,
}


export function media(size: 'mobile' | 'tablet' | 'desktop', maxWidth?: boolean): string {
  if (!maxWidth) return `(min-width: ${devices[size] / 16}em)`
  return `(max-width: ${devices[size] / 16}em)`
}

