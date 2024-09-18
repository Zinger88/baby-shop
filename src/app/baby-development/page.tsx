// TODO: move to constants

import Link from "next/link";

const BABY_DEVELOPMENT = [
    {
        name: '1 месяц',
        href: 'baby-development/razvitie-1-mesiac',
        image: '/images/1.jpg',
    },
    {
        name: '2 месяца',
        href: 'baby-development/razvitie-2-mesiac',
    }
]


const Topics = async () => {
    //const data: Response  = await fetch('https://api.vercel.app/blog');
    //const posts: Record<string, unknown>[] = await data.json();

    return (
        <div className="p-8">
            <h1 className="text-3xl mb-8 mt-8">Развитие малыш по месяцам</h1>
            <nav className="flex gap-4">
                {BABY_DEVELOPMENT.map((item: Record<string, any>) => (
                    <Link className={'bg-primary rounded-2xl p-2 border-2 border-grey'} href={item.href} key={item.name}>{item.name}</Link>
                ))}
            </nav>
        </div>
    );
};

export default Topics;