import React, { Component } from 'react';
import { toast } from 'react-toastify';
import ImageDataView from './ImageDataView';
import ImagePending from './ImagePending';
import imagesAPI from '../../services/imagesApi';
import s from './ImageGallery.module.css';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default class ImageGallery extends Component {
  state = {
    imagesArray: [],
    page: 1,
    status: Status.IDLE,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imageName;
    const nextname = this.props.imageName;
    const page = this.state.page;

    if (prevName !== nextname) {
      this.setState({ status: Status.PENDING });

      setTimeout(() => {
        imagesAPI
          .fetchImages(nextname, page)
          .then(images => {
            if (images.hits.length === 0 && images.totalHits === 0) {
              toast.error('nothing found');
              return;
            }
            this.setState({
              imagesArray: images.hits,
              status: Status.RESOLVED,
            });
          })
          .catch(error => this.setState({ error, status: Status.REJECTED }));

        this.updatePage();
      }, 2000);
    }
  }

  loadMore = () => {
    const nextname = this.props.imageName;
    const page = this.state.page;

    this.updatePage();
    imagesAPI.fetchImages(nextname, page).then(newImages => {
      this.setState(({ imagesArray }) => ({
        imagesArray: [...imagesArray, ...newImages.hits],
      }));
    });
  };

  updatePage = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  render() {
    const { imagesArray, status } = this.state;
    const { openModal } = this.props;

    switch (status) {
      case 'pending':
        return <ImagePending />;
      case 'resolved':
        return (
          <ImageDataView
            imagesArray={imagesArray}
            openModal={openModal}
            loadMore={this.loadMore}
          />
        );
      case 'idle':
        return <h2 className={s.enterData}>Enter data to search...</h2>;
      case 'rejected':
        return toast.error('Ooops');
      default:
        return <h2 className={s.enterData}>Enter data to search...</h2>;
    }
  }
}
