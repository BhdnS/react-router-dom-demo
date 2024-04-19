const PostFilter = ({ postQuery, latest, setSearch }) => {
  const handleSearch = (e) => {
    const query = e.target.value
    updateSearchPost(query, latest)
  }

  const handleChecked = (e) => {
    const isLatest = e.target.checked
    updateSearchPost(postQuery, isLatest)
  }

  const updateSearchPost = (query, isLatest) => {
    const params = {}

    if (query.length) params.post = query
    if (isLatest) params.latest = true

    setSearch(params)
  }

  return (
    <form className='flex justify-center mx-auto bg-blue-900 rounded-md text-white'>
      <label className='flex items-center gap-4 p-3'>
        Search:
        <input
          className='bg-blue-900 focus:outline-none focus:ring-0'
          type='text'
          name='search'
          defaultValue={postQuery}
          onChange={handleSearch}
        />
      </label>
      <label className='flex items-center gap-4 p-3'>
        New Posts:
        <input
          defaultValue={latest}
          type='checkbox'
          name='latest'
          onChange={handleChecked}
        />
      </label>
    </form>
  )
}

export default PostFilter
