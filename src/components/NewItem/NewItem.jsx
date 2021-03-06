import React from 'react';
import { 
    ItemContainer, 
    StyledFieldName, 
    StyledFieldDescription, 
    AddForm, 
    CancelButton, 
    SaveButton } from './NewItemStyled';
import { Formik } from 'formik';
import PropTypes from 'prop-types';

export const validateField = (value) => {
    const error = !value ? 
        'Enter task name' : 
        value.length > 15 ? 
        'Task name is too long' : 
        undefined;

    return error;
};

export const NewItem = ({ onAddFormSubmit }) => (
    <ItemContainer>
        <Formik
            initialValues={{
                name: '',
                description: '',
            }}
            onSubmit={(values, actions) => {
                onAddFormSubmit(values.name, values.description);
                actions.resetForm();
            }}
        >
                {
                    ({ handleSubmit, values, dirty, handleReset, errors }) => {
                        return (
                            <AddForm onSubmit={handleSubmit}>
                                <StyledFieldName 
                                    validate={validateField}
                                    placeholder="Type task name..." 
                                    name="name" 
                                    value={values.name} 
                                />
                                <hr />
                                <StyledFieldDescription 
                                    placeholder="Type task description..." 
                                    name="description" 
                                    value={values.description}
                                    component="textarea"
                                    rows="5" 
                                />
                                <CancelButton
                                    type="button" 
                                    onClick={handleReset}
                                >
                                    CANCEL
                                </CancelButton>
                                <SaveButton 
                                    label={errors.name || `Enter task name`}
                                    disabled={!dirty || errors.name}
                                    type="submit"
                                >
                                    ADD
                                </SaveButton>
                            </AddForm>
                        )
                    }
                }
        </Formik>
    </ItemContainer>
);

NewItem.propTypes = {
    onAddFormSubmit: PropTypes.func.isRequired
};