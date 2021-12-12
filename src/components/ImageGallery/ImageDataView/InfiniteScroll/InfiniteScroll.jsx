import InfiniteScroll from 'react-infinite-scroll-component';

export default function InfiniteScrl({ imagesArray, loadMore }) {
  return (
    <InfiniteScroll
      dataLength={imagesArray.length}
      next={loadMore}
      hasMore={true}
    />
  );
}
