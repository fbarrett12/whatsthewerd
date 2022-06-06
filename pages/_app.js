import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { wrapper, store } from "../redux/store";
import { useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { getSlangs } from '../redux/actions/slangAction'
import { getChoices } from '../redux/actions/choiceAction'
function MyApp({ Component, pageProps }) { 
const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSlangs())
    dispatch(getChoices())
  }, [dispatch])

  return (
    <>
        <Provider store={store}>
           <Component {...pageProps} />
        </Provider>
    </>
  
  )
}

export default wrapper.withRedux(MyApp)
