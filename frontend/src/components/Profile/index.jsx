
import { useState } from "react";

const Profile = () => {

  // const router = useRouter();
  const { name, email} = router.query;
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });
  

  const handleUpdateUser = async (e) => {
    e.preventDefault();

    try {
      const fetchUpdateUser = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
  
        body: JSON.stringify(formData)
      }

      const responseUpdate = await fetch(`http://localhost:8080/api/user/${decodedToken.id}`, fetchUpdateUser)
      const updateData = await responseUpdate.json()
      
    } catch (error) {
      console.error(error)
  }
 }
  return (

    <div>
        <form 
          className="m-10 p-8 border-2 rounded-lg "
          onSubmit={handleUpdateUser}
        >
          
      <div className="space-y-12 space-x-12 ">

        <div className="border-b border-gray-900/10 pb-12">

          <h2 className="text-2xl text-center font-bold leading-7 text-sky-900">Editar Perfil</h2>


          <div className="mt-10 grid grid-cols-1 flex content-center gap-x-6 gap-y-8 sm:grid-cols-8">
          <div className="sm:col-span-4">
              <label htmlFor="empresa" className="block text-base font-medium leading-6 text-gray-900">
                Nombre empresa o nombre completo 
              </label>
              <div className="mt-2">
                <input
                  value={name}
                  id="empresa"
                  name="empresa"
                  type="empresa"
                  placeholder=" Nombre empresa o nombre completo"
                  autoComplete="empresa"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-base font-medium leading-6 text-gray-900">
                Email 
              </label>
              <div className="mt-2">
                <input
                  value={email}
                  type="text"
                  name="email"
                  id="email"
                  placeholder=" Email"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>


            <div className="sm:col-span-4">
              <label htmlFor="phone" className="block text-base font-medium leading-6 text-gray-900">
                Teléfono
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder=" Teléfono"
                  autoComplete="phone"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={formData.phone}
                  // onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>
						
						<div className="sm:col-span-4">
              <label htmlFor="address" className="block text-base font-medium leading-6 text-gray-900">
                Dirección
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder=" Dirección"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-x-6">
        <button
          type="submit"
          className="rounded-md bg-sky-800 px-3 py-2 text-lg font-bold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Actualizar
        </button>
        <button type="button" className="text-lg font-bold leading-6 text-gray-900">
          Cancelar
        </button>
      </div>
      </form>

    </div>
  )
}

export default Profile;