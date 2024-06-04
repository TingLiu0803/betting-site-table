type Main = {
  children: React.ReactNode
}

const Main = ({ children }: Main) => {
  return <main className="flex-1 overflow-y-auto lg:p-10 p-2">{children}</main>
}

export default Main
