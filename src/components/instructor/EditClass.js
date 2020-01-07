import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { editClass } from '../../actions/index'

import styled from 'styled-components';

const Form = styled.form`
display: flex;
flex-direction: column;
width: 50%;
`

const EditClass = props => {

    const [editClass, setEditClass] = useState({
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

    useEffect(() => {
        setEditClass(props.classes.find(c => c.id === +props.match.params.classID))
    }, [+props.match.params.classID])

    const classEditing = +props.match.params.classID

    console.log(editClass)

    const handleChanges = e => {
        console.log(e.target.value)
        setEditClass({
            ...editClass,
            [e.target.name]: e.target.type === 'number' ? +e.target.value : e.target.value
        });
    };

    const handleSave = e => {
        e.preventDefault()
        props.editClass(editClass)
        props.history.push(`/instructor/`)
    }

    const handleCancel = e => {
        e.preventDefault()
        props.history.push(`/instructor/`)
    }

    // console.log(classEditing)

    return (
        <div>

            <Form>

                <label htmlFor="className">Class Name</label>
                <input
                    type="text"
                    name="className"
                    value={editClass.className}
                    id="className"
                    onChange={handleChanges}
                    placeholder={props.classes.find(c => c.id === classEditing).className}
                />

                <label htmlFor="classType">Type</label>
                <input
                    type="text"
                    value={editClass.classType}
                    id="classType"
                    name="classType"
                    onChange={handleChanges}
                />

                <label htmlFor="startTime">Start time</label>
                <input
                    type="time"
                    value={editClass.startTime}
                    id="startTime"
                    name="startTime"
                    onChange={handleChanges}
                />

                <label htmlFor="durationMinutes">Duration (minutes)</label>
                <input
                    type="number"
                    value={editClass.durationMinutes}
                    id="durationMinutes"
                    name="durationMinutes"
                    onChange={handleChanges}
                />

                <label htmlFor="intensity">Intensity</label>
                <input
                    type="text"
                    value={editClass.intensity}
                    id="intensity"
                    name="intensity"
                    onChange={handleChanges}
                />

                <label htmlFor="location">Location</label>
                <input
                    type="text"
                    value={editClass.location}
                    id="location"
                    name="location"
                    onChange={handleChanges}
                />

                <label htmlFor="maxClassSize">Max Class Size</label>
                <input
                    type="number"
                    value={editClass.maxClassSize}
                    id="maxClassSize"
                    name="maxClassSize"
                    onChange={handleChanges}
                />

                <label htmlFor="date">Date</label>
                <input
                    type="date"
                    value={editClass.date}
                    id="date"
                    name="date"
                    onChange={handleChanges}
                />

                <div>
                    <button onClick={handleSave}>Save</button>
                    <button onClick={handleCancel}>Cancel</button>
                </div>
            </Form>
        </div>




    )
}

const mapStateToProps = state => {
    return {
        classes: state.classes
    }
}
export default connect(mapStateToProps, { editClass })(EditClass);