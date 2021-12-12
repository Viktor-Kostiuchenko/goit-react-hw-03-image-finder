import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import ScrollToTop from 'react-scroll-up';
import ImageGallery from '../ImageGallery';
import Modal from '../Modal';
import Searchbar from '../Searchbar';
import 'react-toastify/dist/ReactToastify.css';
import s from './App.module.css';

export default class App extends Component {
  state = {
    imageName: '',
    showModal: false,
    modalImg: {
      src: '',
      alt: '',
    },
  };

  onFormSubmit = imageName => {
    this.setState({ imageName });
  };

  toggleModal = (src, alt) => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      modalImg: {
        src,
        alt,
      },
    }));
  };

  render() {
    const { imageName, showModal, modalImg } = this.state;
    return (
      <div className={s.app}>
        <Searchbar onSubmit={this.onFormSubmit} />
        <ImageGallery imageName={imageName} openModal={this.toggleModal} />
        {showModal && <Modal onClose={this.toggleModal} modalImg={modalImg} />}
        <ToastContainer autoClose={3000} />
        <ScrollToTop
          showUnder={160}
          duration={500}
          style={{ right: 50, bottom: 42 }}
        >
          <div className={s.toTop}></div>
        </ScrollToTop>
      </div>
    );
  }
}
