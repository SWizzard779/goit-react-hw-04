import css from './LoadMoreBtn.module.css';

export default function LoadMoreBtn({ onClick }) {
  return (
    <button className={css.Loadmore_btn} type="submit" onClick={onClick}>
      Load more
    </button>
  );
}