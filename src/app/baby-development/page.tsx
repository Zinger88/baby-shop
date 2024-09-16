// TODO: move to constants

import Link from "next/link";

const BABY_DEVELOPMENT = [
    {
        name: '1 месяц',
        href: 'baby-development/razvitie-1-mesiac',
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
        <div>
            <h1>Развитие малыш по месяцам</h1>
            <nav>
                {BABY_DEVELOPMENT.map((item: Record<string, any>) => (
                    <Link href={item.href} key={item.name}>{item.name}</Link>
                ))}
            </nav>
        </div>
    );
};

export default Topics;