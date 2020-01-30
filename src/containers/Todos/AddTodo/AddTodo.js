import React, {useState} from 'react';
import styled from 'styled-components';

import Button from '../../../components/UI/Forms/Button/Button';
import Modal from '../../../components/UI/Modal/Modal';
import Heading from '../../../components/UI/Headings/Headings';

const ButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 2rem;
  justify-content: space-around;
`;

const MessageWrapper = styled.div`
  position: absolute;
  bottom: 0rem;
  width: 100%;
  padding: 0 3rem;
`;

const AddTodo = ({}) => {
    const [isOpened, setisOpened] = useState(false);
    return (
        <>
        <Button color="main" contain>
            Add Todo
        </Button>
        {/* <Modal opened={isOpened} close={() => setisOpened(false)}>
            <Heading noMargin size="h1" color="white">
                Add your new todo
            </Heading>
            <Heading bold size="h4" color="white">
                Type your todo and press add.
            </Heading>
        <ButtonsWrapper>
            <Button contain color="main">
                Delete
            </Button>
            <Button color="main" contain onClick={() => setisOpened(false)}>
                Cancel
            </Button>
        </ButtonsWrapper>
        <MessageWrapper>

        </MessageWrapper>
        </Modal> */}
        </>
        
    )
}

export default AddTodo
