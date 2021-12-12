import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem';
// import Button from './Button';
import InfiniteScrl from './InfiniteScroll';
import s from './ImageDataView.module.css';

export default function ImageDataView({ imagesArray, openModal, loadMore }) {
  return (
    <>
      <ul className={`${s.gallery} ${s.grid}`}>
        {imagesArray.map(({ id, webformatURL, largeImageURL, tags }) => (
          <li key={id} className={`${s.item} ${s.gridItem}`}>
            <ImageGalleryItem
              smallImg={webformatURL}
              largeImg={largeImageURL}
              alt={tags}
              openModal={openModal}
            ></ImageGalleryItem>
          </li>
        ))}
      </ul>
      <InfiniteScrl
        imagesArray={imagesArray}
        loadMore={loadMore}
      ></InfiniteScrl>

      {/* if i wanna use a button instead of infinite scroll */}
      {/* {imagesArray.length > 1 && <Button onClick={loadMore}></Button>} */}
    </>
  );
}

ImageDataView.propTypes = {
  imagesArray: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
  loadMore: PropTypes.func.isRequired,
};
