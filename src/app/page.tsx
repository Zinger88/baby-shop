import Link from "next/link";
import Image from "next/image";
export default function Home() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <div>
                    <nav className="flex flex-col gap-8">
                        <Link className="flex gap-4 items-center transition hover:scale-105" href="/baby-development">
                            <Image width={70} height={70} src="/images/icons/icon-1.webp"  alt="nav-icon"/>
                            <span className="text-3xl font-light">Развитие малыша по месяцам</span>
                        </Link>
                        <Link className="flex gap-4 items-center transition hover:scale-105" href="/womans">
                            <Image width={70} height={70} src="/images/icons/icon-2.webp"  alt="nav-icon"/>
                            <span className="text-3xl font-light">Этапы беременности (не готова)</span>
                        </Link>
                        <Link className="flex gap-4 items-center transition hover:scale-105" href="/advices">
                            <Image width={70} height={70} src="/images/icons/icon-4.webp"  alt="nav-icon"/>
                            <span className="text-3xl font-light">Советы (не готова)</span>
                        </Link>
                    </nav>
                </div>
            </main>
        </div>
    );
}
