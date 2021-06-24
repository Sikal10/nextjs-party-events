import classes from "./hero.module.css";

const Hero = () => {
    return (
        <div className={classes.hero}>
            <h1>Welcome to the party!</h1>
            <h2>Find the hottest events.</h2>
        </div>
    );
};

export default Hero;