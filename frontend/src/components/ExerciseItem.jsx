import { useDispatch } from "react-redux"
import {deleteExercise} from '../features/exercises/exerciseSlice'

function ExerciseItem({exercise}) {

    const dispatch = useDispatch()
    return (
        <div className="exercise">
            <div>
               {new Date (exercise.createdAt).toLocaleString('en-US')} 
            </div>
            <h2>{exercise.text}</h2>
            <button onClick= {() => dispatch(deleteExercise(exercise._id))} className="close">X</button>
        </div>
    )
}

export default ExerciseItem