import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import Button from './Button';
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

      {imagesArray.length > 1 && <Button onClick={loadMore}></Button>}
    </>
  );
}
