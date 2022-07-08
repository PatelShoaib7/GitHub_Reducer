export const gitHubReducer =(state , action)=>
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

