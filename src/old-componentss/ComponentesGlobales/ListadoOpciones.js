
import styled from "styled-components"





export const List = styled.ul`
  list-style: none;


  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top: 5px solid #FF6E40;
 
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
  cursor:pointer;
  border-top:3px solid #FF6E40;

`;

// export  const List = styled.ul`
// border-top:1px solid red;
//   list-style: none;
//   padding: 0px 20px;
//   background-color: #fff;
//   border-bottom-left-radius: 4px;
//   border-bottom-right-radius: 4px;
//   border-top: 3px solid ;
//   box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
// `;

export  const ListItem = styled.li`
height:100%; width:100%;
display: flex;
flex-direction: column;
padding: 11px 0px; ;

  
 
opacity: 0.8;
/* border-left: 1px solid #FF6E40; */
font-size:1.5rem;
line-height:1.8rem;
border-radius:5px;

  :hover{ 
    margin-left:15px;
    
    background-color:#FF6E40;
      color:#fafafa ; 
        opacity: 1;
        transition:0.24s;
       

  }





`;




export default ListItem
