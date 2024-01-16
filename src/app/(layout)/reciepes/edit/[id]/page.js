import EditPage from "@/components/ui/reciepi/EditPage";


const RecipeEditPage = ({params}) => {
    const {id} = params;
   
    return (
        <div>
        
           <EditPage id={id}/>
        </div>
    );
};

export default RecipeEditPage;