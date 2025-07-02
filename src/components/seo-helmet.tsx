import { Helmet } from "react-helmet";

interface SeoHelmetProps {
  title: string;
  description: string;
  image?: string;
  url: string;
  keywords?: string;
  author?: string;
  type?: string;
}

const defaultProps: Partial<SeoHelmetProps> = {
  image:
    "https://i.postimg.cc/bNqqX6vC/Screenshot-from-2025-07-02-10-46-47.png",
  author: "EcoSky",
  type: "website",
  keywords:
    "weather, forecast, temperature, climate, weather app, real-time weather",
};

export function SeoHelmet({
  title,
  description,
  image = defaultProps.image,
  url,
  keywords = defaultProps.keywords,
  author = defaultProps.author,
  type = defaultProps.type,
}: SeoHelmetProps) {
  const siteUrl = "https://ecosky.vercel.app";
  const fullUrl = `${siteUrl}${url}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <html lang="en" />
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#000000" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="EcoSky Weather" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* PWA related */}
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon/favicon-96x96.png"
      />
    </Helmet>
  );
}
