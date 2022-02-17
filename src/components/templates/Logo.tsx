//7º
import Image from "next/image"

export default function Logo() {
  return (
      <div className={`
          flex flex-col items-center justify-center
          rounded-full
          bg-transparent
      `}>
          <Image
            src={'/images/logoKathy-removebg-preview.png'}
            width={70}
            height={70}
            alt='Logo Marca Drª Ana Katarina'
          />
      </div>
  )
}
