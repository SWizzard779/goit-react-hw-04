import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

export default function ImageGallery({ items, onClick }) {
  return (
    <ul className={css.gallerylist}>
      {items.map(item => {
        return (
          <li key={item.id} className={css.gallerylist_item}>
            <ImageCard photo={item} onClick={onClick} />
          </li>
        );
      })}
    </ul>
  );
}