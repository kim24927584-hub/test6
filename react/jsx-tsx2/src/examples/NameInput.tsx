import { useState } from 'react'
import type { ChangeEvent } from 'react'

function NameInput() {
  const [name, setName] = useState<string>('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  return (
    <input
      className="input"
      value={name}
      placeholder="이름(tsx)"
      onChange={handleChange}
    />
  )
}

export default NameInput