import Link from 'next/link';
import Image from 'next/image';
export const Logo = () => {
    return (
        <Link href="/" className="-m-1.5 p-1.5 relative flex">
            <Image src={'/images/logo.png'} className="w-8 opacity-70 rounded-sm" alt="Logo" width={50} height={50} />
            <span className='w-60 text-bold text-2xl opacity-70 dark:text-white ml-1'>Happy Baby</span>
        </Link>
    );
};
