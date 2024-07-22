import { ComponentProps } from 'react'

type InputPreffixProps = ComponentProps<'div'>

export function Preffix(props: InputPreffixProps) {
  return <div {...props}></div>
}

type InputControlProps = ComponentProps<'input'>

export function Control(props: InputControlProps) {
  return (
    <input
      className="border-0 flex-1 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
      {...props}
    />
  )
}

type InputRootProps = ComponentProps<'div'>

export function Root(props: InputRootProps) {
  return (
    <div
      className="mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      {...props}
    />
  )
}
