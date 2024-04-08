import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { GlobalStyles } from '@/lib/styles/globalStyles'
import StyledComponentsRegistry from '@/lib/styles/registry'
import ThemeProviderLayout from '@/lib/styles/ThemeProviderLayout'
import { NextFont } from 'next/dist/compiled/@next/font'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import { Noto_Sans_JP } from 'next/font/google'

enum LOCALE {
  JA = 'ja',
}

//구글 폰트 적용시 사용
const Noto_Sans_Japan = Noto_Sans_JP({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
})

const SUITv1: NextFont = localFont({
  src: [
    {
      path: '../../public/fonts/SUITv1-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/SUITv1-Medium.woff2',
      weight: '500',
      style: 'medium',
    },
    {
      path: '../../public/fonts/SUITv1-SemiBold.woff2',
      weight: '600',
      style: 'semi-bold',
    },
    {
      path: '../../public/fonts/SUITv1-Bold.woff2',
      weight: '700',
      style: 'bold',
    },
    {
      path: '../../public/fonts/SUITv1-ExtraBold.woff2',
      weight: '800',
      style: 'bold',
    },
  ],
  display: 'swap', //로컬 폰트가 로드되기 전이라면 시스템 폰트를 먼저 사용하여 보여주겠다.
})

export const metadata: Metadata = {
  title: 'Storybook TEST',
  description: 'Storybook TEST',
}

//locale에 맞는 font-family로 변경
const convertToLocaleFont = (locale: string) => {
  switch (locale) {
    case LOCALE.JA:
      return Noto_Sans_Japan.className
    default:
      return SUITv1.className
  }
}

export default function LocaleLayout({ children, params: { locale } }: { children: React.ReactNode; params: { locale: string } }) {
  const messages = useMessages()

  return (
    <StyledComponentsRegistry>
      <GlobalStyles />
      <ThemeProviderLayout>
        <NextIntlClientProvider locale={locale} messages={messages} timeZone="Asia/Seoul">
          <html lang={locale}>
            <body className={convertToLocaleFont(locale)}>{children}</body>
          </html>
        </NextIntlClientProvider>
      </ThemeProviderLayout>
    </StyledComponentsRegistry>
  )
}
