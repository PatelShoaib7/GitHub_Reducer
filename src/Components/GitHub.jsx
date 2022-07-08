import React from 'react'
import { useState } from 'react';
import { useReducer } from 'react'

const initValue={
    isLoading:false,
    isError:false,
    data:[],
    token:""
}

 const gitHubReducer =(state , action)=>
 {      
        switch(action.type)
        {
            case 'FETCH_USER_LOADING':
            {
                return {
                    ...state,
                    isLoading:true,
                    isError:false
                }
            }
            case ":FETCH_USER_SUCESS":{
                return{
                    ...state,
                    isLoading:false,
                    data:action.type
                }
            }
            case "FETCH_USER_FAILURE":
                {
                    return{
                        ...state,
                        isLoading:false,
                        isError:true
                    }
                }
            default :
            {
                return state
            }
        }
 }
 const GitHubLoding={type:"FETCH_USER_LOADING"}
 const GitHubSucess={type:"FETCH_USER_SUCESS"}
 const GitHubError={type:"FETCH_USER_FAILURE"}

export const   GitHub =()=>

{
    const [state , dispatch] = useReducer(gitHubReducer , initValue);
    const [ text , setText]= useState("")

     const fetchUser=(query)=>
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
    return(
        <div>
            <div>
            <input  value={text}
                    onChange={(e)=> setText(e.target.value)}
                    type="text"
                    placeholder='add sometghing'
            
            />
            <button onClick={()=> fetchUser(text)}>Serach </button>
            </div>
            <div>
                  <h1>Map Coming Data Below Div</h1>
            </div>

            <div style={{border:'1px solid black', width:'80%', margin:'auto'}}>
                 {
                     state.data.map((item)=>
                    (
                       <div>{item.login} shoiab </div>
                    ))
                }
              
            </div>
          
        </div>
     
        
    )
}


