import './App.css';
// import Counter from './counter';
import React, { Suspense } from 'react';
const Counter = React.lazy(() => import("./counter"));
const SignUpForm = React.lazy(() => import("./SignUp/sign-up-form"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>LoadingLoadingLoadingLoadingLoadingLoadingLoadingLoadingLoadingLoadingLoadingLoadingLoading...</div>}>
        <Counter />
        {/* <SignUpForm /> */}
      </Suspense>
    </div>
  );
}

export default App;
