export type NavOption = {
  id: number
  name: string | null
  description: string | null
  path: string
  subOptions: NavOption[]
}

export type NavData = {
  id: number
  options: NavOption[]
}
