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

const AUTHOR_NAME = "Gouranga Das Samrat";
const AUTHOR_BIO = "Frontend Web Developer and Open Source Enthusiast";
const AUTHOR_SOCIALS = [
  "https://www.facebook.com/gourangadassamrat/",
  "https://x.com/Gouranga_Khulna/",
  "https://www.instagram.com/gouranga.das.khulna/",
  "https://www.tiktok.com/@gourangadassamrat/",
  "https://www.threads.com/@gouranga.das.khulna/",
  "https://www.pinterest.com/gourangadaskhulna/",
  "https://github.com/GourangaDasSamrat/",
  "https://codepen.io/Gouranga-Das-Samrat/",
  "https://leetcode.com/u/gourangadassamrat/",
  "https://www.linkedin.com/in/gouranga-das-samrat/",
  "https://stackoverflow.com/users/27733996/gouranga-das-samrat/",
  "https://www.reddit.com/user/Capable-Plantain8709/",
  "https://www.quora.com/profile/Gouranga-Das-Samrat/",
  "https://gouranga-das.netlify.app/",
  "https://medium.com/@gouranga.das.khulna/",
  "https://dev.to/gouranga-das-khulna/",
  "https://gourangadassamrat.blogspot.com/",
  "https://www.twitch.tv/gourangadassamrat/",
  "https://dribbble.com/gourangadassamrat/",
  "https://www.behance.net/gourangsamrat/",
  "https://discord.gg/ByjVd6KZdV",
];

const defaultProps: Partial<SeoHelmetProps> = {
  image:
    "https://i.postimg.cc/bNqqX6vC/Screenshot-from-2025-07-02-10-46-47.png",
  author: AUTHOR_NAME,
  type: "website",
  keywords:
    "weather, forecast, temperature, climate, weather app, real-time weather, Gouranga Das Samrat, frontend developer, open source",
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
  const siteUrl = "https://ecosky.gouranga.qzz.io";
  const fullUrl = `${siteUrl}${url}`;

  // JSON-LD structured data for author
  const authorJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: AUTHOR_NAME,
    description: AUTHOR_BIO,
    url: "https://gouranga-das.netlify.app/",
    sameAs: AUTHOR_SOCIALS,
    jobTitle: "Frontend Web Developer",
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <html lang="en" />
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="profile:username" content="GourangaDasSamrat" />
      <meta name="profile:first_name" content="Gouranga" />
      <meta name="profile:last_name" content="Das Samrat" />
      <meta name="profile:gender" content="male" />
      <meta name="profile:bio" content={AUTHOR_BIO} />
      <meta name="profile:job_title" content="Frontend Web Developer" />
      <meta
        name="profile:website"
        content="https://gouranga-das.netlify.app/"
      />
      <meta
        name="profile:linkedin"
        content="https://www.linkedin.com/in/gouranga-das-samrat/"
      />
      <meta
        name="profile:github"
        content="https://github.com/GourangaDasSamrat/"
      />
      <meta name="profile:twitter" content="https://x.com/Gouranga_Khulna/" />
      <meta
        name="profile:facebook"
        content="https://www.facebook.com/gourangadassamrat/"
      />
      <meta
        name="profile:instagram"
        content="https://www.instagram.com/gouranga.das.khulna/"
      />
      <meta
        name="profile:portfolio"
        content="https://gouranga-das.netlify.app/"
      />
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
      <meta property="og:profile:first_name" content="Gouranga" />
      <meta property="og:profile:last_name" content="Das Samrat" />
      <meta property="og:profile:username" content="GourangaDasSamrat" />
      <meta property="og:profile:gender" content="male" />
      <meta
        property="og:see_also"
        content="https://gouranga-das.netlify.app/"
      />
      {AUTHOR_SOCIALS.map((link) => (
        <meta key={link} property="og:see_also" content={link} />
      ))}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@Gouranga_Khulna" />

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

      {/* JSON-LD Structured Data for Author */}
      <script type="application/ld+json">{JSON.stringify(authorJsonLd)}</script>
    </Helmet>
  );
}
