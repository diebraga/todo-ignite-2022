import { FormEvent } from "react"
import Plus from "../../assets/plus.svg";

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
        style={{ textAlign: 'center' }}
      >
        <span>Add <img src={Plus} /></span>
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
