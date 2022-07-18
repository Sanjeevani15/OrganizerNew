import { Box } from "@chakra-ui/react"
import { useSelector } from "react-redux";
import { getTodosByVisibilityFilter } from "../../redux/actions/selector";
import { Todo } from "./Todo";

export const TodoList = () => {
  const { todos, visibilityFilter } = useSelector(state => state);
  const filterTodos = getTodosByVisibilityFilter(todos, visibilityFilter);

  return (
    <div className="alltodos">
      {filterTodos.length ? filterTodos.map(todo => (
        <Todo key={`todo-${todo.id}`} todo={todo} />
      )) : <Box 
              textAlign="center"
              my="4" 
              color="purple" 
              fontSize='2rem' 
              fontWeight='bold'
              // color='#f1ebe5'
              textShadow='0 13.36px 8.896px #c4b59d,0 -2px 1px #fff'
              >No Todos Yay!</Box>}
    </div>
  )
}

export default TodoList;
