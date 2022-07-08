 export const GitHubLoding={type:"FETCH_USER_LOADING"}
 export const GitHubSucess={type:"FETCH_USER_SUCESS"}
 export const GitHubError={type:"FETCH_USER_FAILURE"}
 
 
 export const fetchUser=(dispatch , query)=>
 {
    dispatch(GitHubLoding)

    fetch(`https://api.github.com/search/users?` + `q=${query}`)
    .then((res)=> res.json())
    .then((res)=>
    {
      
     dispatch({...GitHubSucess, playLoad:res.items})
     console.log(res.items)
   
    })
    .catch((err)=>
    {
        dispatch(GitHubError)
    })

 }