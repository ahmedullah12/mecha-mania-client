import MainLayout from "./components/layout/MainLayout";
import { usePageRefreshWarning } from "./hooks/usePageRefreshingWarning";

function App() {
  usePageRefreshWarning()
  return <MainLayout />;
}

export default App;
