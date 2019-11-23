import React, { useContext } from 'react';
import { TodoContext } from '../../App';
import { 
    ItemContainer, 
    StyledFieldDescription, 
    AddForm,
    CancelButton,
    SaveButton } from '../NewItem/NewItemStyled';
import { StyledEditName, DeleteButton } from './ActiveItemStyled';
import { Formik } from 'formik';
import PropTypes from 'prop-types';

export const ActiveItem = ({ deleteTask, changeTask }) => {
    const { active } = useContext(TodoContext);
    
    return (
        <ItemContainer>
            <Formik
                initialValues={{
                    name: active.name,
                    description: active.description,
                }}
                onSubmit={(values) => {
                    changeTask({
                        ...active,
                        name: values.name,
                        description: values.description
                    });
                }}>
                    {
                        ({ handleSubmit, values, dirty, handleReset }) => (
                            <AddForm onSubmit={handleSubmit}>
                                <StyledEditName 
                                    placeholder="Type task name..." 
                                    name="name" 
                                    value={values.name} 
                                    />
                                <DeleteButton
                                    type="button"
                                    onClick={() => deleteTask(active.id)}>
                                    DELETE
                                </DeleteButton>
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
                                    SAVE
                                </SaveButton>
                            </AddForm>
                        )
                    }
            </Formik>
        </ItemContainer>
    );
};

ActiveItem.propTypes = {
    deleteTask: PropTypes.func.isRequired,
    changeTask: PropTypes.func.isRequired
};
