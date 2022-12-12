// import React, { useEffect, useState } from "react";
// import { searchProduct } from "../actions";
// import { connect } from "react-redux";

// const Search = ({ searchProduct, product }) => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [result, setResult] = useState("");

//   const handleChange = (event) => {
//     setSearchTerm(event.target.value);

//     if (event.target.value) {
//       searchProduct(event.target.value);
//     }
//   };

//   useEffect(() => {
//     let selectedResult = result;
//     console.log(selectedResult);
//   }, []);

//   let productNames;

//   console.log(product);

//   if (product) {
//     productNames = product.product.map((prod) => {
//       return (
//         <p
//           key={prod._id}
//           onClick={(e) => {
//             setSearchTerm(e.target.textContent);

//             setResult(e.target.textContent);
//           }}
//         >
//           {prod.name}
//         </p>
//       );
//     });
//   }
//   if (!searchTerm) {
//     productNames = null;
//   }

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search..."
//         value={searchTerm}
//         onChange={handleChange}
//       />
//       <div>{productNames}</div>
//     </div>
//   );
// };

// const mapStateToProps = (state) => {
//   console.log(state);
//   return { product: state.findProduct };
// };

// export default connect(mapStateToProps, { searchProduct })(Search);
