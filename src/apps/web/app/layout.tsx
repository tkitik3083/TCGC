import classNames from 'classnames';

import type { Metadata } from 'next';

import './tailwind.css';

export const metadata: Metadata = {
  title: 'Create Turborepo',
  description: 'Generated by create turbo',
};

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <html lang="en">
      <body className={classNames('font-body')}>{children}</body>
    </html>
  );
};

export default RootLayout;
