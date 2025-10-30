import { RotateLoader } from "react-spinners";

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-[1000]">
      <RotateLoader color="currentColor" className="text-button" />
    </div>
  );
};

export default Loader;
