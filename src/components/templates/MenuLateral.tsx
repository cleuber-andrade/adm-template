//2º
import useAuth from "../../contextApi/hook/useAuth"
import { IconeAgenda, IconeAjustes, IconeCadastro, IconeCasa, IconeLogout, IconeNotificacoes } from "../icons"
import Logo from "./Logo"
import MenuItem from "./MenuItem"

export default function MenuLateral() {

    const { logout } = useAuth()

    return (
        <aside className={`
            flex flex-col
            bg-gray-200 text-gray-700
            dark:bg-gray-900
        `}>
            <div className={`
                flex flex-col items-center justify-center
                bg-gradient-to-r from-yellow-500  to-yellow-200
                h-20 w-20
            `}>
                <Logo />
            </div>
            <ul className="flex-grow ">
                <MenuItem url="/" texto="Início" icone={IconeCasa} />
                <MenuItem url="/cadastro" texto="Cadastro" icone={IconeCadastro} />
                <MenuItem url="/agendamento" texto="Agendamento" icone={IconeAgenda} />
                <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes} />
                <MenuItem url="/notificacoes" texto="Notificações" icone={IconeNotificacoes}  />
            </ul>
            <ul>
                <MenuItem
                    texto="Sair" icone={IconeLogout}
                    onClick={logout}
                    className={`
                        transition duration-500 ease-in-out
                        text-red-600 dark:text-red-400
                        hover:bg-red-400 hover:text-white
                        dark:hover:text-white
                    `}
                />
            </ul>
        </aside>
    )
}