import * as React from 'react'

import { Routes, Route } from 'react-router-dom'
import Users from 'src/pages/admin/Users'
import News from 'src/pages/admin/News'
import Dashboard from 'src/pages/admin/Dashboard'
import AdminSide from 'src/components/admin/layouts/AdminSide'

const AdminLayout = () => {
  return (
    <div style={{ display: 'flex' }}>
      <AdminSide />
      <div style={{ padding: '0px 50px', width: '100%', display: 'flex', alignItems: 'center', backgroundColor: '#eee' }}>
        <Routes>
          <Route path="/*" element={<Users />} />
          <Route path="/users" element={<Users />} />
          <Route path='/news' element={<News />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  )
}

export default AdminLayout
