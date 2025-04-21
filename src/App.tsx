import { LoaderContextProvider } from './contexts/loaderContext';
import { Main } from './pages/main/main';
import './app.css';
import '@/styles/text.css';

export default function App() {
  return (
    <LoaderContextProvider>
      <Main />
    </LoaderContextProvider>
  );
}
