const getAccount= (Account) => async(dispatch) =>{
    const api=  await fetch("http://localhost:8080/api/CreateAccount").then(res=>res.json());

    console.log('respueta de api: ',api);

    api.post('/register',{
                        Username: Account.Username, 
                        Email:Account.Email,
                        Password:Account.Password,
                        FistName:Account.FistName,
                        LastName:Account.LastName
                    }.then(res=>{
                        dispatch({
                            type: "GET_ACCOUNT",
                            payload: res
                        })
                    })
                    .catch(err =>{
                        dispatch({
                            type:"CREATE_USER_FAIL",
                            payload:err
                        })
                    })
    )
}

export default getAccount;
