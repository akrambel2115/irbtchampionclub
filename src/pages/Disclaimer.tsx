import { useTranslation } from 'react-i18next';

export default function DisclaimerPage() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-950 p-6 text-center">
      <div dir="rtl" className="space-y-8 max-w-2xl glass-morphism rounded-2xl p-10 border border-gray-800 shadow-2xl text-right">
        <h1 className="text-4xl font-bold text-yellow-500 mb-4">{t('disclaimer.title')}</h1>
        <p className="text-gray-300 mb-6">{t('disclaimer.intro')}</p>

        <ul className="text-gray-400 text-right mb-6 list-disc list-inside space-y-2">
          <li>{t('disclaimer.ownerProvided')}</li>
          <li>{t('disclaimer.noResponsibility')}</li>
        </ul>

        <p className="text-gray-400">{t('disclaimer.contact')}</p>
        <p className="text-gray-500 text-xs mt-8">{t('disclaimer.lastUpdated')}</p>
      </div>
    </div>
  );
}
