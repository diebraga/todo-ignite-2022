import CheckFull from '../../assets/checkfull.png'
import Trash from '../../assets/trash.png'
import Check from '../../assets/check.png'
import { useState } from 'react'

interface TaskItemProps {
  content: string
  onDelete: () => void
  isCompleted: boolean
  onClick: () => void
}

export default function TaskItem({ content, onDelete, isCompleted, onClick }: TaskItemProps) {
  const [hover, setHover] = useState(false)

  const onMouseEnter = () => {
    setHover(true)
  }

  const onMouseLeave = () => {
    setHover(false)
  }

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}

      style={{
        width: '100%',
        background: '#262626',
        padding: '30px 20px',
        border: `${hover || isCompleted ? '2' : '1'}px solid ${hover || isCompleted ? '#1E6F9F' : '#666'}`,
        borderRadius: '8px',
        color: `${isCompleted ? '#808080' : '#F2F2F2'}`,
        textDecoration: `${isCompleted ? 'line-through' : 'none'}`
      }}>
      <div style={{ display: 'flex', position: 'relative', justifyContent: 'space-between' }}>
        <p style={{ display: 'flex', height: '100%', width: '90%', cursor: 'pointer' }} onClick={onClick}>
          <span style={{ marginRight: '5px', marginTop: '-4px' }}>
            <img
              src={isCompleted ? CheckFull : Check}
              style={{
                cursor: 'pointer'
              }}
            />
          </span>
          <span>
            {content}
          </span>
        </p>

        <img
          src={Trash}
          style={{
            height: '24px',
            width: '24px',
            top: '0',
            right: '0',
            position: 'absolute',
            marginTop: '-4px',
            cursor: 'pointer',
            paddingLeft: '5px',
          }}
          onClick={onDelete}
        />
      </div>
    </div>
  )
}
