import { useForm } from 'react-hook-form';

function App() {
  const { register, formState: { errors } } = useForm({
    mode: 'all'
  });

  console.log(errors);

  const obj = {
    title: 'First name',
    id: 'firstName'
  }

  return (
    <div className="App">
      <form>
        <div>
          First name
          <input
            {...obj}
            type="text"
            {...register('firstName', { required: true, minLength: 4 })}
          />
          {
            errors?.firstName?.type === 'required' && 'First name is required'
          }
          {
            errors?.firstName?.type === 'minLength' && 'First name should have 4 characters'
          }
        </div>
        <div>
          Last Name
          <input
            type="text"
            {...register('lastName', { required: true })}
          />
        </div>
        <div>
          Email
          <input
            type="text"
            {...register('email', { required: true })}
          />
        </div>
      </form>
    </div>
  );
}

export default App;
