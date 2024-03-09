import { Conatiner } from "./styles";

export function ButtonText({title, isActive = false, ...rest}){
    return(
        <Conatiner 
            type="button"
            $isactive={isActive.toString()}
            {...rest}
        >
            {title}
        </Conatiner>
    )
}