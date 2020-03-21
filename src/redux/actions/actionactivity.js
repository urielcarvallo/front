const getactivity= (idIti) => async(dispatch) =>{
    const respuesta=  await fetch("http://localhost:8080/api/Activity/"+idIti).then(res=>res.json());
    console.log('respueta de api Activities: ',respuesta);
    
    dispatch({
        type: 'GET_ACTIVITIES',
        payload: respuesta
    })
}

export default getactivity;