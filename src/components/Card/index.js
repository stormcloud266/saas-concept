import React from "react"
import { StyledCard } from "./styles"

const Card = ({ icon, title, body }) => (
  <StyledCard>
    <span>{icon}</span>
    <h3>{title}</h3>
    <p>{body}</p>
    {console.log(title)}
  </StyledCard>
)

export default Card
