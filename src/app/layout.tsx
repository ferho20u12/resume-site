import { LAYOUT } from "@src/configuration/layout.config";
import PageContainer from "@src/shared/components/page/PageContainer";
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={LAYOUT.defaultLanguage} translate="no">
      <head>
        <title>{LAYOUT.siteName}</title>
        <meta name="description" content={LAYOUT.siteDescription} />
        <meta name="author" content={LAYOUT.siteName} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={LAYOUT.siteName} />
        <meta property="og:description" content={LAYOUT.siteDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://${LAYOUT.domain}`} />
        <meta property="og:image" content={LAYOUT.defaultOgImage} />
        <meta name="twitter:card" content="summary_large_image" />
        {LAYOUT.twitterHandle && <meta name="twitter:site" content={LAYOUT.twitterHandle} />}
        <meta name="twitter:title" content={LAYOUT.siteName} />
        <meta name="twitter:description" content={LAYOUT.siteDescription} />
        <meta name="twitter:image" content={LAYOUT.defaultOgImage} />
        <link rel="icon" href={LAYOUT.faviconUrl} />
      </head>

      <body>
        <PageContainer>{children}</PageContainer>
      </body>
    </html>
  );
}
