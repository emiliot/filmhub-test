import { useEffect, useState } from 'react'

import useDebounce from '../hooks/useDebounce'

type HeaderProps = {
  onSearchChange: (value: string) => void
}

export function Header(props: HeaderProps) {
  const { onSearchChange } = props
  const [searchValue, setSearchValue] = useState('')
  const debouncedValue = useDebounce(searchValue, 500)

  useEffect(() => {
    onSearchChange(debouncedValue)
  }, [debouncedValue])

  return (
    <header className="mb-10 flex flex-col items-center md:flex-row md:justify-between">
      <div className="mb-2 md:mb-0">
        <h1 className="text-3xl md:text-5xl">Filmhub Music</h1>
      </div>
      <div className="w-full sm:w-2/6">
        <input
          type="text"
          placeholder="Search"
          className="w-full rounded border-2 p-1"
          onChange={(e) => {
            setSearchValue(e.target.value)
          }}
          value={searchValue}
        />
      </div>
    </header>
  )
}
