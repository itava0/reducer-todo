export const initialState = [
  {
    task: "Learn about reducers",
    completed: false,
    id: 3892987589
  },
  {
    task: "Forum App",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Movie Reviews App",
    id: 1528817084358,
    completed: false
  }
];

export const reducer = (state, action) => {
  switch (action.type){
      case 'Add_Task':
          const newTodo = {
              task: action.payload,
              id: Date.now(),
              completed: false
          }
          return [...state, newTodo]
      case 'Toggle_Task':
          return state.map(task => {
              if (task.id === action.payload){
                  return {
                      ...task,
                      completed: !task.completed
                  }
              } else return task
          })
      case 'CLear_Task':
          return state.filter(task => !task.completed)
      default:
          return state;
  }
}