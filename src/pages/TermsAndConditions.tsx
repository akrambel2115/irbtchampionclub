import { useTranslation } from 'react-i18next';

export default function TermsAndConditionsPage() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-950 p-6 text-center">
      <div dir="rtl" className="space-y-8 max-w-2xl glass-morphism rounded-2xl p-10 border border-gray-800 shadow-2xl text-right">
        <h1 className="text-4xl font-bold text-yellow-500 mb-4">{t('terms.title')}</h1>
        <p className="text-gray-300 mb-6">{t('terms.intro')}</p>
        <h2 className="text-2xl font-semibold text-white mb-2">{t('terms.eligibilityTitle')}</h2>
        <p className="text-gray-400 mb-6">{t('terms.eligibilityDesc')}</p>
        <h2 className="text-2xl font-semibold text-white mb-2">{t('terms.registrationTitle')}</h2>
        <ul className="text-gray-400 text-right mb-6 list-disc list-inside">
          <li>{t('terms.registrationAccurate')}</li>
          <li>{t('terms.registrationUpdate')}</li>
        </ul>
        <h2 className="text-2xl font-semibold text-white mb-2">{t('terms.conductTitle')}</h2>
        <ul className="text-gray-400 text-right mb-6 list-disc list-inside">
          <li>{t('terms.conductRespect')}</li>
          <li>{t('terms.conductSafety')}</li>
          <li>{t('terms.conductFacility')}</li>
        </ul>
        <h2 className="text-2xl font-semibold text-white mb-2">{t('terms.paymentTitle')}</h2>
        <p className="text-gray-400 mb-6">{t('terms.paymentDesc')}</p>
        <h2 className="text-2xl font-semibold text-white mb-2">{t('terms.terminationTitle')}</h2>
        <p className="text-gray-400 mb-6">{t('terms.terminationDesc')}</p>
        <h2 className="text-2xl font-semibold text-white mb-2">{t('terms.contentResponsibilityTitle')}</h2>
        <p className="text-gray-400 mb-6">
          {t('terms.contentResponsibilityDesc')}
        </p>
        <p className="text-gray-500 text-xs mt-8">{t('terms.lastUpdated')}</p>
      </div>
    </div>
  );
}
