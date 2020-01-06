import React from 'react';
import { connect } from 'react-redux';

const Classes = props => {
    return (
        <div>
            {props.classes[0].className}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        classes: state.classes
    }
}

export default connect(mapStateToProps, {})(Classes);