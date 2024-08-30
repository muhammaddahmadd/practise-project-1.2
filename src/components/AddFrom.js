

function AddForm({ onAdd, name, imageUrl, onAddUrl, onAddName }) {

    
    return <form className="form-add-friend " onSubmit={onAdd}> 
        <p>Dude's Name</p>
        <input type="text" placeholder="Name.." value={name} onChange={onAddName} />
        <p>Image Url</p>
        <input type="text" placeholder="Picture Link.." value={imageUrl} onChange={onAddUrl}/>
        <button className="button" type="submit">Add</button>
    </form>
}

export default AddForm;