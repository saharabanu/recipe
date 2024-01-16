import RecepiDetails from "@/components/ui/reciepi/RecepiDetails";


const ReciepeDetailsPage = ({params}) => {
    const {id} = params;
   
    return (
        <div>
           <RecepiDetails id={id}/>
        </div>
    );
};

export default ReciepeDetailsPage;