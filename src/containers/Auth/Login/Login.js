import React, { useEffect } from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { FormWrapper, StyledForm } from '../../../hoc/layout/elements';
import Input from '../../../components/UI/Forms/Input/Input';
import Button from '../../../components/UI/Forms/Button/Button';
import Heading from '../../../components/UI/Headings/Headings';
import * as actions from '../../../store/actions';
import { connect } from 'react-redux';
import Message from '../../../components/UI/Message/Message';
import styled from 'styled-components';

const MessageWrapper = styled.div`
  position: absolute;
  bottom: 0;
`;

const LoginSchema = Yup.object().shape({
    email: Yup.string()
    .email('Invalid email.')
    .required('The email is required.').min(8, 'Too short.'),
    password: Yup.string().required('The password is required.'),
});

const Login = ({ login, loading, error, cleanUp }) => {
    useEffect(() => {
        return () => {
            cleanUp();
        };
    }, [cleanUp]);

    return (
        <Formik
        initialValues={{
            email: '',
            password: ''
        }}
        validationSchema={LoginSchema}
        onSubmit={async (values, {setSubmitting}) => {
            await login(values)
            setSubmitting(false)
        }}
        >
        {({isSubmitting, isValid}) => (
            <FormWrapper>
                <StyledForm>
                    <Heading size="h1" color='white'>Login to THINKHASH</Heading>
                    <Heading bold size="h4" color="white">
                        Fill in your details to login into your account
                    </Heading>
                    <Field type="email" name="email" placeholder="Your email..." component={Input} />
                    
                    <Field type="password" name="password" placeholder="Your password..." component={Input} />
                    
                    <Button 
                        disabled={!isValid || isSubmitting } 
                        loading={loading ? 'Signing up': null}
                        type="submit">
                            Login
                    </Button>
                    <MessageWrapper>
                        <Message error show={error}>
                            {error}
                        </Message>
                    </MessageWrapper>
                </StyledForm>

            </FormWrapper>
            
        )}
        </Formik>
    )
}

const mapStateToProps = ({auth}) => ({
    loading: auth.loading,
    error: auth.error
})

const mapDispatchToProps = {
    login: actions.signIn,
    cleanUp: actions.clean
}

export default connect(mapStateToProps, mapDispatchToProps) (Login);
