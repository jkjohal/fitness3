import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import ExerciseForm from '../components/ExerciseForm'
//import Spinner from '../components/Spinner'
import { getExercises, reset } from '../features/exercises/exerciseSlice'
import ExerciseItem from '../components/ExerciseItem'

function Dashboard() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user} = useSelector((state) => state.auth)
    const {exercises, isLoading, isError, message} = useSelector((state) => state.exercises)

    useEffect(() => {
        if(isError) {
            console.log(message);
        }

        if(!user) {
            navigate('/login')
        }

        dispatch(getExercises())

        return () => {
        dispatch(reset())
    }
    }, [user, navigate, isError, message, dispatch])

    //if (isLoading) {
      //  return <Spinner />
   // }

    return (
        <>
        <section className='heading'>
            <h1>Welcome {user && user.name} </h1>
            <p>Workout Dashboard</p>
        </section>

        <ExerciseForm />

        <section className= "content">
            { exercises.length > 0 ? (
                <div className= "exercises">
                    {exercises.map((exercise) => (
                        <ExerciseItem key = {exercise._id} exercise={exercise}/>
                    ))}
                </div>
            ) : (<h3> You have not created any workout entries</h3>) }
        </section>

        </>
    )
}

export default Dashboard