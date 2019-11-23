import React from 'react';
import PropTypes from 'prop-types';

export const Message = ({ text }) => (
    <div>
        {text}
    </div>
);

Message.propTypes = {
    text: PropTypes.string.isRequired
};