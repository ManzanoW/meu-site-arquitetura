import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav class="navbar navbar-expand navbar bg-black">
          <div class="container-fluid">
           <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarExample01" aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation">                              
            <li class="fas fa-bars"></li>
           </button>
            <div class="collapse navbar-collapse" id="navbarExample01">
              <ul class="navbar-nav">
                <li class="nav-item active">
                 <a class="nav-link" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Projetos</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Orçamento</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Contato</a>
                </li>
             </ul>
            </div>
          </div>
        </nav>
       
       </header> 
        <div className='site'>
       <h2 class="h2"> Resumo </h2>
       <small class="text-primary"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper diam a nisi porta pulvinar. Pellentesque fringilla enim nec arcu volutpat, in lobortis odio convallis. Integer sit amet lacus mi. Duis at facilisis nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean condimentum, arcu a facilisis maximus, orci lorem rhoncus risus, eu malesuada nisi ligula ut purus. Maecenas porttitor ornare quam. Morbi a velit et mauris pharetra aliquet. Morbi venenatis nisl eu enim cursus interdum. Nulla facilisi. Vestibulum vulputate porttitor quam et cursus. Etiam vitae augue sed tellus tincidunt auctor. Nunc convallis posuere nibh. Sed libero risus, dictum rutrum bibendum quis, venenatis quis sem. </small>
       </div>
    </div>
  );
}

export default App;
