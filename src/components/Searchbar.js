import { useForm } from 'react-hook-form';

const Searchbar = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();

  const handleSearch = (data) => {
    onSubmit(data.searchQuery);
  };

  return (
    <form onSubmit={handleSubmit(handleSearch)}>
      <input type="text" {...register('searchQuery')} placeholder="Search Pokémon" />
      <button type="submit">Search</button>
    </form>
  );
};

export default Searchbar;