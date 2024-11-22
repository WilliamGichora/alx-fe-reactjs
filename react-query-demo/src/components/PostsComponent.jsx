import {useQuery} from 'react-query'

const fetchData = async () => {
    const response = await fetch(' https://jsonplaceholder.typicode.com/posts');
    return response.json();
}

function PostsComponent() {

    const { data, error, isLoading,isError,refetch } = useQuery('posts', fetchData,{
        staleTime: 5000,
    });

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h1>Posts</h1>
            <button onClick={refetch}>Refetch</button>
            <ul>
                {data.map(post => (
                    <li key={post.id}>
                        <strong>{post.title }</strong>{post.body}   
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PostsComponent