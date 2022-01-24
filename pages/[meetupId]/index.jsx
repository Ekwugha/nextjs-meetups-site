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
 
export default MeetupDetails;