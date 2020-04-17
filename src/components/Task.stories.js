import React from 'react';
import Task from './Task';


/**
 * Actions are is story book components  (native addons)
 * https://storybook.js.org/addons/introduction/#2-native-addons
 * that capture the
 *
 * action() allows us to create a callback that appears in the actions panel of the Storybook UI when clicked.
 * So when we build a pin button, we’ll be able to determine in the test UI if a button click is successful.
 * Actions help you verify interactions when building UI components in isolation. Oftentimes you won't have access to the functions and state you have in context of the app. Use action() to stub them in.
*/
import { action } from '@storybook/addon-actions';


/**
 * To tell Storybook about the component we are documenting, we create a default export that contains:
 *    * component -- the component itself,
 *    * title -- how to refer to the component in the sidebar of the Storybook app,
 *    * excludeStories -- exports in the story file that should not be rendered as stories by Storybook.
 *                       exports that end in "Data" are not stories
 */
export default {
    component: Task,
    title: 'Task',
    // Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
};


/**
 * Not a story (default:excludeStories exclude it)
 * taskData is a base task  to build out the shape of the task the component expects
 */
export const taskData = {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2018, 0, 1, 9, 0),
};

/** 
 * Not a story (default:excludeStories exclude it)
 * Set of Storybook actions (mocked callback) passed to the component as callback mock function
 * They will just show the action in the Action panel
 * 
 * FYI: ie
 * <Task {...actionsData}> 
 *     is equivalent to 
 * <Task onPinTask={actionsData.onPinTask} onArchiveTask={actionsData.onArchiveTask}>.
 */
export const actionsData = {
    onPinTask: action('onPinTask'),
    onArchiveTask: action('onArchiveTask'),
};


/**
 * Stories (test cases for three Task states)
 * To define our stories, we export a function for each of our test states to generate a story.
 * The story is a function that returns a rendered element(i.e.a component with a set of props) in a given state
 */
export const Default = () => (
    <Task task={{ ...taskData }} {...actionsData} />
);

export const Pinned = () => (
    <Task task={{ ...taskData, state: 'TASK_PINNED' }} {...actionsData} />
);

export const Archived = () => (
    <Task task={{ ...taskData, state: 'TASK_ARCHIVED' }} {...actionsData} />
);
