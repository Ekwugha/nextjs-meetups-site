import { Fragment } from 'react';
import MeetupDetail from '../../components/meetups/MeetupDetail';

const MeetupDetails = () => {
    return (
        <MeetupDetail 
            image="https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg" 
            title="First Meetup" 
            address="Some street 5, some city" 
            description="This is our first meetup"
        />
    );
}

export async function getStaticPaths() {
    return {
        fallback: true,   
        paths: [
            {
                params: {
                    meetupId: 'm1',
                },
            },
            {
                params: {
                    meetupId: 'm2',
                },
            },
        ]
    }
}

export async function getStaticProps(context) {
    // fetch data from single meetup

    const meetupId = context.params.meetupId;

    return {
        props: {
            meetupData: {
                image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
                id: meetupId,
                title: 'First Meetup',
                address: 'Some street 5, some city',
                description: "This is our first meetup",
            }
        }
    }
}
 
export default MeetupDetails;