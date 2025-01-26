
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#fff] p-6 text-center">
      <div className="text-6xl mb-4">
        ⚠️ {/* Warning Icon */}
      </div>
      <h1 className="text-3xl font-bold mb-2">Something Went Wrong</h1>
      <p className="text-lg">
        We couldn't process your request. Please try again later.
      </p>
      <Link to='/'><button 
        className="mt-6 px-6 py-2 bg-[#9538E2] text-white rounded-md  transition"
        
      >
        Back
      </button></Link>
    </div>
  );
}

export default Error;
