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
[![Lucide Icons](https://img.shields.io/badge/Lucide_Icons-000?logo=lucide&logoColor=white)](https://lucide.dev/)
[![Context API](https://img.shields.io/badge/Context_API-61DAFB?logo=react&logoColor=white)](https://react.dev/reference/react/useContext)
[![GitHub Repo stars](https://img.shields.io/github/stars/GourangaDasSamrat/React-Weather-App?style=social)](https://github.com/GourangaDasSamrat/React-Weather-App/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/GourangaDasSamrat/React-Weather-App?style=social)](https://github.com/GourangaDasSamrat/React-Weather-App/network/members)
[![GitHub issues](https://img.shields.io/github/issues/GourangaDasSamrat/React-Weather-App)](https://github.com/GourangaDasSamrat/React-Weather-App/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/GourangaDasSamrat/React-Weather-App)](https://github.com/GourangaDasSamrat/React-Weather-App/commits/main)
[![GitHub contributors](https://img.shields.io/github/contributors/GourangaDasSamrat/React-Weather-App)](https://github.com/GourangaDasSamrat/React-Weather-App/graphs/contributors)
[![Maintenance](https://img.shields.io/maintenance/yes/2025)](https://github.com/GourangaDasSamrat/React-Weather-App)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/GourangaDasSamrat/React-Weather-App/pulls)
[![Website](https://img.shields.io/website?url=https%3A%2F%2Freact-weather-app-nine-black.vercel.app%2F)](https://ecosky.vercel.app/)
[![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)](https://nodejs.org/)
[![NPM](https://img.shields.io/badge/NPM-8.x-red?logo=npm)](https://www.npmjs.com/)
[![VSCode](https://img.shields.io/badge/VS%20Code-007ACC?logo=visual-studio-code&logoColor=white)](https://code.visualstudio.com/)

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

Experience EcoSky in action: [Live Demo](https://ecosky.vercel.app/)

## 🎥 Video Demo

[![Watch the video](https://img.youtube.com/vi/5yU1Fk3QZ5Y/maxresdefault.jpg)](https://youtu.be/5yU1Fk3QZ5Y?si=tIXD5zMxk67rhDFW)


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

## 👤 Author & Contact

<p align="center">
  <img src="https://i.postimg.cc/Bnwyx7kh/485760954-644674311798231-1067913994704069438-n.jpg" alt="Gouranga Das Samrat" width="110" style="border-radius:50%;margin-bottom:10px;box-shadow:0 2px 8px #ccc;"/>
</p>

<p align="center">
  <b>Gouranga Das Samrat</b><br>
  <i>Frontend Developer | JavaScript & React Expert | Open Source Enthusiast</i>
</p>

<p align="center">
  <a href="https://github.com/GourangaDasSamrat" title="GitHub"><img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"></a>
  <a href="https://linkedin.com/in/gouranga-das-samrat" title="LinkedIn"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"></a>
  <a href="https://gouranga-das.netlify.app/" title="Portfolio"><img src="https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=chrome&logoColor=white" alt="Portfolio"></a>
  <a href="mailto:gouranga.das.khulna@gmail.com" title="Email"><img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email"></a>
  <a href="https://leetcode.com/u/gourangadassamrat/" title="LeetCode"><img src="https://img.shields.io/badge/LeetCode-FFA116?style=for-the-badge&logo=leetcode&logoColor=white" alt="LeetCode"></a>
  <a href="https://codepen.io/gouranga-das-samrat" title="CodePen"><img src="https://img.shields.io/badge/CodePen-000000?style=for-the-badge&logo=codepen&logoColor=white" alt="CodePen"></a>
  <a href="https://www.reddit.com/user/Capable-Plantain8709/" title="Reddit"><img src="https://img.shields.io/badge/Reddit-FF4500?style=for-the-badge&logo=reddit&logoColor=white" alt="Reddit"></a>
  <a href="https://www.behance.net/gourangsamrat" title="Behance"><img src="https://img.shields.io/badge/Behance-1769FF?style=for-the-badge&logo=behance&logoColor=white" alt="Behance"></a>
  <a href="https://dribbble.com/gourangadassamrat" title="Dribbble"><img src="https://img.shields.io/badge/Dribbble-EA4C89?style=for-the-badge&logo=dribbble&logoColor=white" alt="Dribbble"></a>
  <a href="https://stackoverflow.com/users/27733996/gouranga-das-samrat?tab=profile" title="Stack Overflow"><img src="https://img.shields.io/badge/Stack%20Overflow-F58025?style=for-the-badge&logo=stackoverflow&logoColor=white" alt="Stack Overflow"></a>
  <a href="https://www.quora.com/profile/Gouranga-Das-Samrat" title="Quora"><img src="https://img.shields.io/badge/Quora-B92B27?style=for-the-badge&logo=quora&logoColor=white" alt="Quora"></a>
  <a href="https://www.twitch.tv/gourangadassamrat" title="Twitch"><img src="https://img.shields.io/badge/Twitch-9146FF?style=for-the-badge&logo=twitch&logoColor=white" alt="Twitch"></a>
  <a href="https://www.youtube.com/@GourangaDasSamrat" title="YouTube"><img src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white" alt="YouTube"></a>
  <a href="https://medium.com/@gouranga.das.khulna" title="Medium"><img src="https://img.shields.io/badge/Medium-12100E?style=for-the-badge&logo=medium&logoColor=white" alt="Medium"></a>
  <a href="https://gourangadassamrat.blogspot.com/" title="Blogger"><img src="https://img.shields.io/badge/Blogger-FF5722?style=for-the-badge&logo=blogger&logoColor=white" alt="Blogger"></a>
  <a href="https://discord.gg/jnZStfKW7v" title="Discord"><img src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Discord"></a>
  <a href="https://x.com/gouranga_khulna" title="X"><img src="https://img.shields.io/badge/X-000000?style=for-the-badge&logo=x&logoColor=white" alt="X"></a>
  <a href="https://www.facebook.com/gourangadassamrat" title="Facebook"><img src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white" alt="Facebook"></a>
  <a href="https://instagram.com/gouranga.das.khulna" title="Instagram"><img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram"></a>
  <a href="https://www.tiktok.com/@gourangadassamrat" title="TikTok"><img src="https://img.shields.io/badge/TikTok-000000?style=for-the-badge&logo=tiktok&logoColor=white" alt="TikTok"></a>
  <a href="https://www.threads.net/@gouranga.das.khulna" title="Threads"><img src="https://img.shields.io/badge/Threads-000000?style=for-the-badge&logo=threads&logoColor=white" alt="Threads"></a>
  <a href="https://pinterest.com/gourangadaskhulna" title="Pinterest"><img src="https://img.shields.io/badge/Pinterest-E60023?style=for-the-badge&logo=pinterest&logoColor=white" alt="Pinterest"></a>
</p>

<p align="center">
  <i>Let's connect! I'm always open to collaboration, frontend projects, or just a friendly chat about JavaScript and React.</i>
</p>

Made with ❤️ using React and TypeScript
