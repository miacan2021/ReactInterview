import { useContext } from 'react'
import { SampleConext } from './App'
import ComponentC from './ComponentC'
import ComponentD from './ComponentD'

const ComponentB = () => {
    const contextText = useContext(SampleConext)
    return (
        <div>
            <hr />
            <h1>Here is B.</h1>
            <p>{contextText}</p>
            <ComponentC />
            <ComponentD />
        </div>
    )
}

export default ComponentB
