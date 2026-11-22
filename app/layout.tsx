
import type {Metadata, Viewport} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'M. Haniffa — Interior Designer & 3D Visualizer',
  description: 'Interior design, spatial concepts and 3D visualization by M. Haniffa.',
};

export const viewport: Viewport = {
  themeColor: '#f7f6f2',
  colorScheme: 'light',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{colorScheme: 'light'}}>
      <body>{children}</body>
    </html>
  );
}
