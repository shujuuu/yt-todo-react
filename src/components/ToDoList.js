import React from "react";
import ToDoForm from './ToDoForm'
import ToDo from './ToDo'

/*
toDoList MVC
1. add todo
2. display todo
3. cross off todo
4. show number of active todo
5. filter all/active/complete
6. delete todo
7. delete all complete
    7.1 only show if at least one is complete
8. button to toggle all on/off
*/

class ToDoList extends React.Component {
    //keep all todos here
    state = {
        todos: [],
        //5. for filtering
        todosToShow: "all",
        //8. toggle all complete
        toggleAllComplete: true
    }

    //add a todo function
    //add the todo user created into the todo array in state
    addTodo = (todo) => {
        //use .push mutates the array
        //not a good way to do it
        // this.state.todos.push(todo);

        //create copy of that array instead
        //... syntax > create a copy
        //example: add new todo, copy the todos array
        const newTodos = [todo, ...this.state.todos]
        this.setState({
            todos: newTodos
        })
    }

    // 3. cross off todo with toggleComplete function
    toggleComplete = (id) => {
        //loop through all todos, if id matches..
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    console.log(todo)
                    //suppose to update
                    return {
                        //normal way
                        // id: todo.id,
                        // text: todo.text,
                        // isComplete: !todo.isComplete

                        //optimize way
                        //... can be use for both function and value
                        //keep everything except isComplete overwrite
                        ...todo,
                        isComplete: !todo.isComplete
                    }
                } else {
                    return todo;
                }

            })
        })
    }

    //5. filter
    updateTodoToShow = (valueFromButton) => {
        this.setState({
            todosToShow: valueFromButton
        })
    }


    //6. delete item
    //filter all todos
    //instead of updating todo, remove todo from the state with filter function
    //filter keeps item when condition is true
    handleDelete = (id) => {
        console.log("deleting..." + id);
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }


    //7. delete all completed
    handleDeleteAllComplete = () => {
        this.setState({
            todos: this.state.todos.filter(todo => !todo.isComplete)
        })
    }

    //8. handle toggle on / off function
    handleToggleAllOnOff = () => {
        //iterate everything inside the array
        //change the isComplete to the value of toggleAllComplete boolean
        // this.setState({
        //     todos: this.state.todos.map(todo => ({
        //         ...todo,
        //         isComplete: this.state.toggleAllComplete
        //     })),
        //     toggleAllComplete: !this.state.toggleAllComplete
        // })


        // ^^ whenever you are using state within the this.setState
        // you can also pass in a function instead of passing object into the setState
        // because first parameter of setState is state
        // this.setState is asynchronous, therefore correct assets for state
        this.setState((state) => ({
            todos: state.todos.map(todo => ({
                ...todo,
                isComplete: state.toggleAllComplete
            })),
            toggleAllComplete: !state.toggleAllComplete
        }))
    }

    render() {
        //5. 
        let todos = [];
        if (this.state.todosToShow === "all") {
            todos = this.state.todos;
        } else if (this.state.todosToShow === "active") {
            todos = this.state.todos.filter(todo => !todo.isComplete)
        } else if (this.state.todosToShow === "complete") {
            todos = this.state.todos.filter(todo => todo.isComplete)
        }


        return (
            <div>
                <ToDoForm onSubmit={this.addTodo} />

                {/* 1. displaying todos */}
                {/* {JSON.stringify(this.state.todos)} */}
                {/* user map function instead */}
                {/* {this.state.todos.map(todo => (<div key={todo.id}>{todo.text}</div>))} */}

                {/* 2. have todo as separate component so it could have own function*/}
                {/* {this.state.todos.map(todo => (
                    <ToDo key={todo.id} text={todo.text} />
                ))} */}

                {/* 3. toggleComplete = a prop that we are passing that is a fucntion*/}
                {/* use lambda function => to pass in a parameter, todo.id, that is in the map*/}
                {/* {this.state.todos.map(todo => (
                    <ToDo
                        key={todo.id}
                        toggleComplete={() => this.toggleComplete(todo.id)}
                        // text={todo.text}
                        // ^^ instead of text, pass in todo
                        todo={todo}
                    />
                ))} */}


                {/* 4. show active todos */}
                {/* filter function keeps count if condition is true */}
                {/* remove all todos from the list that are not complete and return length */}
                <div>
                    <button onClick={() => this.updateTodoToShow("all")} > all</button>
                    <button onClick={() => this.updateTodoToShow("active")}>active</button>
                    <button onClick={() => this.updateTodoToShow("complete")}>complete</button>
                </div>
                <div>
                    To-Dos left: {this.state.todos.filter(todo => !todo.isComplete).length}
                </div>


                {/* 7. show button with delete all completed function */}
                {/* <button onClick={() => this.handleDeleteAllComplete()}>Delete ALL complete.. proceed with caution</button> */}

                {/* ^^ conditionally render the button, only show if there is completed todos*/}
                {/* {this.state.todos.filter(todo => todo.isComplete).length ?
                    <button onClick={() => this.handleDeleteAllComplete()}>Delete ALL complete.. proceed with caution</button>
                    : null
                } */}

                {/* ^^ instead of checking all array, just check if there is atleast one  */}
                {/* use some function, benefit is  it exits early without going through all arr*/}
                {this.state.todos.some(todo => todo.isComplete) ?
                    <button onClick={() => this.handleDeleteAllComplete()}>Delete ALL complete.. proceed with caution</button>
                    : null
                }


                {/* 8. toggle on/off */}
                <button onClick={this.handleToggleAllOnOff}>Toggle all: {`${this.state.toggleAllComplete}`}</button>

                {/* 5. filtering */}
                {/* instead of passing this.state.todos, pass the array todo */}
                {todos.map(todo => (
                    <ToDo
                        //6. map the onDelete function from ToDo child
                        key={todo.id}
                        onDelete={() => this.handleDelete(todo.id)}
                        toggleComplete={() => this.toggleComplete(todo.id)}
                        todo={todo}
                    />
                ))}
            </div>
        )
    }
}


export default ToDoList;