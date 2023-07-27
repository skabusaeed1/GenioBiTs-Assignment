let initialdata={
    detailsPageData:{}
    }
    
  const GetReducers=(state = initialdata,action)=>{
        if(action.type==="GET_PAGE_DETAILS"){
            return{
                ...state,detailsPageData:action.payload
            }
        }
    
        return state;
    }
export default GetReducers    
