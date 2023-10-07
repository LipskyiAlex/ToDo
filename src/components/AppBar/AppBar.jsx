import { StatusFilter } from "../StatusFilter/StatusFilter";
import { TaskCounter } from "../TaskCounter/TaskCounter";
import { Wrapper,Section,Title } from "./AppBar.styled";


export const AppBar = () => {
  return (
    <Wrapper >
      <Section>
        <Title>Tasks</Title>
        <TaskCounter/>
      </Section>
      <Section>
        <Title>Filter by status</Title>
        <StatusFilter/>
      </Section>
    </Wrapper>
  );
};
