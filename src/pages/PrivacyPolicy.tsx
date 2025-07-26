import { useTranslation } from 'react-i18next';

export default function PrivacyPolicyPage() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-950 p-6 text-center">
      <div className="space-y-8 max-w-2xl glass-morphism rounded-2xl p-10 border border-gray-800 shadow-2xl">
        <h1 className="text-4xl font-bold text-red-600 mb-4">{t('policy.title')}</h1>
        <p className="text-gray-300 mb-6">{t('policy.intro')}</p>
        <h2 className="text-2xl font-semibold text-white mb-2">{t('policy.dataCollectionTitle')}</h2>
        <ul className="text-gray-400 text-left mb-6 list-disc list-inside">
          <li>{t('policy.dataName')}</li>
          <li>{t('policy.dataContact')}</li>
          <li>{t('policy.dataDemographics')}</li>
          <li>{t('policy.dataEmergency')}</li>
        </ul>
        <h2 className="text-2xl font-semibold text-white mb-2">{t('policy.usageTitle')}</h2>
        <ul className="text-gray-400 text-left mb-6 list-disc list-inside">
          <li>{t('policy.usageRegistration')}</li>
          <li>{t('policy.usageCommunication')}</li>
          <li>{t('policy.usageImprovement')}</li>
        </ul>
        <h2 className="text-2xl font-semibold text-white mb-2">{t('policy.securityTitle')}</h2>
        <p className="text-gray-400 mb-6">{t('policy.securityDesc')}</p>
        <h2 className="text-2xl font-semibold text-white mb-2">{t('policy.rightsTitle')}</h2>
        <ul className="text-gray-400 text-left mb-6 list-disc list-inside">
          <li>{t('policy.rightsAccess')}</li>
          <li>{t('policy.rightsCorrection')}</li>
          <li>{t('policy.rightsDelete')}</li>
        </ul>
        <p className="text-gray-500 text-xs mt-8">{t('policy.lastUpdated')}</p>
      </div>
    </div>
  );
}
