import { useSelector, useDispatch } from 'react-redux';
import { FormRowSelect, FormRow } from '.';
import { handleChange, clearFilters } from '../features/allJobs/allJobsSlice';
import Wrapper from '../assets/wrappers/SearchContainer';

const SearchContainer = () => {
  const { isLoading, search, searchStatus, searchType, sort, sortOptions } =
    useSelector((store) => store.allJobs);
  const { jobTypeOptions, statusOptions } = useSelector((store) => store.job);
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    if (isLoading) return;
    dispatch(handleChange({ name: e.target.name, value: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(clearFilters());
  };
  return (
    <Wrapper>
      <form className='form'>
        <h4>Search Form</h4>
        <div className='form-center'>
          <FormRow
            type='text'
            name='search'
            value={search}
            handleChange={handleSearch}
          />
          <FormRowSelect
            labelText='status'
            name='searchStatus'
            value={searchStatus}
            list={['all', ...statusOptions]}
          />
          <FormRowSelect
            labelText='type'
            name='searchType'
            value={searchType}
            handleChange={handleSearch}
            list={['all', ...jobTypeOptions]}
          />
          <FormRowSelect
            name='sort'
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
          />
          <button
            className='btn btn-block btn-danger'
            disabled={isLoading}
            onClick={handleSubmit}
          >
            Clear Filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default SearchContainer;
