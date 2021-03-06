import { Container, Tab, TabList, Tabs } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { VISIBILITY_FILTER } from '../../constants.js';
import { setFilter } from "../../redux/actions/actions";

export const VisibilityFilter = () => {
    const dispatch = useDispatch();

    return (
        <Container className='visibletabs'>
            <Tabs variant='soft-rounded' colorScheme='red' >
                <TabList>
                    {Object.keys(VISIBILITY_FILTER).map(filterkey => {
                        const currentFilter = VISIBILITY_FILTER[filterkey];
                        return (
                            <Tab
                                key={`visibility-filter-${currentFilter}`}
                                onClick={() => dispatch(setFilter(currentFilter))}
                            >
                                {currentFilter}
                            </Tab>
                        )
                    })}
                </TabList>
            </Tabs>
        </Container>
    )
}

export default VisibilityFilter;