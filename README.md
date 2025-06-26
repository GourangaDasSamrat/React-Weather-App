# 🌦️ EcoSky - Modern Weather Application

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.3.1-blue?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-Latest-blue?logo=vite)](https://vitejs.dev/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-success?logo=vercel)](https://react-weather-app-nine-black.vercel.app/)
[![Code Style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![React Query](https://img.shields.io/badge/React_Query-FF4154?logo=react-query&logoColor=white)](https://tanstack.com/query/latest)
[![React Router](https://img.shields.io/badge/React_Router-CA4245?logo=react-router&logoColor=white)](https://reactrouter.com/)
[![Radix UI](https://img.shields.io/badge/Radix_UI-161618?logo=radix-ui&logoColor=white)](https://www.radix-ui.com/)
[![ESLint](https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=white)](https://eslint.org/)
[![PostCSS](https://img.shields.io/badge/PostCSS-DD3A0A?logo=postcss&logoColor=white)](https://postcss.org/)
[![OpenWeatherMap](https://img.shields.io/badge/OpenWeatherMap-API-orange)](https://openweathermap.org/)

A modern, intuitive weather application built with React and TypeScript. Get real-time weather updates, hourly forecasts, and manage your favorite locations with a beautiful, responsive interface.

## 📊 Performance

### PageSpeed Insights Report

[![PageSpeed Insights](https://img.shields.io/badge/PageSpeed_Insights-Live_Report-success?logo=google)](https://pagespeed.web.dev/analysis/https-react-weather-app-nine-black-vercel-app/9jav2qg6ij?form_factor=mobile)

| Metric         | Score |
| -------------- | ----- |
| Performance    | 98    |
| Accessibility  | 100   |
| Best Practices | 95    |
| SEO            | 100   |

Key highlights from the performance report:

- First Contentful Paint: 1.5s
- Largest Contentful Paint: 1.9s
- Total Blocking Time: 0ms
- Cumulative Layout Shift: 0

## 🚀 Live Demo

Experience EcoSky in action: [Live Demo](https://react-weather-app-nine-black.vercel.app/)

## 🎥 Video Demo

[Coming Soon] Watch the demo video to see all features in action.

## 💻 Tech Stack

| Category         | Technologies                         |
| ---------------- | ------------------------------------ |
| Frontend         | React 18, TypeScript, Vite           |
| UI/Styling       | Tailwind CSS, Radix UI, Lucide Icons |
| State Management | React Query, Context API             |
| Routing          | React Router DOM                     |
| Build Tools      | Vite, PostCSS                        |
| APIs             | Weather API (OpenWeatherMap)         |
| Deployment       | Vercel                               |

## 🌟 Features

- **Real-time Weather Data**: Get current weather conditions and accurate forecasts
- **Location Search**: Search for any city worldwide
- **Favorite Locations**: Save and manage your favorite cities
- **Hourly Forecasts**: View detailed hourly weather predictions
- **Responsive Design**: Seamless experience across all devices
- **Dark/Light Mode**: Choose your preferred theme
- **Geolocation**: Get weather data for your current location
- **Search History**: Quick access to recently searched locations

## 📁 Project Structure

```
src/
├── api/            # API configuration and types
├── components/     # Reusable UI components
│   └── ui/        # Base UI components
├── context/       # React Context providers
├── hooks/         # Custom React hooks
├── lib/           # Utility functions
└── pages/         # Main application pages
```

## 🛠️ Installation & Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/GourangaDasSamrat/React-Weather-App.git
   cd React-Weather-App
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your API key:

   ```env
   VITE_WEATHER_API_KEY=your_api_key_here
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Build for production:
   ```bash
   npm run build
   ```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with ❤️ using React and TypeScript
