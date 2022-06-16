import logo from './assets/Logo.png'
import Input from './components/Input';
import Logo from './components/Logo';
import TodoStatus from './components/ToDoStatus.tsx';
import { useWindowSize } from './hooks/useWindowSize'

function App() {
  const { width } = useWindowSize();

  const formPadding = width && width > 900 ? '500px' : width && width < 400 ? '10px' : '100px';

  return (
    <div>
      <div style={{ background: '#454545', height: '100vh', width: '100%', borderTop: '200px solid black' }}>
        <div>

        </div>
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '60px',
            marginLeft: '-100px',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column'
          }}>
          <Logo src={logo}/>
        </div>

        <div style={{ padding: `0 ${formPadding}` }}>
          <Input
            onSubmit={() => { }}
          />
<TodoStatus />
        </div>
      </div>
    </div >
  )
}

export default App
