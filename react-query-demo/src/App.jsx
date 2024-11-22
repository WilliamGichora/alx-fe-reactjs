import {QueryClientProvider,QueryClient} from 'react-query'
import './App.css'
import PostsComponent from './components/PostsComponent'

function App() {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <PostsComponent/>
    </QueryClientProvider>
  )
}

export default App
