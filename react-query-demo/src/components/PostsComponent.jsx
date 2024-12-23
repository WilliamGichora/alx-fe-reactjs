import { useQuery } from 'react-query';

// Function to fetch data
const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

function PostsComponent() {
    const {
        data,
        isLoading,
        isError,
        error,
        refetch,
        isFetching,
    } = useQuery('posts', fetchPosts, {
        staleTime: 5000,
        cacheTime: 10000, 
        refetchOnWindowFocus: false,
        keepPreviousData: true, // Retains old data while new data is loading
    });

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h1>Posts</h1>
            <button onClick={refetch} disabled={isFetching}>
                {isFetching ? 'Fetching...' : 'Refetch Posts'}
            </button>
            <ul>
                {data.map(post => (
                    <li key={post.id}>
                        <strong>{post.title}</strong>: {post.body}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PostsComponent;
