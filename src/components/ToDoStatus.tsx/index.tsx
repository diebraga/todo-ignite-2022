
interface TodoStatusProps {
  createdTasksNumber: number
  completedTasksNumber: number
}

export default function TodoStatus({ completedTasksNumber, createdTasksNumber }: TodoStatusProps) {
  const ballStyles = {
    borderRadius: '50%',
    width: '15px',
    height: '15px',
    padding: '1px 5px',

    background: '#666',
    color: '#fff',

    fontSize: '0.8rem'
  }

  return (
    <div style={{ margin: '60px 8px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontWeight: 'bold'
        }}>
        <span style={{ color: '#4EA8DE' }}>
          Created tasks
          &nbsp;
          <span style={ballStyles}>
            {createdTasksNumber}
          </span>
        </span>
        <span style={{ color: '#8284FA' }}>
          Done
          &nbsp;
          <span>
            <span style={
              { ...ballStyles, borderRadius: '8px' }
            }>
              {completedTasksNumber} of {createdTasksNumber}
            </span>
          </span>
        </span>
      </div>
      <hr
        style={{
          display: 'block',
          height: '1px',
          border: '0',
          borderTop: '1px solid #666',
          margin: '1rem 0',
          padding: '0'
        }}
      />
    </div >
  )
}
