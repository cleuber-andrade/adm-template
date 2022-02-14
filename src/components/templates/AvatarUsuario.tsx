//9º
import Link from 'next/link'
import useAuth from '../../contextApi/hook/useAuth'

interface AvatarUsuarioProps {
    className?: string
}

export default function AvatarUsuario({className}: AvatarUsuarioProps) {
    const { usuario } = useAuth()
    return (
        <Link href="/perfil" passHref>
            <img
                src={usuario?.imagemUrl ?? '/images/avatar.svg'}
                alt="Avatar do Usuário"
                className={`
                    h-10 w-10 rounded-full cursor-pointer
                    ${className}
                `}
            />
        </Link>
    )
}