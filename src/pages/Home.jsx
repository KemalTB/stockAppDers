import { Container, Grid, Typography } from '@mui/material'
import React from 'react'

const Home = () => {
  return (
    <Container
  maxWidth="lg"
  sx={{
    height: "100vh", // Tam ekran yüksekliği sağlar
    display: "flex",
    flexDirection: "column", // Dikey hizalar
    justifyContent: "center", // Dikey merkezleme
    alignItems: "center", // Yatay merkezleme
  }}
>
  {/* Yazı */}
  <Typography
    variant="h4"
    align="center"
    color="secondary.light"
    mb={2} // Altına boşluk bırakır
  >
    Home
  </Typography>

  {/* Resim */}
  <img
    src="https://st.depositphotos.com/1720162/1817/i/450/depositphotos_18177429-stock-photo-web-design-concept.jpg"
    alt=""
    style={{
      width: "100%",
      height: "auto",
      maxWidth: "600px", // Resmi genişlik olarak sınırlamak için
    }}
  />
</Container>





  
  )
}

export default Home