import css from './ImageCard.module.css';

export default function ImageCard({ photo, onClick }) {
  return (
    <div className={css.container}>
      <img
        onClick={() => onClick(photo.urls.regular, photo.description)}
        className={css.photo}
        src={photo.urls.small}
        alt={photo.description}
      />
    </div>
  );
}