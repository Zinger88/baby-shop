// TODO: move to constants

import Link from 'next/link';

const BABY_DEVELOPMENT = [
    {
        name: '1 месяц',
        href: 'baby-development/razvitie-1-mesiac',
        image: '/images/1.jpg',
    },
    {
        name: '2 месяца',
        href: 'baby-development/razvitie-2-mesiac',
    },
    {
        name: '3 месяца',
        href: 'baby-development/razvitie-3-mesiac',
    },
    {
        name: '4 месяца',
        href: 'baby-development/razvitie-4-mesiac',
    },
];

const Topics = async () => {
    //const data: Response  = await fetch('https://api.vercel.app/blog');
    //const posts: Record<string, unknown>[] = await data.json();

    return (
        <div className="p-8">
            <h1 className="text-3xl mb-8 mt-8">Развитие малыша по месяцам</h1>
            <nav className="flex gap-4 flex-wrap mb-8">
                {BABY_DEVELOPMENT.map((item: Record<string, any>) => (
                    <Link
                        className={'bg-sky-100 text-center rounded-2xl p-4 shadow-md font-bold transition duration-300 hover:bg-sky-200 dark:text-slate-800'}
                        href={item.href}
                        key={item.name}
                    >
                        {item.name}
                    </Link>
                ))}
            </nav>
            <p>
                Каждый месяц жизни вашего малыша — это новый этап в его развитии, полный значимых изменений и
                достижений. В этом разделе вы найдете подробную информацию о ключевых моментах развития ребенка в каждый
                месяц его жизни, начиная с рождения и до первого года. Мы охватываем важные аспекты физического,
                социального и эмоционального развития, а также рекомендации по уходу и занятиям, способствующим
                гармоничному росту вашего малыша.
            </p>
            <p className='mb-8'>
                Следуя нашим рекомендациям, вы сможете лучше понять, какие навыки и умения должны появиться у вашего
                ребенка в определенный период и как поддерживать его развитие на каждом этапе. Мы также предоставляем
                советы по распорядку дня, питанию и играм, чтобы сделать ваш путь с малышом более осознанным и успешным.
                Ознакомьтесь с нашим разделом, чтобы быть в курсе всех важных изменений и поддерживать своего малыша на
                пути к здоровому и счастливому развитию.
            </p>
        </div>
    );
};

export default Topics;
