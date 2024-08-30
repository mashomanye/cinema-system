// app/layout.tsx
import './globals.css';

export const metadata = {
  title: 'Cinema Booking System',
  description: 'A professional cinema booking system built with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
