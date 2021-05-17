import React from 'react';
import './App.css';
import Layout from "../components/layout/Layout";
import Scroll from "../components/scroll/Scroll";

const App: React.FunctionComponent = () => {
  return(
      <Layout>
        <div className="h-full flex justify-center">
            <Scroll>
                Github Jobs API TypeScript project
            </Scroll>
        </div>
      </Layout>
  )
}

export default App;
