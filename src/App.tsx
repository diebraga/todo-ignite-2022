import { FormEvent, useState } from 'react';
import logo from './assets/Logo.png'
import Input from './components/Input';
import Logo from './components/Logo';
import NoTasksBanner from './components/NoTasksBanner';
import TaskItem from './components/TaskItem';
import TodoStatus from './components/ToDoStatus.tsx';
import { useWindowSize } from './hooks/useWindowSize'

interface TaskType {
  id: number,
  content: string,
  isComplete: boolean
}

function App() {
  const [textContent, setTextContent] = useState<string>('');
  const [taskList, setTaskList] = useState<TaskType[]>([]);

  const { width } = useWindowSize();

  const formPadding = width && width < 600 ? '10px' : '100px';

  function handleAddNewTask(e: FormEvent) {
    e.preventDefault();
    const newTask: TaskType = {
      id: taskList.length + 1,
      content: textContent,
      isComplete: false
    }

    if (textContent.length < 1) alert("Task can't be blank!");
    else if (textContent.length > 1000) {
      alert("Task too long!");
      setTextContent('');
    } else if (taskList.length === 10) alert("You can't add more than 10 tasks at the time!");
    else {
      setTaskList(prev => [...prev, newTask]);
      setTextContent('');
    }
  }

  function handleMarkAsRead(id: number) {
    setTaskList(
      taskList.map(
        task => task.id === id
          ? { ...task, isComplete: task.isComplete ? false : true }
          : task
      )
    )
  }

  function handleDeleteTask(id: number) {
    const proceed = confirm("Are you sure you want to delete this task?");

    if (proceed) {
      setTaskList(taskList.filter(task => task.id !== id));
      return;
    } else {
      return;
    };
  }

  const completed = taskList.filter(prev => prev.isComplete === true).length

  return (
    <div>
      <div style={{ background: '#454545', height: '100vh', width: '100%', borderTop: '200px solid black' }}>
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
          <Logo src={logo} />
        </div>

        <div style={width && width < 1400 ? { padding: `0 ${formPadding}` } : { padding: `0 400px` }}>
          <Input
            onSubmit={handleAddNewTask}
            onChange={e => setTextContent(e.target.value)}
            value={textContent}
          />
          <TodoStatus
            createdTasksNumber={taskList.length}
            completedTasksNumber={completed}
          />

          {taskList.length === 0 && <NoTasksBanner />}

          {taskList.map((task) => {
            return (
              <div key={task.id}>
                <TaskItem
                  content={task.content}
                  isCompleted={task.isComplete}
                  onDelete={() => handleDeleteTask(task.id)}
                  onClick={() => handleMarkAsRead(task.id)}
                />
                <br />
              </div>
            )
          })}
        </div>
      </div>
    </div >
  )
}

export default App
