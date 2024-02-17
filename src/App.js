import './App.css';
import  { createGlobalStyle } from 'styled-components';
import TodoTemplate from './component/TodoTemplate';
import TodoHead from './component/TodoHead';
import TodoList from './component/TodoList';
import TodoCreate from './component/TodoCreate';


import { TodoProvider } from './todoContext'; 


const GlobalStyle = createGlobalStyle`
                body{background:#ccc}`

function App() {
  return(
    <>
   <TodoProvider>
      <GlobalStyle/>
      <TodoTemplate>
        <TodoHead/>
        <TodoList/>
        <TodoCreate/>
      </TodoTemplate>
    </TodoProvider>
    </>
  )
}

export default App;
