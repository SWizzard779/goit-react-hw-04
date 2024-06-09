import { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar'
import { fetchPhotosByQuery } from '/Users/sofia/Documents/GitHub/goit-react-hw-04/gallery-api';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { Toaster } from 'react-hot-toast';
import ImageModal from '../ImageModal/ImageModal';
import './App.module.css';

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [totalPages, setTotalPages] = useState(1);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState('');
  const [modalImageAlt, setModalImageAlt] = useState('');

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    async function fetchPhotos() {
      setError(null);
      setLoading(true);
      try {
        const { results, total_pages } = await fetchPhotosByQuery(
          searchQuery,
          page
        );
        if (total_pages === 0) {
          throw new Error(
            'Sorry, there are no images matching your search query'
          );
        }
        setTotalPages(total_pages);
        setPhotos(prevPhotos => {
          return [...prevPhotos, ...results];
        });
      } catch (error) {
        setError(`${error.message}. Please try again!`);
      } finally {
        setLoading(false);
      }
    }
    fetchPhotos();
  }, [page, searchQuery]);

  const handleSearch = query => {
    setPhotos([]);
    setSearchQuery(query);
    setPage(1);
    setTotalPages(1);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  // =============modal==============

  function openModal(imgUrl, alt) {
    setIsOpen(true);
    setModalImageSrc(imgUrl);
    setModalImageAlt(alt);
  }

  function closeModal() {
    setIsOpen(false);
    setModalImageSrc('');
    setModalImageAlt('');
  }

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {photos.length > 0 && <ImageGallery items={photos} onClick={openModal} />}
      {loading && <Loader />}
      {error && !loading && <ErrorMessage>{error}</ErrorMessage>}
      {page === totalPages && photos.length > 0 && (
        <p
          style={{
            fontSize: 'medium',
            marginBottom: 12,
            textAlign: 'center',
          }}
        >
          We`re sorry, there are no more images to load!
        </p>
      )}
      {page < totalPages && !loading && photos.length > 0 && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        modalImageUrl={modalImageSrc}
        modalImageAlt={modalImageAlt}
      />
      <Toaster />
    </div>
  );
};

export default App;