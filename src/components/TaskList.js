// Backup
import React from 'react';
import Task from './Task';

// Argument Type of a function
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { archiveTask, pinTask } from '../lib/redux';

// Export pure (ie without Redux)
// to be used without Redux
export function PureTaskList({ loading, tasks, onPinTask, onArchiveTask }) {
    const events = {
        onPinTask,
        onArchiveTask,
    };


    if (loading) {

        const LoadingRow = (
            <div className="loading-item">
                <span className="glow-checkbox" />
                <span className="glow-text">
                    <span>Loading</span> <span>cool</span> <span>state</span>
                </span>
            </div>
        );

        return (
            <div className="list-items">
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
            </div>
        );
    }

    if (tasks.length === 0) {
        return (
            <div className="list-items">
                <div className="wrapper-message">
                    <span className="icon-check" />
                    <div className="title-message">You have no tasks</div>
                    <div className="subtitle-message">Sit back and relax</div>
                </div>
            </div>
        );
    }

    const tasksInOrder = [
        ...tasks.filter(t => t.state === 'TASK_PINNED'),
        ...tasks.filter(t => t.state !== 'TASK_PINNED'),
    ];

    return (
        <div className="list-items">
            {tasksInOrder.map(task => (
                <Task key={task.id} task={task} {...events} />
            ))}
        </div>
    );
}

PureTaskList.propTypes = {
    loading: PropTypes.bool,
    tasks: PropTypes.arrayOf(Task.propTypes.task).isRequired,
    onPinTask: PropTypes.func.isRequired,
    onArchiveTask: PropTypes.func.isRequired,
};

PureTaskList.defaultProps = {
    loading: false,
};

// Default export component to be used with Redux 
// the TaskList is now a container, and no longer expects any props, 
// instead it connects to the store and sets the props on the PureTaskList component it wraps
export default connect(
    ({ tasks }) => ({
        tasks: tasks.filter(t => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED'),
    }),
    dispatch => ({
        onArchiveTask: id => dispatch(archiveTask(id)),
        onPinTask: id => dispatch(pinTask(id)),
    })
)(PureTaskList);