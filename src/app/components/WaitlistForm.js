// components/WaitlistForm.js
export default function WaitlistForm() {
    return (
      <div className="flex justify-center mt-10">
        <form className="flex space-x-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-300 p-3 rounded-md w-80 focus:outline-none"
          />
          <button type="submit" className="bg-gray-900 text-white px-6 py-3 rounded-md">
            Join the waitlist
          </button>
        </form>
      </div>
    );
  }
  