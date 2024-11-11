import Form from './components/Form';

export default function Home() {
  return (
    <main className='flex flex-col justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4'>
      <div className='w-[90%] md:w-[auto]'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold text-gray-800 dark:text-gray-100 mb-2'>
            Health App
          </h1>
          <p className='text-lg text-gray-600 dark:text-gray-300'>
            Welcome, open your heart and write down your thoughts
          </p>
        </div>
        <div className='w-full max-w-md'>
          <Form />
        </div>
      </div>
    </main>
  );
}
