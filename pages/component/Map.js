import mapboxgl from 'mapbox-gl'
import { useEffect } from 'react'

mapboxgl.accessToken = 'pk.eyJ1IjoicGFzaW5kdS1zYWhhbiIsImEiOiJjbDZhcWNjZnkxcTZ4M2JuM2EyenljZzNtIn0.1kQi7s34sfJys5XlkCFahw';


const fuelStation_arr = [{
  name: "C.F. De Mel & Sons (CEYPETCO Lanka Fuel Filling Station)",
  cordinates: [79.8507024498247, 6.928805010711227],
  P92: "✅",
  P95: "✅",
  D: "❌",
  SD: "❌"

},
{
  name: "Rajagiriya Filling Station",
  cordinates: [79.89863542949045, 6.908857780368848],
  P92: "✅",
  P95: "✅",
  D: "❌",
  SD: "✅"
},
{
  name: "IOC Lanka Fuel Filling Station",
  cordinates: [79.86749463446658, 6.935112817167763,],
  P92: "❌",
  P95: "✅",
  D: "❌",
  SD: "✅"
},

{
  name: "H K S RANASINGHE (Lanka IOC Fuel Filling Station",
  cordinates: [79.85487010219421, 6.896753524151393],
  P92: "✅",
  P95: "✅",
  D: "✅",
  SD: "✅"
},
{
  name: "Battaramulla Fuel Station",
  cordinates: [79.91732418509156, 6.90308295962401],
  P92: "❌",
  P95: "✅",
  D: "❌",
  SD: "❌"
},
{
  name: "CEYPETCO Lanka Fuel Filling Station ",
  cordinates: [79.85744502280717, 6.889255017504663],
  P92: "❌",
  P95: "❌",
  D: "❌",
  SD: "❌"
},]

const Map = (props) => {
  //console.log(props)
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [79.890000, 6.911970],
      zoom: 12,
    });

    if (props.pickup_cordinates) {
      add_to_map(map, props.pickup_cordinates)
      console.log(props.pickup_cordinates)
    }

    if (props.dropoff_cordinates) {
      add_to_map(map, props.dropoff_cordinates)
    }

    if (props.type) {
      for (let i = 0; i < 6; i++) {
        add_to_map(map, fuelStation_arr[i].cordinates)
      }
    }

    if (props.pickup_cordinates && props.dropoff_cordinates) {
      map.fitBounds([
        props.pickup_cordinates,
        props.dropoff_cordinates
      ], {
        padding: 60
      })
    }

    add_control()

  }, [props.pickup_cordinates, props.dropoff_cordinates, props.type])

  const add_to_map = (map, cordinates) => {
    const marker1 = new mapboxgl.Marker()
      .setLngLat(cordinates)
      .addTo(map)
  }

  const add_control = () => {
    const maps = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true
    })
  }


  return <div className='map' id='map'>Map</div>

}


export default Map