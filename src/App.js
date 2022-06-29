import { BrowserRouter as Router, Switch} from 'react-router-dom';
import HomeThree from './pages/homes/HomeThree';
import ScrollToTopRoute from './components/scrolltotop/ScrollToTopRoute';

// import Loader from "react-js-loader";





function App() {
      //  const [loading,setLoading] = useState(false);

      //  useEffect(()=>{
      //   setLoading(true)
      //   setTimeout(()=>{
      //     setLoading(false)
      //   },8000)
      //  },[])
      //  {
      //   loading ?(
      //     <MoonLoader color={color} loading={loading} css={override} size={150} />
      //   )
         
  
      // }
  return (
    
    <div className="App">
      
     <Router>
       
        <Switch>
        <ScrollToTopRoute exact={true} path='/'>
          <HomeThree/>
        </ScrollToTopRoute>
       
        
     </Switch>
     </Router>
     
    </div>
  );
}

export default App;
