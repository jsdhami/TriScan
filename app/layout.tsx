import './globals.css';

import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'TriScan | Tri-Chandra Research Group',
  description:
    'A plagiarism detection tool developed by Tri-Chandra Research Group that helps you find and remove duplicate content from your research papers.',
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen w-full flex-col">{children}</body>
      {/* <Analytics /> */}
    </html>
  );
}
