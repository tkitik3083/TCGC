import classNames from 'classnames';
import { Metadata, NextPage } from 'next';
import Image from 'next/image';

import MtgBlack from '~/public/img/mana/black.png';
import MtgBlue from '~/public/img/mana/blue.png';
import MtgGreen from '~/public/img/mana/green.png';
import MtgRed from '~/public/img/mana/red.png';
import MtgWhite from '~/public/img/mana/white.png';

export const metadata: Metadata = {
  description: 'Show and manage your mtg cards collection.',
};

const Page: NextPage = () => {
  return (
    <div
      className={classNames(
        'flex',
        'flex-col',
        'justify-center',
        'items-center',
        'gap-4',
        'h-screen',
      )}
    >
      <p className={classNames('text-5xl', 'font-bold')}>Hello World</p>
      <div className={classNames('flex', 'gap-2')}>
        <Image src={MtgWhite} alt={'アイコン'} width={32} />
        <Image src={MtgBlue} alt={'アイコン'} width={32} />
        <Image src={MtgBlack} alt={'アイコン'} width={32} />
        <Image src={MtgRed} alt={'アイコン'} width={32} />
        <Image src={MtgGreen} alt={'アイコン'} width={32} />
      </div>
    </div>
  );
};

export default Page;
