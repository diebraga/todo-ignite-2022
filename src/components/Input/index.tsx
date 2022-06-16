import { FormEvent } from "react"

interface InputProps {
  onSubmit: (e: FormEvent) => void
  onChange: (e: any) => void
  value: string
}

export default function Input({ onSubmit, onChange, value }: InputProps) {
  return (
    <form className="formLine" onSubmit={onSubmit}>
      <button
        type='submit'
        placeholder='Add a new task'
      >
        Add task
      </button>
      <span>
        <input
          type="text"
          onChange={onChange}
          value={value}
        />
      </span>
    </form>
  )
}
