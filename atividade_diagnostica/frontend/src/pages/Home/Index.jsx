import React from 'react'
import SideMenu from '../../components/SideMenu/Index';

function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <SideMenu />

      <main className="ml-[252px] p-8">
        <h1 className="text-3xl font-bold text-slate-900">
          Home
        </h1>
      </main>
    </div>
  );
}

export default Home