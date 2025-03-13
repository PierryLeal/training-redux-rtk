import { useGetAllDigimonCardQuery } from "../../store/services/digimon"

const Home: React.FC = () => {
  console.log("Home...")
  const { data } = useGetAllDigimonCardQuery()

  console.log("Digimons: ", data)

  return (
    <div>
      <span>{data?.data[0].name}</span>
      <img src={data?.data[0].images.small} />
    </div>
  )
}

export default Home
