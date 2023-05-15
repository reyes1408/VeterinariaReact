
//children toma todos los promps se manden al componente (Tambien puede recibir codigo HTML)
const Error = ({children}) => {
    return (
        <div className="bg-red-800 text-white text-center p-3 font-bold mb-3 rounded-md">
            {children}
        </div>
    )
}
export default Error
