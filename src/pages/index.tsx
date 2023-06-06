// imports
import Head from "next/head"
import { useRouter } from "next/router";
import { states, departments } from '../data/formData'
import { useFormik } from "formik"
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { addEmployee } from '../utils/employeeSlice'
// import ElementModal from "@/components/Modal";
import { useModal, Modal } from "react-modal-library-thomas-thivolet"





export default function Home() {

  const { isShowing, toggle } = useModal()
  const router = useRouter()
  const dispatch = useDispatch()
  // formik logic
  const formik = useFormik({
    initialValues: {
      name: '',
      lastName: '',
      email: '',
      state: '',
      department: '',
      birthDate: '',
      startDate: '',
      street: '',
      city: '',
      zipCode: '',
    },

    // Validation logic

    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Must be 2 characters or more")
        .required('Required'),
      lastName: Yup.string()
        .min(2, "Must be 2 characters or more")
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      state: Yup.string()
        .required('Required'),
      department: Yup.string().required('Required'),
      birthDate: Yup.date().required('Required'),
      startDate: Yup.date().required('Required'),
      street: Yup.string().required('Required'),
      city: Yup.string().required('Required'),
      zipCode: Yup.number().required('Required'),
    }),

    // Submit logic
    onSubmit: (values) => {
      toggle()
      console.log("form submitted");
      console.log(values);
      dispatch(addEmployee(values))

    },
  })





  const handleClick = () => {

    router.push({ pathname: "/table" });

  }



  console.log(formik.values)

  return (
    <>

      <Head>
        <title>Home | Hr.App</title>
        <meta name="descritpion" content="generated with nextjs"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>



      <main className="h-screen items-center flex justify-center">
        <form
          onSubmit={formik.handleSubmit}
          className="bg-white flex flex-col lg:flex-row md:w-[80%] rounded-lg w-1/2 font-latoRegular"
        >
          <div className="flex-1 text-gray-700 p-10">
            <h1 className="text-3xl pb-2 font-latoBold text-red-400">Welcome to Hr.App</h1>
            <p className="text-lg text-gray-500">The ultimate platform to handle Employee database</p>
            <button
              type="button"
              onClick={handleClick}
              className="bg-red-400 text-white px-4 py-2 rounded-md font-latoBold w-full mt-5"
            >Navigate back to the Table Page</button>

            <div className="mt-6">
              {/* Name field */}
              <div className="pb-4">
                <label
                  htmlFor="name"
                  className={`block text-gray-700 text-sm font-latoBold ${formik.errors.name ? "text-red-400" : ''}  `}>
                  {formik.touched.name && formik.errors.name ? formik.errors.name : "Name"}
                </label>

                <input
                  type="text"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter your name"
                  className="w-full border-2 border-gray-200 rounded-md p-2 mt-2 focus:outline-none focus:border-red-400" />
              </div>

              {/* lastName field */}
              <div className="pb-4">
                <label
                  htmlFor="lastName"
                  className={`block text-gray-700 text-sm font-latoBold ${formik.touched.lastName && formik.errors.lastName ? "text-red-400" : ''}  `}>Lastname</label>
                <input
                  type="text"
                  name="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter your lastName"
                  className="w-full border-2 border-gray-200 rounded-md p-2 mt-2 focus:outline-none focus:border-red-400" />
              </div>


              {/* Email field */}
              <div className="pb-4">
                <label
                  htmlFor="e-mail"
                  className={`block text-gray-700 text-sm font-latoBold ${formik.touched.email && formik.errors.email ? "text-red-400" : ''}  `}>E-mail</label>
                <input type="text"
                  name="email"
                  placeholder="Enter your E-mail"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full border-2 border-gray-200 rounded-md p-2 mt-2 focus:outline-none focus:border-red-400" />
              </div>

              {/* Birthdate field */}
              <div className="pb-4">
                <label
                  htmlFor="birthDate"
                  className={`block text-gray-700 text-sm font-latoBold ${formik.touched.birthDate && formik.errors.birthDate ? "text-red-400" : ''}  `}>BirthDate</label>
                <input type="date"
                  name="birthDate"
                  placeholder="Enter your E-mail"
                  value={formik.values.birthDate}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full border-2 border-gray-200 rounded-md p-2 mt-2 focus:outline-none focus:border-red-400" />
              </div>



              {/* Startdate field */}
              <div className="pb-4">
                <label
                  htmlFor="startDate"
                  className={`block text-gray-700 text-sm font-latoBold ${formik.touched.startDate && formik.errors.startDate ? "text-red-400" : ''}  `}>StartDate</label>
                <input type="date"
                  name="startDate"
                  placeholder="Enter your E-mail"
                  value={formik.values.startDate}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full border-2 border-gray-200 rounded-md p-2 mt-2 focus:outline-none focus:border-red-400" />
              </div>


              {/* Address field */}
              <div className="pb-4">
                <fieldset className="border-2 border-solid border-red-400 rounded-lg p-3">
                  <legend className="p-1">Address</legend>

                  <label
                    htmlFor="street"
                    className={`block text-gray-700 text-sm font-latoBold ${formik.touched.street && formik.errors.street ? "text-red-400" : ''}  `}
                  >Street</label>
                  <input
                    name="street"
                    type="text"
                    value={formik.values.street}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full border-2 border-gray-200 rounded-md p-2 mt-2 focus:outline-none focus:border-red-400"
                  />

                  <label
                    htmlFor="city"
                    className={`block text-gray-700 text-sm font-latoBold ${formik.touched.city && formik.errors.city ? "text-red-400" : ''}  `}
                  >City</label>
                  <input
                    name="city"
                    type="text"
                    value={formik.values.city}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full border-2 border-gray-200 rounded-md p-2 mt-2 focus:outline-none focus:border-red-400"

                  />

                  {/* State field */}

                  <label
                    htmlFor="state"
                    className={`block text-gray-700 text-sm font-latoBold ${formik.touched.state && formik.errors.state ? "text-red-400" : ''}  `}>State</label>
                  <select
                    name="state"
                    value={formik.values.state}
                    placeholder="Select your state"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full border-2 border-gray-200 rounded-md p-2 mt-2 focus:outline-none focus:border-red-400">
                    {states.map((state, index) => (
                      <option key={index} value={state.name}>{state.name}</option>
                    ))}
                  </select>


                  <label
                    htmlFor="zip-code"
                    className={`block text-gray-700 text-sm font-latoBold ${formik.touched.zipCode && formik.errors.zipCode ? "text-red-400" : ''}  `}
                  >
                    Zip Code
                  </label>
                  <input
                    name="zipCode"
                    type="number"
                    value={formik.values.zipCode}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full border-2 border-gray-200 rounded-md p-2 mt-2 focus:outline-none focus:border-red-400" />
                </fieldset>
              </div>


              {/* Departement field */}
              <div className="pb-4">
                <label
                  htmlFor="department"
                  className={`block text-gray-700 text-sm font-latoBold ${formik.touched.department && formik.errors.department ? "text-red-400" : ''}  `}>Department</label>
                <select
                  name="department"
                  value={formik.values.department}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Select your state"
                  className="w-full border-2 border-gray-200 rounded-md p-2 mt-2 focus:outline-none focus:border-red-400">
                  {departments.map((departement, index) => (
                    <option key={index} value={departement}>{departement}</option>
                  ))}
                </select>
              </div>

              {/* Submit button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-red-400 text-white px-4 py-2 rounded-md font-latoBold w-full"
                >Add employee</button>
              </div>


            </div>

          </div>
          {/* <div className="relative flex-1">
            <Image
              src={coverImg}
              fill
              alt='cover'
              className="object-cover rounded-lg"
              priority
            />
          </div> */}

        </form>

        <Modal isShowing={isShowing} toggle={toggle} handleClick={handleClick} title="Employee Created !" buttonText="Go to the next Page!" bgColor='#09dcaf' textColor="black"/>
        
      </main >
    </>
  )
}
