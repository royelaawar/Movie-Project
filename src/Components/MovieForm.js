import { useNavigate } from "react-router-dom"

// function MovieForm({updateFormData, addMovie}){

//     const navigate = useNavigate()

//     return <form onSubmit={(event) => {
//         addMovie(event)
//         navigate('/movies')
//     }}>
//         <input onChange={updateFormData} name="name" placeholder="Name"/>
//         <input onChange={updateFormData} name="image" placeholder="Image"/>
//         <input onChange={updateFormData} name="category" placeholder="Category"/>
//         <input onChange={updateFormData} name="description" placeholder="Description"/>
//         <input type="submit"/>
//     </form>
// }

// export default MovieForm

function MovieForm({ updateFormData, addMovie }) {


    const navigate = useNavigate();
    return (
        <div className="new-movie-form">
            <h2>Add New Movie</h2>
            <form onSubmit={(event) => {
                addMovie(event)
                navigate("/movies")
            }}>
                <input onChange={updateFormData} type="text" name="name" placeholder="Movie name" />
                <input onChange={updateFormData} type="text" name="image" placeholder="Image URL" />
                <input onChange={updateFormData} type="text" name="category" placeholder="Category" />
                <input onChange={updateFormData} type="text" name="description" placeholder="Description" />
                <input onChange={updateFormData} type="number" name="year_released" placeholder="Release year" />
                <input onChange={updateFormData} type="text" name="box_office_earnings" placeholder="Earnings" />
                <input onChange={updateFormData} type="text" name="director" placeholder="Director" />
                <input onChange={updateFormData} type="text" name="main_cast_members" placeholder="Cast" />
                <button type="submit">Add Movie</button>
            </form>
        </div>
    )
}


export default MovieForm