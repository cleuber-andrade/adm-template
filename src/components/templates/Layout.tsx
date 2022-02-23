//1º
import MenuLateral from './MenuLateral'
import Cabecalho from './Cabecalho'
import Conteudo from './Conteudo'
import ForcarAutenticacao from '../auth/ForcarAutenticacao'
import useAppData from '../../contextApi/hook/useAppData'

interface LayoutProps {
    titulo: string
    subtitulo: string
    children?: any
}

export default function Layout({ titulo ,subtitulo ,children  }: LayoutProps) {
    const { tema } = useAppData()
    return (
        <ForcarAutenticacao>
            <div className={`${tema} flex h-full w-full `}>
                <MenuLateral />
                <div className={`
                flex flex-col w-full p-7
                bg-gray-300 dark:bg-gray-800
                `}>
                    <Cabecalho titulo={titulo} subtitulo={subtitulo} />
                    <Conteudo>
                        {children}
                    </Conteudo>
                </div>
            </div>
        </ForcarAutenticacao>
    )
}