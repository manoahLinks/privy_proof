import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import { Main } from './layout';
import { ContractDraft, LandingPage, NewContract } from './pages';


function App() {
  const router = createBrowserRouter([
    {
      path: `/`,
      element: <Main/>,
      children: [
        {
          index: true,
          element: <LandingPage/>
        },
        {
          path: 'create-identity',
          element: <NewContract/>
        },
        {
          path: 'get-started',
          element: <NewContract/>
        },
        {
          path: 'draft-with-ai',
          element: <ContractDraft/>
        }
      ]
    }
  ])

  return (

    <>
      <RouterProvider router={router}/>
    </>

  );
}

export default App;
