import Destination from "../components/destination/Destination";
import classes from './Destinations.module.css';

const DUMMY_DESTINATIONS = [
    {
        title: 'New Delhi, India',
        image: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Glimpses_of_the_new_Parliament_Building%2C_in_New_Delhi_%282%29.jpg',
        duration: '10'
    },
    {
        title: 'Paris, France',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/2560px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg',
        duration: '12'
    },
    {
        title: 'Berlin, Germany',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Museumsinsel_Berlin_Juli_2021_1_%28cropped%29.jpg/2560px-Museumsinsel_Berlin_Juli_2021_1_%28cropped%29.jpg',
        duration: '5'
    },
    {
        title: 'Las Vegas, USA',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Las_Vegas_%28Nevada%2C_USA%29%2C_The_Strip_--_2012_--_6232.jpg/2560px-Las_Vegas_%28Nevada%2C_USA%29%2C_The_Strip_--_2012_--_6232.jpg',
        duration: '11'
    }
]

function Destinations(params) {
    return (
        <main>
            <div className={classes.container}>
            {DUMMY_DESTINATIONS.map(destination => 
                <Destination 
                title = {destination.title} 
                image = {destination.image} 
                duration = {destination.duration} 
                />
            )}
            </div>
           
        </main>
    )
}

export default Destinations