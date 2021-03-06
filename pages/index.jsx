import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image:'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
        address: 'Some address 5, 12345 Some City',      
        description: 'This is the first meetup!'
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image:'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
        address: 'Some address 10, 12345 Some City',
        description: 'This is the second meetup!'
    },
    {
        id: 'm3',
        title: 'A third Meetup',
        image:'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
        address: 'Some address 15, 12345 Some City',
        description: 'This is the third meetup!'
    }
]

const HomePage = (props) => {    
    return ( 
        <MeetupList meetups={props.meetups} />
     );
}

// export async function getServerProps() {
//     //  fetch data from an api
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS  
//         }
//     }
// }

export async function getStaticProps() {
    // fetch data from an api or database
    return {
        props: {
            meetups: DUMMY_MEETUPS
        },
        revalidate: 1
    }
}
 
export default HomePage;