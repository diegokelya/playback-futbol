// Bilingual copy. Strings are static and written here, so innerHTML only ever receives trusted markup.
const copy = {
  es: {
    title: 'PlayBack Fútbol — Tu mejor jugada, siempre lista',
    description: 'PlayBack Fútbol convierte tu iPhone en una cámara de repeticiones para fútbol: guarda la jugada sola cuando alguien grita «gol» o la gente festeja, y la revisás en VAR en cámara lenta.',
    skip: 'Saltar al contenido', switchTo: 'Read in English', switchLabel: 'EN',
    navSave: 'Cómo se guarda', navFeatures: 'Funciones', navDownload: 'Descarga',
    eyebrow: 'REPETICIONES AUTOMÁTICAS',
    heroTitle: 'Tu mejor jugada.<br><em>Se guarda sola.</em>',
    heroText: 'PlayBack Fútbol transforma un iPhone en una cámara que graba en bucle y guarda la jugada cuando alguien grita «gol».',
    heroCta: 'Ver cómo funciona',
    cardAria: 'Ejemplo: se escucha «gol» y la jugada se guarda',
    listening: '● ESCUCHANDO', heard: 'SE ESCUCHA', saved: 'JUGADA GUARDADA',
    intro: 'Sin reloj, accesorios ni suscripciones. Dejá el iPhone mirando la cancha y no te pierdas ningún gol.',
    saveEyebrow: 'CÓMO SE GUARDA UNA JUGADA', saveTitle: 'Tres formas,<br>ninguna complicada.',
    sGoal: 'Gritá «gol»', sGoalText: 'Escucha el audio del partido: «gol», «gooool» o «golazo» guardan los últimos segundos.',
    sCheer: 'Festejo', sCheerText: 'Si la gente festeja o grita con fuerza, también guarda la jugada.',
    sButton: 'Un toque', sButtonText: 'El botón Guardar jugada, siempre a mano.',
    featureEyebrow: 'HECHO PARA LA CANCHA', featureTitle: 'Todo lo que necesitás<br>para no perder la jugada.',
    f1: 'Repetición instantánea', f1t: 'Graba en bucle y guarda los últimos 15, 30 o 60 segundos sin detener la cámara.',
    f2: 'Se guarda solo', f2t: 'Detecta «gol» y festejos con el audio del partido. Todo el análisis se hace en el iPhone, sin internet.',
    f3: 'VAR en cámara lenta', f3t: 'Revisá la jugada a ½× o cuadro por cuadro, con doble toque para ampliar justo donde está la pelota.',
    f4: 'Tus jugadas, en tu iPhone', f4t: 'Miniaturas, reproducción y copia a Fotos cuando vos quieras. Sin cuentas, servidores ni publicidad.',
    waitEyebrow: 'PRÓXIMAMENTE', waitTitle: 'PlayBack Fútbol<br>está entrando a la cancha.',
    waitText: 'Estamos probando la app en partidos reales. Todavía no está disponible para descargar.',
    waitBadge: 'En desarrollo para iPhone',
    support: 'Soporte', privacy: 'Privacidad'
  },
  en: {
    title: 'PlayBack Football — Your best play, always ready',
    description: 'PlayBack Football turns your iPhone into a football (soccer) replay camera: it saves the play by itself when someone shouts “goal” or the crowd cheers, and you review it in slow-motion VAR.',
    skip: 'Skip to content', switchTo: 'Leer en español', switchLabel: 'ES',
    navSave: 'How it saves', navFeatures: 'Features', navDownload: 'Download',
    eyebrow: 'AUTOMATIC REPLAYS',
    heroTitle: 'Your best play.<br><em>Saved by itself.</em>',
    heroText: 'PlayBack Football turns an iPhone into a camera that records in a loop and saves the play when someone shouts “goal”.',
    heroCta: 'See how it works',
    cardAria: 'Example: “goal” is heard and the play is saved',
    listening: '● LISTENING', heard: 'HEARD', saved: 'PLAY SAVED',
    intro: 'No watch, accessories or subscriptions. Point the iPhone at the pitch and never miss a goal.',
    saveEyebrow: 'HOW A PLAY GETS SAVED', saveTitle: 'Three ways,<br>none of them complicated.',
    sGoal: 'Shout “goal”', sGoalText: 'It listens to the match audio: “gol”, “goooal” or “golazo” saves the last seconds.',
    sCheer: 'Cheering', sCheerText: 'If the crowd cheers or shouts loudly, it saves the play too.',
    sButton: 'One tap', sButtonText: 'The Save play button is always within reach.',
    featureEyebrow: 'BUILT FOR THE PITCH', featureTitle: 'Everything you need<br>to never miss the play.',
    f1: 'Instant replay', f1t: 'Records in a loop and saves the last 15, 30 or 60 seconds without stopping the camera.',
    f2: 'Saves by itself', f2t: 'Detects “goal” and cheering from the match audio. All analysis happens on the iPhone, with no internet.',
    f3: 'Slow-motion VAR', f3t: 'Review the play at ½× or frame by frame, and double-tap to zoom right where the ball is.',
    f4: 'Your plays stay on your iPhone', f4t: 'Thumbnails, playback and copy to Photos whenever you want. No accounts, servers or ads.',
    waitEyebrow: 'COMING SOON', waitTitle: 'PlayBack Football<br>is stepping onto the pitch.',
    waitText: 'We are testing the app in real matches. It is not available to download yet.',
    waitBadge: 'In development for iPhone',
    support: 'Support', privacy: 'Privacy'
  }
};

const store = {
  get() { try { return localStorage.getItem('lang'); } catch { return null; } },
  set(value) { try { localStorage.setItem('lang', value); } catch { /* private mode: not remembered */ } }
};

// ?lang=en > saved choice > browser language > Spanish.
function initialLanguage() {
  const param = new URLSearchParams(location.search).get('lang');
  if (param in copy) return param;
  const saved = store.get();
  if (saved in copy) return saved;
  return (navigator.language || '').toLowerCase().startsWith('es') ? 'es' : (navigator.language ? 'en' : 'es');
}

let lang = initialLanguage();

function render() {
  const text = copy[lang];
  document.documentElement.lang = lang;
  document.title = text.title;
  document.querySelector('meta[name="description"]').setAttribute('content', text.description);
  document.querySelectorAll('[data-i18n]').forEach(el => { el.innerHTML = text[el.dataset.i18n]; });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => el.setAttribute('aria-label', text[el.dataset.i18nAria]));
  const button = document.getElementById('language');
  button.textContent = text.switchLabel;
  button.setAttribute('aria-label', text.switchTo);
  button.setAttribute('lang', lang === 'es' ? 'en' : 'es');
}

document.getElementById('language').addEventListener('click', () => {
  lang = lang === 'es' ? 'en' : 'es';
  store.set(lang);
  render();
});

render();
