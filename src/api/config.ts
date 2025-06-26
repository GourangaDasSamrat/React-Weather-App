export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL,
  GEO: import.meta.env.VITE_API_GEO_URL,
  API_KEY: import.meta.env.VITE_OPENWEATHER_API_KEY,
  DEFAULT_PARAMS: {
    units: import.meta.env.VITE_API_UNITS,
    appid: import.meta.env.VITE_OPENWEATHER_API_KEY,
  },
};
