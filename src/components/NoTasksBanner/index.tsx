import Clipboard from '../../assets/Clipboard.png'

export default function NoTasksBanner() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      fontSize: '1rem',
      color: '#808080',
    }}>

      <div style={{ marginTop: '40px' }}>
        <img src={Clipboard} />
      </div>
      <p style={{
        fontWeight: '400',
        marginTop: '30px',
      }}>
        You don't have any task created yet
      </p>
      <p style={{
        fontWeight: '700',
        marginTop: '10px'
      }}>
        You don't have any task created yet
      </p>
    </div>
  )
}
