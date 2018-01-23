import I18n from 'ex-react-native-i18n';
import en from './locales/en';
import fr from './locales/fr';

// When fallbacks are enabled,
// i18n.js will try to look up translations in the following order
// (for a device with en_US locale):
// - en-US
// - en
// Note: iOS 8 locales use underscored (en_US)
// but i18n.js locales are dasherized (en-US).
// This conversion is done automatically for you.
I18n.fallbacks = true;

I18n.translations = { en, fr };

export default I18n;
