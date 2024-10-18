function Heading(prop){
    console.log(prop)
    const {name,role,experience}=prop
    return(
        <div>
            <h1>Good Morning{name}</h1>
            <h2>Iam {role}</h2>
            <h2>Iam having {experience}</h2>
        </div>
        
        
    )
}
export default Heading