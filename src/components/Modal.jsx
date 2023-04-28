// imports
export default function Modal({props, isOpen, setIsOpen, children}) {

    if (!isModalOpen) return null

    const closeModal = (e) => {
    e.preventDefault()
    setIsModalOpen(false)
    
    }


    return (
        <div className="h-screen flex items-center justify-center">
            <div className="bg-white rounded-lg w-1/2 font-latoRegular text-gray-700 p-16">
                <h1 className="text-3xl pb-4 font-latoBold">{props.title}</h1>
                <p className="text-lg text-gray-500 ">{props.description}</p>
                <button onClick={closeModal} className="bg-red-400 text-white px-4 py-2 rounded-md font-latoBold w-full">Close</button>
            </div>
        </div>
    )
}