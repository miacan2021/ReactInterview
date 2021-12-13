import { useContext } from 'react'
import { SampleConext } from './App'

const ComponentD = () => {
    const contextText = useContext(SampleConext)
    return (
        <div>
        <hr />
         <h1>Here is D.</h1>
         <p>{contextText}</p>
        </div>
    )
}

export default ComponentD
