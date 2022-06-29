import React from "react";





function Pagination({ wearPerPage, totalWear, paginate, prevPage, nextPage }) {

  

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalWear / wearPerPage); i++) {
      pageNumbers.push(i)
  }


  return ( 
    <div className="container mt-3">
      <nav aria-label="Page navigation example">
       <ul class="pagination justify-content-center">
         {/* <li class="page-item "><a onClick={prevPage} class="page-link">Previous</a></li> */}
         {pageNumbers.map(item => (
          <li class="page-item">
            <a class="page-link" onClick={() => paginate(item)} href="#">{item}</a>
          </li>
         ) )}
         
         <li class="page-item"><a onClick={nextPage} class="page-link" href="#">Next</a></li>
           </ul>
          </nav> 
    </div>
  );
}

export default Pagination;