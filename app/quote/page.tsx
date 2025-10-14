export default function RequestQuote() {
  return (
    <main className='min-h-screen flex items-center justify-center px-6 py-16'>
      <section className='w-full max-w-2xl border border-gray-100 rounded-2xl shadow-md p-10'>
        <div className='text-center mb-8'>
          <h1 className='text-4xl font-bold text-[#ff6600] mb-3'>
            Request a Quote
          </h1>
          <p className='text-base'>
            Fill out the form below, and our team will get back to you with a
            customized quote for your project.
          </p>
        </div>
        <form className='space-y-6'>
          <div>
            <label htmlFor='name' className='block text-sm font-medium mb-1'>
              Full Name
            </label>
            <input
              id='name'
              type='text'
              required
              placeholder='Enter your full name'
              className='w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ff6600]'
            />
          </div>
          <div>
            <label htmlFor='email' className='block text-sm font-medium mb-1'>
              Email Address
            </label>
            <input
              id='email'
              type='email'
              required
              placeholder='Enter your email'
              className='w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ff6600]'
            />
          </div>
          <div>
            <label htmlFor='phone' className='block text-sm font-medium mb-1'>
              Phone Number
            </label>
            <input
              id='phone'
              type='tel'
              required
              placeholder='Enter your phone number'
              className='w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ff6600]'
            />
          </div>
          <div>
            <label htmlFor='details' className='block text-sm font-medium mb-1'>
              Project Details
            </label>
            <textarea
              id='details'
              required
              rows={5}
              placeholder='Describe your project goals, requirements, and timeline...'
              className='w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ff6600]'
            ></textarea>
          </div>
          <button
            type='submit'
            className='w-full bg-[#ff6600] text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-all'
          >
            Submit Request
          </button>
        </form>
      </section>
    </main>
  );
}
