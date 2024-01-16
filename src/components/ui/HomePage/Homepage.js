import AllReciepi from "../reciepi/AllReciepi";

const Homepage = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold text-center my-10">Recipe app</h1>
            <AllReciepi/>
        </div>
    );
};

export default Homepage;