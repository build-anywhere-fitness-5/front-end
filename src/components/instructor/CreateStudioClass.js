import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { addStudioClass } from '../../actions/index';

const Form = styled.form`
display: flex;
flex-direction: column;
width: 50%;
`

const CreateStudioClass = props => {

    const [newClass, setNewClass] = useState({
        title: '',
        instructorId: 0,
        categoryId: 0,
        scheduleTime: '',
        id: '',
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
            <h2>Create class</h2>

            <Form>

                <label htmlFor="title">title</label>
                <input
                    type="text"
                    name="title"
                    value={newClass.title}
                    id="title"
                    onChange={handleChanges}
                />

                <label htmlFor="classType">instructorId</label>
                <input
                    type="number"
                    value={newClass.instructorId}
                    id="instructorId"
                    name="instructorId"
                    onChange={handleChanges}
                />

                <label htmlFor="categoryId">categoryId</label>
                <input
                    type="number"
                    value={newClass.categoryId}
                    id="categoryId"
                    name="categoryId"
                    onChange={handleChanges}
                />

                <label htmlFor="scheduleTime">scheduleTime</label>
                <input
                    type="time"
                    value={newClass.scheduleTime}
                    id="scheduleTime"
                    name="scheduleTime"
                    onChange={handleChanges}
                />



                <button onClick={handleSubmit}>Create class</button>
            </Form>
        </div>
    )
}

const mapStateToProps = state => {
    return {

    }
}

export default connect(mapStateToProps, { addStudioClass })(CreateStudioClass);