import React from 'react'
import NextHead from 'next/head'

const Head = ({ }) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>Petros Group</title>
    <meta name="description" content= 'Petros Group is a leading company which deals with wide range of products, including petroleum, oil, gas and construction engineering.' />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="favicon.jpg" sizes="16x16" type="image/png" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Zilla+Slab:400,700" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <script src="https://kit.fontawesome.com/a076d05399.js"></script>
{/**boostrap */}
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

  </NextHead>
)

export default Head;