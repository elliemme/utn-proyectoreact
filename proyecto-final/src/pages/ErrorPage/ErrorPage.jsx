import React from 'react'
import './ErrorPage.css'
import notFound from "../../assets/img/404.jpg";

const ErrorPage = () => {
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>Not Found</i>
      </p>
      <img src={notFound} alt="" />
    </div>
  )
}

export default ErrorPage