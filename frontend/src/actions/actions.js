import axios from "axios";

export const getDetailsData=(src)=>{
    return{
        type:"GET_PAGE_DETAILS",
        payload:src
    }
}

var dataArr = JSON.parse(localStorage.getItem("card-data")) || [];
export const cardData=(data)=>{

    dataArr.push(data);
  localStorage.setItem("card-data", JSON.stringify(dataArr));
  alert("Added to card")
}

export const removeData=(index)=>{
    console.log(index)
    dataArr.splice(index, 1);
    alert("Removed from card")
    localStorage.setItem("card-data", JSON.stringify(dataArr));
}

