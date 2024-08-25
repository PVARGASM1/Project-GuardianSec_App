
// import styles from '../Login/Login.module.css'
import { useState } from "react"


const Register = () => {

  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  }

  // const router = useRouter();
  // //localhost:8080/api/user

  // const handleSubmitRegister = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const fetchRegister = {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify(newUser)
  //     }
  //     const response = await fetch('http://localhost:8080/api/user', fetchRegister)
  //     const userRegister = await response.json()

  //     const user = userRegister.user

  //     localStorage.setItem('name', user.name);
  //     localStorage.setItem('email', user.email);
  //     localStorage.setItem('password', user.password);
      
  //     router.push(`/profile?name=${user.name}&email=${user.email}`)

  //   } catch(error) {
  //     console.error(error);
  //   }
  // }

  return (
    <div className={styles.background}>
    <div className={styles.card}>
    
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-4 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img 
              className="mx-auto w-45 h-40 w-auto"
              src={'/LogoSinBack.png'}
              priority={false}
              alt='logoGS'
              width={auto}
              height={auto}
            />
          <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Crea tu cuenta
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form 
            className="space-y-6"
            action="#"
            onSubmit={handleSubmitRegister}
          >

          <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Nombre empresa o nombre completo
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="name"
                  placeholder=" Nombre empresa o persona natural"
                  autoComplete="name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={newUser.name}
                  onChange={handleChange}
                />
              </div>
            </div>



            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder=" test@guardian.com"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={newUser.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder=" *******"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={newUser.password}
                  onChange={handleChange}
                />
              </div>

              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Contraseña
                </label>

              </div>

            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Crear cuenta
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            <Link href={'/login'} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Ingresa a tu cuenta
            </Link>
          </p>
        </div>
    </div>

    </div>
  </div>
  )
}

export default Register;
