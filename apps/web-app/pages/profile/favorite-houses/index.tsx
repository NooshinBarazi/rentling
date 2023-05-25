import { GetServerSideProps } from 'next';
import { fetchFavorite } from 'libs/fr-shared/src/store/features/favoriteSlice';
import {
  EmptyPageFavoriteHouses,
  FavoriteHouses,
  ProfileTemplate,
  RootState,
  wrapper,
  useAuth
} from '@rentling/fr-shared';
import { useSelector } from 'react-redux';


export const getServerSideProps: GetServerSideProps  = wrapper.getServerSideProps(
  (store) => 
    async({params})=>{

// const auth = useAuth()
// console.log('auth',auth)
      await store.dispatch(fetchFavorite())
      const {favorites} = store.getState()
      return{
        props:{
           favorites
        }
      }
    }
)

export default function FindFavoriteHouses({favorites}) {
  console.log(favorites)
  const favoritehosue = useSelector((state: RootState)=> state.favorites)
 
  if ((favorites.length === 0) && favoritehosue.length === 0) {
    return <EmptyPageFavoriteHouses />;
  }
  return <FavoriteHouses FavoriteHouse={favorites}/>;
}

FindFavoriteHouses.PageLayout = ProfileTemplate;

