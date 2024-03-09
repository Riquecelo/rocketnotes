import { Conatiner } from "./styles";

export function ButtonText({title, ...rest}){
    return(
        <Conatiner 
            type="button"
            {...rest}
        >
            {title}
        </Conatiner>
    )
}