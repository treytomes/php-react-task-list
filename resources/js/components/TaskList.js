import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Grid, Header, Input, Label, List, Message, Segment, Table } from 'semantic-ui-react';

class TaskList extends Component {
    constructor () {
        super()
        this._isMounted = false;
        this.state = {
            tasks: null,
            isLoadingTasks: null,
            newTaskName: ""
        }
    }

    componentDidMount () {
        /*axios.get('/api/task').then(response => {
            this.setState({
                tasks: response.data
            });
        });*/
        this._isMounted = true;
        this.getTasks();
    }

    componentWillUnmount () {
        this._isMounted = false;
    }

    async getTasks () {
        try {
            this._isMounted && this.setState({ isLoadingTasks: true });
            const response = await fetch('/api/task');
            const tasksList = await response.json();
            this._isMounted && this.setState({ tasks: tasksList.data, isLoadingTasks: false});
        } catch (err) {
            this._isMounted && this.setState({ isLoadingTasks: false });
            console.error(err);
        }
    }

    async createNewTask() {
        //alert("Creating a new task: " + this.state.newTaskName);
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ "name": this.state.newTaskName })
        }
        fetch("/api/task", requestOptions)
            .then(response => response.json());
            //.then(data => this.setState({ tasks: this.state.tasks + data }));

        this.setState({newTaskName: ""});

        await this.getTasks();
    }
    
    async deleteTask(id) {
        const requestOptions = {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            //body: JSON.stringify({ "id": id })
        }
        fetch("/api/task/" + id, requestOptions)
            .then(response => response.json());
            //.then(data => this.setState({ tasks: this.state.tasks + data }));

        this.setState({newTaskName: "", tasks: this.state.tasks.filter(function(value, index, arr) { return value.id != id })});


        //await this.getTasks();
    }

    render () {
        return ( <Segment>
            <Label attached="top">All tasks</Label>

            <Input focus placeholder='New task...' value={this.state.newTaskName} onChange={(evt) => this.setState({newTaskName: evt.target.value})}
                   action={{ color: 'blue', content: 'Create Task', onClick: () => this.createNewTask() }} />

            {this.state.isLoadingTasks && <Message info header="Loading tasks..." />}

            <Container>
                {this.state.tasks && <Table striped> <Table.Body>
                    {this.state.tasks.map(task => ( <Table.Row key={task.id}>
                        <Table.Cell>
                            {task.name}
                        </Table.Cell>
                        <Table.Cell>
                            <Button negative onClick={(evt) => this.deleteTask(task.id)}>Delete</Button>
                        </Table.Cell>
                    </Table.Row> ))}
                </Table.Body> </Table>}
            </Container>
        </Segment> )
    }
}

export default TaskList
