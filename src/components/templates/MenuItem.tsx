//6º
import Link from 'next/link'

interface MenuItemProps {
    texto: string
    icone: any
    url?: string
    className?: string
    onClick?: (evento: any) => void
}

export default function MenuItem({texto, icone, url, className, onClick}: MenuItemProps) {
    function renderizarLink() {
        return (
            <a className={`
                    flex flex-col justify-center items-center
                    h-20 w-20
                    dark:text-gray-200
                    ${className}
                `}>
                {icone}
                <span className={`text-xs font-light`}>
                    {texto}
                </span>
            </a>
        )
    }
    return (
        <li onClick={onClick} className={`
            hover:bg-gray-100 dark:hover:bg-gray-800
            cursor-pointer
        `}>
            {url ? (
                <Link href={url}>
                    {renderizarLink()}
                </Link>
            ) : (
                renderizarLink()
            )}
        </li>
    )
}