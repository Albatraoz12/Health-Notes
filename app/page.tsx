import Form from './components/Form';

export default function Home() {
  return (
    <main className='flex flex-col justify-around items-center gap-6 mt-10'>
      <div className='text-center'>
        <h1 className='text-3xl mb-2'>Health App</h1>
        <p>Welcome, open your hearth and write down your thoughts</p>
      </div>
      <div>
        <Form />
      </div>
    </main>
  );
}
