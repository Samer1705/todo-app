import TodoList from "../../components/TodoList/TodoList"
const Home = () => {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center align-items-center">
                <div className="col-lg-7 col-sm-9 bg-dark rounded-4 p-4 m-5">
                    <TodoList />
                </div>
            </div>
        </div>
    )
}

export default Home