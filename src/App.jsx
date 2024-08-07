import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/UI/Navbar/Navbar';
import Sidebar from './components/UI/Sidebar/Sidebar';
import './App.css';
import Dashboard from './components/Pages/Dashboard/Dashboard';

function App() {

  return (
    <div className='d-flex flex-column min-vh-100'>
      <header className='navbar'>
        <Navbar />
      </header>
      <main className='flex-fill'>
        <div className='container-fluid'>
          <div className='row'>
            <aside className='col-md-1 p-0 fixed-sidebar'>
              <Sidebar/>
            </aside>
            <section className='col-md-11 offset-md-1'>
              <Dashboard/>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
