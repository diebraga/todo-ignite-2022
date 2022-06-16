
interface InputProps {
  onSubmit: () => void
}

export default function Input({ onSubmit }: InputProps) {
  return (
    <form className="formLine">
      <button 
      type='submit'
      onSubmit={onSubmit}
      >
        Add task
      </button>
      <span><input type="text" /></span>
    </form>
  )
}
