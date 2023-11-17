import { AppBar } from "components/AppBar";
import { TaskForm } from "components/TaskForm";
import { TaskList } from "components/TaskList";
import { Layout } from "components/Layout";
import { useSelector } from "react-redux";
import { selectIsLoading, selectError} from "redux/tasks";

export const Todos = () => {

    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    return (
        <Layout>
       <AppBar />
      <TaskForm />
      {isLoading && !error && <b>Request in progress...</b>}
      <TaskList />
        </Layout>
      
    )
}