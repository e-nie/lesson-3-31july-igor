import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilterValuesType} from './App';
import Button from "./Button";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void

}


export function Todolist(props: PropsType) {
    const [title, setTitle] = useState('')


    const tsarFunctionHandler = (value: FilterValuesType) => {
        props.changeFilter(value)
    }

    const removeTaskHandler = (taskId: string) => {
        props.removeTask(taskId)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            taskHandler()
        }
    }

    const addTaskHandler = () => {
        // props.addTask(title)
        // setTitle('')
        taskHandler()
    }

    const taskHandler = () => {
        props.addTask(title)
        setTitle('')
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value = {title} onChange = {onChangeHandler}
                   onKeyPress = {onKeyPressHandler}
            />
            <Button name = '+' callback = {addTaskHandler}/>
        </div>
        <ul>
            {
                props.tasks.map(t => {
                        // const removeTaskHandler = () => {
                        //     props.removeTask(t.id)
                        // }
                        return (
                            <li key = {t.id}>
                                <input type = "checkbox" checked = {t.isDone} />
                                <span>{t.title}</span>
                                <Button name='x' callback = {() => removeTaskHandler(t.id)}/>x

                            </li>
                        )
                    }
                )
            }
        </ul>
        <div>
            <Button name = 'all' callback = {() => tsarFunctionHandler('all')} />
            <Button name = 'active' callback = {() => tsarFunctionHandler('active')} />
            <Button name = 'completed' callback = {() => tsarFunctionHandler('completed')} />
        </div>
    </div>
}
