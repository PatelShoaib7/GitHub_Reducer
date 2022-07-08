// export const githubLoadingAction={type:"FETCH_GITHUB_USER_LOADING"}
// export const githubSucessAction={type:"FETCH_GITHUB_USER_SUCESS"}

// export const githubFailureAction={type:"FETCH_GITHUB_USER_FAILURE"}



// export const fetchUser =(dispatch , query)=>
// {
//     dispatch(githubLoadingAction)
//     fetch("https://api.github.com/search/users?"+`q=${query}`)
//     .then((res)=> res.json())
//     .then((data)=>
//     {
//         dispatch({...githubSucessAction, playLoad:data.item})
//     })
//     .catch((err)=>
//     {
//         dispatch(githubFailureAction)
//     })
// }