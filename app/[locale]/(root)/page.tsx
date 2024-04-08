import { useTranslations } from 'next-intl'

export default function Page() {
  const t = useTranslations('About')

  return (
    <main>
      <h1>{t('title')}</h1>
    </main>
  )
}
