import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux';
import ListItem from "../components/ListItem";
import {
  add, remove, getFavorite
} from '../redux/favoriSlice';
import { toObject } from '../utils/func';


const List = response => {
  const router      = useRouter()
  const dispatch    = useDispatch();
  const favoriList  = toObject(useSelector(getFavorite), 'imdbID');
  const addFavori = (props) => dispatch(add(props))
  const removeFavori = (props) => dispatch(remove(props))

  

  return <>{  
    Array.isArray(response?.data) && 
    response?.data.length > 0 && 
      response.data.map((props, index) =>  
        <ListItem 
          key={index} {...props} 
          addFavori={addFavori} 
          removeFavori={removeFavori} 
          status={Object.keys(favoriList).includes(props.imdbID)}
          onShow={router.query.imdbID === props.imdbID}
        />
      )

  }</>
};

export default List;
