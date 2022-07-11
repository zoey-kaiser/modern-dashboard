import { useRouter } from 'next/router';
import Link from 'next/link';

declare interface AsideItemProps {
    title: string;
    link: string;
    icon?: JSX.Element;
    children?: JSX.Element;
}

const AsideItem = ({ title, icon, link, children }: AsideItemProps) => {
    const router = useRouter();

    return (
        <li className="relative group">
            <Link href={link} passHref>
                <a className="transition-colors duration-150">
                    {router.pathname === link ? (
                        <div className="flex items-center px-4 py-3 rounded-lg text-dashboard-accent gap-2 bg-dashboard-background/50">
                            <div className="flex items-center justify-between w-full">
                                <div className="flex items-center gap-2">
                                    <span className="text-md">{icon}</span>
                                    <span className="font-semibold pt-[1.5px]">{title}</span>
                                </div>
                                <div>{children}</div>
                            </div>
                        </div>
                    ) : (
                        <div className="flex items-center px-4 py-3 rounded-lg gap-2 group-hover:bg-dashboard-background/50">
                            <div className="flex items-center justify-between w-full">
                                <div className="flex items-center gap-2">
                                    <span className="text-gray-400 text-md group-hover:text-gray-200">{icon}</span>
                                    <span className="font-semibold text-gray-400 group-hover:text-gray-200 pt-[1.5px]">
                                        {title}
                                    </span>
                                </div>
                                <div>{children}</div>
                            </div>
                        </div>
                    )}
                </a>
            </Link>
        </li>
    );
};

export default AsideItem;
