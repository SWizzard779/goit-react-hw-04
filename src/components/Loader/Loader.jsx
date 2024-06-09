import { Circles } from 'react-loader-spinner';
import css from './Loader.module.css';

export default function Loader() {
  return (
    <div className={css.loader}>
      <Circles
        height="100"
        dth="100"
        color="blue"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}