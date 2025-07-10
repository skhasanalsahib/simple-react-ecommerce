import { useNavigate } from "react-router";
import Button from "../components/Button/Button";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <main>
      <div className="container min-h-[80vh] flex flex-col items-center justify-center">
        <h2 className="text-6xl font-bold mb-2">404</h2>
        <p className="text-xl font-medium text-gray-500">Page Not Found</p>
        <Button onClick={() => navigate(-1)} style={"mt-4 px-3 py-2 text-lg"}>
          Go Back
        </Button>
      </div>
    </main>
  );
};

export default PageNotFound;
