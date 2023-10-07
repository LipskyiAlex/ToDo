import { MdClose } from "react-icons/md";
import { Wrapper,Checkbox,Text,Button } from "./Task.styled";
export const Task = ({task}) => {

    <Wrapper>
        <Checkbox
        type="checkbox"
        checked={task.checked}
        />
        <Text>{task.text}</Text>
        <Button><MdClose size={24}/></Button>
    </Wrapper>
}