import React from 'react';
import { connect } from 'react-redux';
import { deleteClass } from '../../actions/index'

const ViewClass = props => {

    const classEditing = +props.match.params.classID

    const handleDelete = e => {
        e.preventDefault()
        props.deleteClass(classEditing)
        props.history.push(`/instructor/`)
    }

    const handleEdit = e => {
        e.preventDefault()
    }

    // console.log(classEditing)

    return (
        <div>
            <p>Class Name: {props.classes.find(c => c.id === classEditing).className}</p>

            <p>classType: {props.classes.find(c => c.id === classEditing).className}</p>
            <p>startTime: {props.classes.find(c => c.id === classEditing).startTime}</p>
            <p>durationMinutes: {props.classes.find(c => c.id === classEditing).durationMinutes}</p>
            <p>intensity: {props.classes.find(c => c.id === classEditing).intensity}</p>
            <p>location: {props.classes.find(c => c.id === classEditing).location}</p>
            <p>maxClassSize:{props.classes.find(c => c.id === classEditing).maxClassSize} </p>
            <p>date: {props.classes.find(c => c.id === classEditing).date}</p>
            <p>instructor: {props.classes.find(c => c.id === classEditing).instructor}</p>
            <p>id: {classEditing}</p>
            <div>
                <button onClick={handleDelete}>Delete</button>
                <button>Edit</button>
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