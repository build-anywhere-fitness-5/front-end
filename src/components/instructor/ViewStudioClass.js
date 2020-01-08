import React from 'react';
import { connect } from 'react-redux';
import { deleteStudioClass } from '../../actions/index'

const ViewStudioClass = props => {

    const classViewing = +props.match.params.classID

    const handleDelete = e => {
        e.preventDefault()
        props.deleteStudioClass(classViewing)
        props.history.push(`/instructor/`)
    }

    const handleEdit = e => {
        e.preventDefault()
        props.history.push(`/instructor/studioclasses/edit/${classViewing}`)
    }

    // console.log(classEditing)

    return (
        <div>
            <p>title: {props.studioTwoClasses.find(c => c.id === classViewing).title}</p>

            <p>instructorId: {props.studioTwoClasses.find(c => c.id === classViewing).instructorId}</p>
            <p>categoryId: {props.studioTwoClasses.find(c => c.id === classViewing).categoryId}</p>
            <p>scheduleTime: {props.studioTwoClasses.find(c => c.id === classViewing).scheduleTime}</p>
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
        studioTwoClasses: state.studioTwoClasses
    }
}
export default connect(mapStateToProps, { deleteStudioClass })(ViewStudioClass);