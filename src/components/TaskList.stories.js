import React from 'react';

// Import of the function (not of the wrapped Redux Component)
// Called a pure function
import { PureTaskList }  from './TaskList';
import { taskData, actionsData } from './Task.stories';
import { storiesOf } from '@storybook/react';



export const defaultTasksData = [
    { ...taskData, id: '1', title: 'Task 1' },
    { ...taskData, id: '2', title: 'Task 2' },
    { ...taskData, id: '3', title: 'Task 3' },
    { ...taskData, id: '4', title: 'Task 4' },
    { ...taskData, id: '5', title: 'Task 5' },
    { ...taskData, id: '6', title: 'Task 6' },
];

export const withPinnedTasksData = [
    ...defaultTasksData.slice(0, 5),
    { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
];


storiesOf('TaskList', module)
    .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
    .add('default', () => <PureTaskList tasks={defaultTasksData} {...actionsData} />)
    .add('WithPinnedTasks', () => <PureTaskList tasks={withPinnedTasksData} {...actionsData} />)
    .add('loading', () => <PureTaskList loading tasks={[]} {...actionsData} />)
    .add('empty', () => <PureTaskList tasks={[]} {...actionsData} />);

