import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

export default function Error403Page() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-950 p-6 text-center">
      <div className="space-y-8 max-w-md glass-morphism rounded-2xl p-10 border border-gray-800 shadow-2xl">
        <div className="space-y-3">
          <h1 className="text-8xl font-bold text-blue-500 drop-shadow-lg">{t('error.403.title')}</h1>
          <h2 className="text-2xl font-semibold text-white">{t('error.403.heading')}</h2>
          <p className="text-gray-400">{t('error.403.description')}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild className="font-bold">
            <a href="/">{t('error.403.home')}</a>
          </Button>
          <Button variant="outline" onClick={() => window.history.back()} className="font-bold">
            {t('error.403.back')}
          </Button>
        </div>
      </div>
    </div>
  );
}
