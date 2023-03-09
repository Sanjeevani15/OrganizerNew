import { Checkbox, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { toggleTodo} from '../../redux/actions/actions';

export const Todo = ({ todo }) => {
    const dispatch = useDispatch();
    const [checked, setChecked] = useState(false);

    const handleChecked = () => dispatch(toggleTodo(todo.id));

    useEffect(() => {
        setChecked(todo.completed);
    }, [todo]);
 
    return (
       
        <div className="todoss">
            <Checkbox onChange={handleChecked} colorScheme="green" isChecked={checked}>
                <Text 
                as={todo.completed && "del"} 
                color='white' 
                fontSize='1.2rem' 
                textAlign='left' 
                // fontFamily='Times New Roman' 
                paddingLeft='0.2rem'
                >{todo.content}</Text>
            </Checkbox>
        </div>
     
    )
}