import { useSelector, useDispatch } from 'react-redux'

const useMessage = () => {
  const message = useSelector(state => state.message)
  const dispatch = useDispatch()

  const changeMessage = (message) => {
    const value = message.slice(1, message.length)
    dispatch({ type: 'STORE_MESSAGE', value: value })
  }

  return {
    message,
    changeMessage
  }
}

export default useMessage