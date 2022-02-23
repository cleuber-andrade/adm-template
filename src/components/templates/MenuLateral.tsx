//2º
import useAuth from "../../contextApi/hook/useAuth"
import { IconeAgenda, IconeCadastro, IconeCasa, IconeLogout, IconeNotificacoes, IconeSource } from "../icons"
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
                <MenuItem url="/" texto="Home" icone={IconeCasa} className="
                  hover:border-x-2
                  border-lime-400
                  hover:transition-transform
                  hover:duration-700
                  hover:ease-in-out"
                />
                <MenuItem url="/cadastro" texto="Cadastro" icone={IconeCadastro} className="
                  hover:border-x-2
                  border-yellow-400
                  hover:transition-transform
                  hover:duration-700
                  hover:ease-in-out"
                />
                <MenuItem url="/agendamento" texto="Agendamento" icone={IconeAgenda} className="
                  hover:border-x-2
                  border-pink-500
                  hover:transition-transform
                  hover:duration-700
                  hover:ease-in-out"
                />
                <MenuItem url="/search" texto="Pesquisa" icone={IconeSource}
                  className="
                    hover:border-x-2
                    border-blue-600
                    hover:transition-transform
                    hover:duration-700
                    hover:ease-in-out"
                />
                <MenuItem url="/notificacoes" texto="Notificações" icone={IconeNotificacoes}
                  className="
                    hover:border-x-2
                    border-emerald-400
                    hover:transition-transform
                    hover:duration-700
                    hover:ease-in-out"
                />
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