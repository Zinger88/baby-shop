import Link from 'next/link';
import Image from 'next/image';
export const Logo = () => {
    return (
        <Link href="/" className="-m-1.5 p-1.5">
            <Image src={'/images/logo.png'} alt="Logo" width={50} height={50} />
            <span className="sr-only">Happy Baby</span>
        </Link>
    );
};
