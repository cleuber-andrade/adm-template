//9º
import Image from 'next/image'
import Link from 'next/link'
import useAuth from '../../contextApi/hook/useAuth'

interface AvatarUsuarioProps {
    className?: string
}

export default function AvatarUsuario({className}: AvatarUsuarioProps) {
    const { usuario } = useAuth()
    return (
        <Link href="/perfil" passHref>
            <Image
                src={usuario?.imagemUrl ?? '/images/avatar.svg'}
                alt="Avatar do Usuário"
                width={45}
                height={45}
                className={`
                    h-10 w-10 rounded-full cursor-pointer
                    ${className}
                `}
            />
        </Link>
    )
}