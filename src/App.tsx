import Header from './components/organisms/Header';
import { CategoryProvider } from './contexts/CategoryContext';
import AppRouter from './routes/AppRouter';

export default function App() {
  return (
    // <div className="bg-custom-beach bg-cover bg-center min-h-screen">
    <div className="bg-cover bg-center min-h-screen">
      <CategoryProvider>
        <Header />
        <main className="p-4">
          <AppRouter />
        </main>
      </CategoryProvider>
    </div>
  );
}
