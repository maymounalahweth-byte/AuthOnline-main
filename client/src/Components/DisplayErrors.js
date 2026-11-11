import {useSelector} from 'react-redux' 
import Alert from 'react-bootstrap/Alert';

const DisplayErrors = () => {

    const tabErrors = useSelector(state => state.ErrorsReducer)

  return (
    <div>
        {
            tabErrors.map((el,i,t)=>  <Alert variant='danger'>
           {el.msg}
        </Alert>)
        }
    </div>
  )
}

export default DisplayErrors