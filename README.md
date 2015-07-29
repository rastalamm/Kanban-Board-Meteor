###Kanban Meteor
1. Use `meteor create` to create a new application called `kanban-krazy`.
2. Install `iron:router` into your application.
3. Install `ui-accounts` into your application and create a sign-in registration page per the documentation.
4. Make sure you create your project structure in line with best practices.
5. Implement user authentication into your application so that a user can only access their dashboard after registring and logging in.
6. Once a user is registered and logged in, they should be directed to the following route: `http://localhost:3000/dashboard`
7. On their dashboard they should see a navigation section that shows they're welcome message and the users name as a clickable link that will take them to `http://localhost:3000/profile/edit` with a form to edit they're information, as well as a functional logout link that will successfully log them out and redirect them to `http://localhost:3000`.
8. When the user visits their dashboard they should see three columns that will have tasks listed vertically in the following states: *To Do*, *In Progress*, *Done*
8. Somewhere on your page, you should have an icon or obvious call to action to create a new task.
9. When the user decides to create a new task, they should be routed to `http://localhost:3000/tasks/new` which should render a form for them to be able to create a new task. Optional: Make the create task part of the `http://localhost:3000/dashboard` layout.
10. A task should have the following fields as editable fields: *title*, *description*. You will have to add other necessary fields to the Task Mongo document for other functionality but these are the only editable fields.
11. When a user creates a new task, it is assigned the *To Do* state automatically and rendered immediately.
12. For each task that is rendered on the dashboard in each column there should be an icon to delete the task, as well as an icon to move it to the next state. What about previous state? Ex. `To Do -> In Progress -> Done`

###Stretch Goals
1. Update the task object so that comments can be added and displayed for each task.
2. Make the tasks draggable from one column to the next to change the state of the task.
3. Implement your columns with flexbox, a new native CSS layout for more flexible layouts (not yet supported in many browsers).

###REMINDER: Meteor is doing a lot for us but remember at the end of the day it's also *JUST JAVASCRIPT*.