import classes from "./dashboard.module.css";
import DashboardEvent from "../Dashboard-Event/DashboardEvent";

const Dashboard = ({events}) => {
    const deleteEvent = (id) => {
        console.log(id);
    }

    return (
        <div className={classes.dashboard}>
            <h1>Dashboard</h1>
            <h3>My events</h3>

            {events.map(event => <DashboardEvent key={event.id} handleDelete={deleteEvent} event={event} />)}
        </div>
    );
};

export default Dashboard;