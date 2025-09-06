import toast from "react-hot-toast";
import { Copy } from "lucide-react";

const SharePaste = ({ link, onClose }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(link);
    toast.success("Copy Successfully")
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50 font-serif">
      <div className="bg-black text-white p-6 rounded-xl shadow-lg w-96 relative border-1">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-white"
        >
          ✕
        </button>

        <h2 className="text-lg font-semibold mb-2">Share link</h2>
        <p className="text-sm text-gray-400 mb-3">
          Anyone who has this link will be able to view this.
        </p>

        {/* Link input */}
        <div className="flex items-center rounded-md overflow-hidden">
          <input
            type="text"
            value={link}
            readOnly
            className="flex-1 px-3 py-2 bg-black text-gray-300 border-1"
          />
          <button
            onClick={copyToClipboard}
            className="bg-black px-3 py-2"
          >
            <Copy size={20} color="#ffffff" strokeWidth={1.25} className='cursor-pointer'/>
          </button>
        </div>

     
      </div>
    </div>
  );
};

export default SharePaste;
