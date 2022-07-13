import React from 'react';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Container, Heading} from '@chakra-ui/react'
import AddTodo from './components/todoComponents/AddTodo';
import TodoList from './components/todoComponents/TodoList';
import VisibilityFilter from './components/todoComponents/VisibilityFilter';


import BreakTime from './components/pomodoroComponents/BreakTime';
import SessionTime from './components/pomodoroComponents/SessionTime';
import Timer from './components/pomodoroComponents/Timer';

import Typewriter from 'typewriter-effect';


function App() {
return(
<>


<div className='headertype'>
<p>Hey, there!! Its time to </p>
<Typewriter
options={{
  typeString: 'A simple yet powerful native javascript',
  strings: ['Plan your day out ...', 'Set your timer up...','hussle and achieve your dreams...'],
  autoStart: true,
  loop: true,
  pauseFor:1000,
  deleteSpeed:20,
}} />
</div>



<div className='App-container'>
{/* for todo list */}
  <div className='main-one'>
 <Container maxW="container.sm">
<Heading my="4"> Todo List</Heading>
<AddTodo/>
<TodoList/>
<VisibilityFilter/>
</Container>
</div>

<div className='flex-container'>

{/* FOR POMODORO */}
<div className='main-two'>
<Heading my="4"> Pomodoro</Heading>
<span>Be productive!!</span>

<div className='set-time-container'>
   <Timer />
   <div>
  <SessionTime /> 
  <BreakTime />
  </div>
</div>
</div> 





</div>

</div>
</>
);
}

export default App;
