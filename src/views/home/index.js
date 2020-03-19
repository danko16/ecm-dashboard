import React, { useState } from 'react';

import { Header, Sidebar, Main } from './components';

function Home() {
  const [openSidebar, setOpenSidebar] = useState(true);
  function toggleOpenSidebar() {
    setOpenSidebar(!openSidebar);
  }
  return (
    <div>
      <Header toggleOpenSidebar={toggleOpenSidebar} openSidebar={openSidebar} />
      <Sidebar openSidebar={openSidebar} />
      <Main openSidebar={openSidebar} />
    </div>
  );
}

export default Home;
