import CheckFull from '../../assets/checkfull.png'
import Trash from '../../assets/trash.png'

export default function TaskItem() {
  return (
    <div style={{
      width: '100%',
      background: '#262626',
      padding: '30px 20px',
      border: '1px solid #666',
      borderRadius: '8px',
      color: '#F2F2F2',
    }}>
      <div style={{ display: 'flex', position: 'relative', justifyContent: 'space-between' }}>
        <p style={{ display: 'flex' }}>
          <span style={{ marginRight: '5px' }}>
            <img src={CheckFull} />
          </span>
          <span>
            Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
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
              paddingLeft: '5px'
             }}
             onClick={() => {}}
          />
      </div>
    </div>
  )
}
