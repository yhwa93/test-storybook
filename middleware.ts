import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  defaultLocale: 'ko',
  locales: ['ko', 'en', 'ja'],
})

export const config = {
  // Match only internationalized pathnames
  matcher: ['/((?!api|_next|vercel|images|fonts).*)'],
}
