import { LogOut } from 'lucide-react'
import Image from 'next/image'

export function Profile() {
  return (
    <div className="grid items-center gap-3 grid-cols-profile ">
      <Image
        src="https://github.com/bilesimomenegali.png"
        width={40}
        height={40}
        className="h-10 w-10 rounded-full"
        alt="Profile picture"
      />
      <div className="flex flex-1 flex-col truncate">
        <span className="text-sm truncate font-semibold text-zinc-700">
          Bilesimo
        </span>
        <span className="text-sm truncate text-zinc-500">
          stang3tzzz@gmail.com
        </span>
      </div>
      <button type="button" className="ml-auto p-2 hover:bg-zinc-50 rounded-md">
        <LogOut className="w-5 h-5" />
      </button>
    </div>
  )
}
