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
            }}>
                {
                    ({ handleSubmit, values, dirty, handleReset }) => (
                        <AddForm onSubmit={handleSubmit}>
                            <StyledFieldName 
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
                                disabled={!dirty}
                                type="submit">
                                ADD
                            </SaveButton>
                        </AddForm>
                    )
                }
        </Formik>
    </ItemContainer>
);

NewItem.propTypes = {
    onAddFormSubmit: PropTypes.func.isRequired
};