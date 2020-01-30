import React, { useEffect} from 'react';
import { connect } from 'react-redux';

import { FormWrapper } from '../../../hoc/layout/elements';
import styled from 'styled-components';
import Heading from '../../../components/UI/Headings/Headings';
import Button from '../../../components/UI/Forms/Button/Button';
import { actionTypes } from 'react-redux-firebase';
import * as actions from '../../../store/actions';
import Message from '../../../components/UI/Message/Message';

const MessageWrapper = styled.div`
  position: absolute;
  bottom: -2rem;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
`;

const VerifyEmail = ( { sendVerification, error, loading, cleanUp }) => {

    useEffect(() => {
        return () => {
            cleanUp();
        };
    }, [cleanUp]);

    return (
        <FormWrapper>
            <Wrapper>
                <Heading color="white" size="h1">
                    Verify your email
                </Heading>
                <Heading color="white" size="h4">
                    Go to your email inbox, and please verify your email.
                </Heading>
                <Button 
                    loading={loading ? 'Sending email...' : null}
                    disabled={loading} 
                    onClick={() => sendVerification()}>
                    Re-send verification email
                </Button>
                <MessageWrapper>
                    <Message error show={error}>
                        {error}
                    </Message>
                </MessageWrapper>
                <MessageWrapper>
                    <Message success show ={ error === false }>
                        Message sent successfully
                    </Message>
                </MessageWrapper>
            </Wrapper>   
        </FormWrapper>
    );
};

const mapStateToProps = ({ auth }) => ({
    loading: auth.verifyEmail.loading,
    error: auth.verifyEmail.error,
})

const mapDispatchToProps = {
    sendVerification: actions.verifyEmail,
    cleanUp: actions.clean,
}

export default connect(mapStateToProps, mapDispatchToProps) (VerifyEmail);
