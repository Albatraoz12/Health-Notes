import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex flex-col h-full justify-center items-center gap-3'>
      <div>
        <h1>Health App</h1>
        <p>Welcome, open your hearth and write down your thoughts</p>
      </div>
      <div>
        <form className='flex flex-col justify-center items-center gap-4'>
          <div>
            <label htmlFor='username' className='px-3'>
              Username
            </label>
            <input
              type='text'
              id='username'
              name='username'
              placeholder='John@doe.com'
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
              placeholder='*******'
            />
          </div>
          <div className='flex gap-3'>
            <button
              type='button'
              className='border-green-600 border rounded p-1 px-3'
            >
              Sign in
            </button>
            <button type='button'>Sign up</button>
          </div>
        </form>
      </div>
    </main>
  );
}
