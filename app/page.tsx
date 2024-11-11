export default function Home() {
  return (
    <main className='flex flex-col justify-around items-center gap-6 mt-10'>
      <div className='text-center'>
        <h1 className='text-3xl mb-2'>Health App</h1>
        <p>Welcome, open your hearth and write down your thoughts</p>
      </div>
      <div>
        <form className='flex flex-col justify-center items-center gap-4'>
          <div>
            <label htmlFor='username' className='px-3'>
              Username
            </label>
            <input
              type='email'
              id='username'
              name='username'
              placeholder='John@doe.com'
              className='text-black p-1 focus:outline-none align-middle'
            />
          </div>
          <div>
            <label htmlFor='password' className='px-3'>
              Password
            </label>
            <input
              type='text'
              id='password'
              name='password'
              placeholder='Password'
              className='text-black p-1 focus:outline-none align-middle'
            />
          </div>
          <div className='flex gap-3'>
            <button
              type='button'
              className='border-green-600 border rounded p-1 px-3 hover:bg-green-600 hover:text-stone-50'
            >
              Sign in
            </button>
            <button
              type='button'
              className='border-green-600 border rounded p-1 px-3 hover:bg-green-600 hover:text-stone-50'
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
