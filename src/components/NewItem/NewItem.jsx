import React from 'react';
import { NewItemContainer, StyledFieldName, StyledFieldDescription, AddForm } from './NewItemStyled';
import { Formik } from 'formik';

export const NewItem = ({ onAddFormSubmit }) => {
    return (
        <NewItemContainer>
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
                                <button 
                                    onClick={handleReset}
                                    >
                                    CANCEL
                                </button>
                                <button 
                                    disabled={!dirty}
                                    type="submit">
                                    ADD
                                </button>
                            </AddForm>
                        )
                    }
            </Formik>
        </NewItemContainer>
    );
};
