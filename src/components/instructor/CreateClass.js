import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { addClass } from '../../actions/index';

const Form = styled.form`
display: flex;
flex-direction: column;
width: 50%;
`

const CreateClass = props => {

    const [newClass, setNewClass] = useState({
        className: '',
        classType: '',
        startTime: '',
        durationMinutes: 0,
        intensity: '',
        location: '',
        maxClassSize: 0,
        date: '',
        clients: []
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
        props.addClass(newClass);
        props.history.push(`/instructor/`);
    }

    return (
        <div>
            <h2>Create class</h2>

            <Form>

                <label htmlFor="className">Class Name</label>
                <input
                    type="text"
                    name="className"
                    value={newClass.className}
                    id="className"
                    onChange={handleChanges}
                />

                <label htmlFor="classType">Type</label>
                <input
                    type="text"
                    value={newClass.classType}
                    id="classType"
                    name="classType"
                    onChange={handleChanges}
                />

                <label htmlFor="startTime">Start time</label>
                <input
                    type="time"
                    value={newClass.startTime}
                    id="startTime"
                    name="startTime"
                    onChange={handleChanges}
                />

                <label htmlFor="durationMinutes">Duration (minutes)</label>
                <input
                    type="number"
                    value={newClass.durationMinutes}
                    id="durationMinutes"
                    name="durationMinutes"
                    onChange={handleChanges}
                />

                <label htmlFor="intensity">Intensity</label>
                <input
                    type="text"
                    value={newClass.intensity}
                    id="intensity"
                    name="intensity"
                    onChange={handleChanges}
                />

                <label htmlFor="location">Location</label>
                <input
                    type="text"
                    value={newClass.location}
                    id="location"
                    name="location"
                    onChange={handleChanges}
                />

                <label htmlFor="maxClassSize">Max Class Size</label>
                <input
                    type="number"
                    value={newClass.maxClassSize}
                    id="maxClassSize"
                    name="maxClassSize"
                    onChange={handleChanges}
                />

                <label htmlFor="date">Date</label>
                <input
                    type="date"
                    value={newClass.date}
                    id="date"
                    name="date"
                    onChange={handleChanges}
                />

                <button onClick={handleSubmit}>Create class</button>
            </Form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        addClass: addClass
    }
}

export default connect(mapStateToProps, { addClass })(CreateClass);