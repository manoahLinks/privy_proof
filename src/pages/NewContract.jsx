import { ContractCard } from "../ui";
import ContractButton from "../ui/ContractBtn";

const NewContract = () => {
    return ( 
        <div className="flex flex-col gap-y-8">
            <ContractButton path={`/`}>
                Sign a contract
            </ContractButton>

            <ContractButton path={`/draft-with-ai`}>
                Draft with our Contract AI
            </ContractButton>

            <ContractCard/>
        </div>
     );
}
 
export default NewContract;