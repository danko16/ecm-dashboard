import React, { useState } from 'react';

import Header from './header';
import Sidebar from './sidebar';
import Beranda from './beranda';

function Home() {
  const [openSidebar, setOpenSidebar] = useState(true);
  function toggleOpenSidebar() {
    setOpenSidebar(!openSidebar);
  }
  return (
    <div>
      <Header toggleOpenSidebar={toggleOpenSidebar} openSidebar={openSidebar} />
      <Sidebar openSidebar={openSidebar} />
      <Beranda openSidebar={openSidebar} />
    </div>
  );
}

export default Home;
