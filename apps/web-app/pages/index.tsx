import { Provider } from 'react-redux';
import styles from './index.module.scss';
import { Landing } from '@rentling/fr-shared';
import {store} from '../../../libs/fr-shared/src/store/store'

export function Index() {

  return (
    <Provider store={store}>
      <Landing />
    </Provider>
  );
}

export default Index;
