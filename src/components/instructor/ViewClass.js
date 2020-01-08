import React from 'react';
import { connect } from 'react-redux';
import { deleteClass } from '../../actions/index'

const ViewClass = props => {

    const classViewing = +props.match.params.classID

    const handleDelete = e => {
        e.preventDefault()
        props.deleteClass(classViewing)
        props.history.push(`/instructor/`)
    }

    const handleEdit = e => {
        e.preventDefault()
        props.history.push(`/instructor/classes/edit/${classViewing}`)
    }

    // console.log(classEditing)

    return (
        <div>
            <p>Class Name: {props.classes.find(c => c.id === classViewing).className}</p>

            <p>classType: {props.classes.find(c => c.id === classViewing).className}</p>
            <p>startTime: {props.classes.find(c => c.id === classViewing).startTime}</p>
            <p>durationMinutes: {props.classes.find(c => c.id === classViewing).durationMinutes}</p>
            <p>intensity: {props.classes.find(c => c.id === classViewing).intensity}</p>
            <p>location: {props.classes.find(c => c.id === classViewing).location}</p>
            <p>maxClassSize:{props.classes.find(c => c.id === classViewing).maxClassSize} </p>
            <p>date: {props.classes.find(c => c.id === classViewing).date}</p>
            <p>instructor: {props.classes.find(c => c.id === classViewing).instructor}</p>
            <p>id: {classViewing}</p>
            <div>
                <button onClick={handleDelete}>Delete</button>
                <button onClick={handleEdit}>Edit</button>
            </div>
        </div>




    )
}

const mapStateToProps = state => {
    return {
        classes: state.classes
    }
}
export default connect(mapStateToProps, { deleteClass })(ViewClass);