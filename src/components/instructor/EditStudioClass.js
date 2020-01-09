import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { editStudioClass } from '../../actions/index'

import styled from 'styled-components';

const Form = styled.form`
display: flex;
flex-direction: column;
width: 50%;
`

const EditStudioClass = props => {

    // console.log(rendering)

    const [editClass, setEditClass] = useState({
        title: '',
        instructorId: 0,
        categoryId: 0
    });

    useEffect(() => {
        setEditClass(props.studioTwoClasses.find(c => c.id === +props.match.params.classID))
    }, [props.match.params.classID, props.studioTwoClasses])

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
        props.editStudioClass(editClass)
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

                <label htmlFor="title">Class Name</label>
                <input
                    type="text"
                    name="title"
                    value={editClass.title}
                    id="className"
                    onChange={handleChanges}
                    placeholder={props.studioTwoClasses.find(c => c.id === classEditing).title}
                />

                <label htmlFor="instructorId">instructorId</label>
                <input
                    type="number"
                    value={editClass.instructorId}
                    id="instructorId"
                    name="instructorId"
                    onChange={handleChanges}
                />

                <label htmlFor="categoryId">categoryId</label>
                <input
                    type="number"
                    value={editClass.categoryId}
                    id="categoryId"
                    name="categoryId"
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
        studioTwoClasses: state.studioTwoClasses
    }
}
export default connect(mapStateToProps, { editStudioClass })(EditStudioClass);