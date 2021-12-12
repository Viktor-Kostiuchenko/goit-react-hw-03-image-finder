import SearchForm from './SearchForm';
import s from './Searchbar.module.css';

export default function SearchBar({ onSubmit }) {
  return (
    <header className={s.searchbar}>
      <SearchForm onSubmit={onSubmit}></SearchForm>
    </header>
  );
}
