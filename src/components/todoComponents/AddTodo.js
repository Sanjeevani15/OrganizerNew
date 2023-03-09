import { Button, Flex, Input ,ButtonGroup} from "@chakra-ui/react"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/actions/actions";

export const AddTodo = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addTodo(value));
        setValue('');
    }

    const handleInput = e => {
        setValue(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <Flex>
                <div>
                    <Input
                        type="text"
                        placeholder='Add a new task...'
                        value={value}
                        onChange={handleInput}
                        borderTopRightRadius={0}
                        borderBottomRightRadius={0}
                        size="lg"
                        focusBorderColor='pink.400'
                        borderWidth={2}
                        borderColor="purple.400"
                        width={500}   
                        color='purple'
                        fontWeight='400' 
                        
                           
                        
                         
                    />
                </div>
                <ButtonGroup size='lg'>
                <Button
                    colorScheme="purple"
                    type="submit"
                    disabled={!value}
                    borderTopLeftRadius={0}
                    borderBottomLeftRadius={0}
                      
                >Add Task</Button>
                </ButtonGroup>
            </Flex>
        </form>
    )
}

export default AddTodo;
