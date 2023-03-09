import React from 'react';
import './App.css';
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
<p className='innerhead'>Hey, there!! Its time to
<Typewriter
options={{
  strings: ['Plan your day out ...', 'Set your timer up...','Hustle and achieve your goal...'],
  autoStart: true,
  loop: true,
  pauseFor:500,
  deleteSpeed:10,
}} />
 </p>
</div>



<div className='App-container'>
{/* for todo list */}
  <div className='main-one'>
<p className='headone'>TODO</p>
<AddTodo/><VisibilityFilter/>
<TodoList/>

</div>

{/* <div className='flex-container'> */}

{/* FOR POMODORO */}
<div className='main-two'>
{/* <Heading my="4"> Pomodoro</Heading> */}
<p className='headtwo'>Pomodoro</p>
<div className='set-time-container'>
   <Timer />
   {/* <div> */}
  <SessionTime /> 
  <BreakTime />
  {/* </div> */}
</div>
</div> 





{/* </div> */}

</div>
</>
);
}

export default App;
