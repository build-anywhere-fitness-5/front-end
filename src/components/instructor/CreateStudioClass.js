import React, { useState } from 'react';
// import styled from 'styled-components';
import { connect } from 'react-redux';

import { addStudioClass } from '../../actions/index';

import { StyledInput } from "../StyledInput";
import { StyledSignupLoginButton } from "../StyledSignupLoginButton";

import './CreateFormStyles.css';

const CreateStudioClass = props => {

    const [newClass, setNewClass] = useState({
        title: '',
        instructorId: 0,
        categoryId: 0,
    });

    console.log(newClass);

    const handleChanges = e => {
        console.log(e.target.value)
        setNewClass({
            ...newClass,
            [e.target.name]: e.target.type === 'number' ? +e.target.value : e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault()
        props.addStudioClass(newClass);
        props.history.push(`/instructor/`);
    }

    return (
        <div>
            <h1>Create Studio Class</h1>

            <form className="createForm">
                <div>
                    <label htmlFor="title">title</label>
                    <StyledInput
                        type="text"
                        name="title"
                        value={newClass.title}
                        id="title"
                        onChange={handleChanges}
                    />
                </div>
                <div>

                    <label htmlFor="classType">instructorId</label>
                    <StyledInput
                        type="number"
                        value={newClass.instructorId}
                        id="instructorId"
                        name="instructorId"
                        onChange={handleChanges}
                    />
                </div>
                <div>
                    <label htmlFor="categoryId">categoryId</label>
                    <StyledInput
                        type="number"
                        value={newClass.categoryId}
                        id="categoryId"
                        name="categoryId"
                        onChange={handleChanges}
                    />
                </div>



                <StyledSignupLoginButton onClick={handleSubmit}>Create class</StyledSignupLoginButton>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {

    }
}

export default connect(mapStateToProps, { addStudioClass })(CreateStudioClass);