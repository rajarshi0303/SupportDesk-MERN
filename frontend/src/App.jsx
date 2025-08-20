import AppRoutes from "./routes/AppRoutes";
import Navbar from "./layouts/Navbar";

export default function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <AppRoutes />
      </main>
    </div>
  );
}
