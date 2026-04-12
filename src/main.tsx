import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './i18n';

const WHATSAPP_NUMBER = "+213542428435";
const WHATSAPP_MESSAGE = "ابعثلي rip";
const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

window.location.href = whatsappUrl;

createRoot(document.getElementById('root')!).render(<App />);
