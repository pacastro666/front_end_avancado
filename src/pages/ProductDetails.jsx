import { Grid } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom"
import NavBar from "../components/navbar/Header";
import Footer from "../components/footer/Footer";


export default function ProductDetails() {
  let { state } = useLocation();


  return (
   
    <div className="detailed-content">
         <NavBar/>            
      <div>
        <img width={500} src={state.productInfo.image} alt='Imagem do produto'/>
      </div>
      <div>
        <h2>{state.productInfo.title}</h2>
        <p>{state.productInfo.description}</p>
        {/* https://mui.com/material-ui/react-grid/ */}
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{border: '1px solid red', height: 200}}>
            <Footer/> 
        </Grid>
        
      </div>
    </div>
  )
}