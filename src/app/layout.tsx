
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aneeba Chaudary | Materials Scientist',
  description: 'Ph.D. Candidate in Materials Science and Engineering specializing in functional coatings and polymer formulations.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased selection:bg-accent/30">
        {children}
      </body>
    </html>
  );
}
