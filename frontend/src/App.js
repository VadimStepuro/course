import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Section from './components/contexts/ProductContextProvider';
import { useApiCall } from './api/fetchData';
import { getProcessors, getProducts, getRam, getVideocards } from './api/apiCalls';
import ApiHandler from './api/apiHandler';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import { useState } from 'react';
import ProcessorProvider from './components/contexts/ProcessorsContext';
import Login from './components/Authorisation/Login';
import Registration from './components/Authorisation/Registration';
import AddProcessor from './components/home/Processor/AddProcessor';
import EditProcessor from './components/home/Processor/EditProcessor';
import VideocardProvider from './components/contexts/VideoCardContext';
import Videocards from './components/home/Videocard/Videocards';
import AddVideocard from './components/home/Videocard/AddVideocard';
import EditVideoCard from './components/home/Videocard/EditVideocard';
import Ram from './components/home/Ram/Ram';
import RamProvider from './components/contexts/RamContext';
import Processors from './components/home/Processor/Processors';
import AddRam from './components/home/Ram/AddRam';
import EditRam from './components/home/Ram/EditRam';
import Cart from './components/home/Cart/Cart';
import CartWrapper from './components/home/Cart/CartWrapper';



function App() {


  const [loadingProcessors, processors, errorProcessors] = useApiCall(getProcessors);

  const [loadingVideocards, videocards, errorVideocards] = useApiCall(getVideocards);

  const [loadingRam, ram, errorRam] = useApiCall(getRam);

  const [loadingProducts, products, errorProducts] = useApiCall(getProducts);

  const [currentProcessor, setCurrentProcessor] = useState();

  const [currentVideocard, setCurrentVideocard] = useState();

  const [currentRam, setCurrentRam] = useState();


  return (
    <ApiHandler loading={loadingProducts} error={errorProducts}>
    <ApiHandler loading={loadingProcessors} error={errorProcessors}>
      <ApiHandler loading={loadingVideocards} error={errorVideocards}>
      <ApiHandler loading={loadingRam} error={errorRam}>
      <Section initialProducts={products}>
        <ProcessorProvider initialProcessors={processors}>
          <VideocardProvider initialVideocards={videocards}>
          <RamProvider initialRam={ram}>
            <div className="App">
              <Routes>
                <Route path='/' element={<Home/>}/>

                <Route path='/processors' element={<Processors pageSize={25} setCurrentProcessor={setCurrentProcessor}/>}/>
                <Route path='/processors/create' element={<AddProcessor/>}/>
                <Route path='/processors/edit' element={<EditProcessor processor={currentProcessor}/>}/>

                <Route path='/videocards' element={<Videocards pageSize={25} setCurrentVideocard={setCurrentVideocard}/>}/>
                <Route path='/videocards/create' element={<AddVideocard/>}/>
                <Route path='/videocards/edit' element={<EditVideoCard videocard={currentVideocard}/>}/>

                <Route path='/ram' element={<Ram pageSize={25} setCurrentRam={setCurrentRam}/>}/>
                <Route path='/ram/create' element={<AddRam/>}/>
                <Route path='/ram/edit' element={<EditRam ram={currentRam}/>}/>

                <Route path='/cart' element={<CartWrapper/>}/>

                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Registration/>}/>
              </Routes>
            </div>
            </RamProvider>
          </VideocardProvider>
        </ProcessorProvider>
        </Section>
        </ApiHandler>
      </ApiHandler>
    </ApiHandler>
    </ApiHandler>
  );
}

export default App;