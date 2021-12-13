import { useContext } from 'react'
import { SampleConext } from './App'

const ComponentC = () => {
    const contextText = useContext(SampleConext)
    return (
        <div>
            <hr />
             <h1>Here is C.</h1>
             <p>{contextText}</p>
        </div>
    )
}

export default ComponentC
