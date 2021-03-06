// import React from "react"
// import { Link } from "gatsby"
// import { useStaticQuery, graphql } from "gatsby"
// import Image from "gatsby-image"
// import parse from "html-react-parser"
// import styled from "styled-components"

// const IndexArtbase = () => {
//   const data = useStaticQuery(graphql`
//     {
//       allWpPost(filter: { id: { eq: "cG9zdDo2MjE3" } }, limit: 1) {
//         nodes {
//           id
//           title
//           excerpt
//           uri
//           date(formatString: "MMMM DD, YYYY")
//           tags {
//             nodes {
//               name
//             }
//           }
//           excerpt
//           featuredImage {
//             node {
//               altText
//               localFile {
//                 childImageSharp {
//                   fluid(maxWidth: 2000, quality: 60) {
//                     ...GatsbyImageSharpFluid_tracedSVG
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   `)

//   //EXISTING QUERY THAT WAS WORKING DAMMIT!
//   // filter: {
//   //   categories: { nodes: { elemMatch: { name: { eq: "Artbase" } } } }
//   // }

//   //   console.log(data)
//   return (
//     <div>
//       <IndexArtbaseContent>
//         {data.allWpPost.nodes.map((post, index) => {
//           const altText = post.featuredImage?.node?.altText

//           const featuredImage = {
//             fluid: post.featuredImage?.node?.localFile?.childImageSharp?.fluid,
//             alt: altText !== "" ? altText : post.title,
//           }

//           return (
//             <div className="container">
//               <Image
//                 fluid={featuredImage.fluid}
//                 alt={featuredImage.alt}
//                 style={{ width: "100%" }}
//               />

//               <div className="info">
//                 <h4>—Artbase Feature</h4>
//                 <h2>{post.title}</h2>
//                 <p>{parse(post.excerpt)}</p>
//                 <Link to={post.uri} key={index}>
//                   —READ ON
//                 </Link>
//                 <Link to="/artbase/">—EXPLORE ARTBASE</Link>
//                 {/* <p>{post.date}</p> */}
//               </div>
//             </div>
//           )
//         })}
//       </IndexArtbaseContent>
//     </div>
//   )
// }

// export default IndexArtbase

// const IndexArtbaseContent = styled.section`
//   h2 {
//     font-size: 2rem;
//     @media screen and (min-width: 940px) {
//       font-size: 3.6rem;
//     }
//   }

//   .container {
//     color: black;
//     display: grid;
//     /* align-content: center; */
//     min-height: 100vh;

//     @media screen and (min-width: 940px) {
//       grid-template-columns: 1fr 1fr;
//     }

//     .info {
//       padding: 1rem 15% 2rem;
//       display: flex;
//       flex-direction: column;
//       justify-content: center;
//       align-items: flex-start;
//     }
//   }

//   .img-container {
//     height: 100%;
//   }
// `
