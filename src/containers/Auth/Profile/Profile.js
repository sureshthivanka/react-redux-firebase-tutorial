import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Formik, Field } from 'formik';
import { FormWrapper, StyledForm } from '../../../hoc/layout/elements';
import styled from 'styled-components';
import * as Yup from 'yup';

import Message from '../../../components/UI/Message/Message';
import Heading from '../../../components/UI/Headings/Headings';
import Input from '../../../components/UI/Forms/Input/Input';
import Button from '../../../components/UI/Forms/Button/Button';

import * as actions from '../../../store/actions';

const MessageWrapper = styled.div`
  position: absolute;
  bottom: 0;
`;

const ProfileSchema = Yup.object().shape({
    firstName: Yup.string()
      .required('Your first name is required.')
      .min(3, 'Too short.')
      .max(25, 'Too long.'),
    lastName: Yup.string()
      .required('Your last name is required.')
      .min(3, 'Too short.')
      .max(25, 'Too long.'),
    email: Yup.string()
      .email('Invalid email.')
      .required('The email is required.'),
    password: Yup.string().min(8, 'The Password is too short.'),
    
   
});

const Profile = ({ firebase, editProfile, loading, error, cleanUp }) => {
    
    useEffect(() => {
        return () => {

        }
    }, [cleanUp]);

    if (!firebase.profile.isLoaded) return null;
    return (
        <Formik
      initialValues={{
        firstName: firebase.profile.firstName,
        lastName: firebase.profile.lastName,
        email: firebase.auth.email,
        password: '',
        confirmPassword: '',
      }}
      validationSchema={ProfileSchema}
      onSubmit={async (values, { setSubmitting }) => {
        // Edit the Profile here
        await editProfile(values); 
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, isValid }) => (
        <FormWrapper>
          <Heading noMargin size="h1" color="white">
            Edit Your Profile
          </Heading>
          <Heading bold size="h4" color="white">
            Here you can edit your profile
          </Heading>
          <StyledForm>
            <Field
              type="text"
              name="firstName"
              placeholder="Your first name..."
              component={Input}
            />
            <Field
              type="text"
              name="lastName"
              placeholder="Your last name..."
              component={Input}
            />
            <Field
              type="email"
              name="email"
              placeholder="Your email..."
              component={Input}
            />
            <Field
              type="password"
              name="password"
              placeholder="Your password..."
              component={Input}
            />
            <Field
              type="password"
              name="confirmPassword"
              placeholder="Re-type your password..."
              component={Input}
            />
            <Button 
              disabled={!isValid || isSubmitting } 
              loading={loading ? 'Editing...': null}
              type="submit"
            >
             Edit
            </Button>
            <MessageWrapper>
                <Message error show={error}>
                    {error}
                </Message>
            </MessageWrapper>
            <MessageWrapper>
                <Message success show={error === false }>
                    Profile was updated..!!
                </Message>
            </MessageWrapper>
          </StyledForm>
        </FormWrapper>
      )}
    </Formik>
    );
};

const mapStateToProps = ({ firebase, auth }) => ({
  firebase,
  loading: auth.profileEdit.loading,
  error: auth.profileEdit.error,
});

const mapDispatchToProps = {
  editProfile: actions.editProfile,
  cleanUp: actions.clean,
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);
