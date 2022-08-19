import { Route, Routes } from 'react-router-dom'
import Landing from '../pages/Landing/Landing'
import Home from '../pages/home/Home'

import NotFound from '../pages/NotFound/NotFound'
import Navbar from '../components/NavBar/Navbar'

import Detalle from '../pages/detalle/Detalle'
import Pedidos from '../pages/perfil/Pedidos'
import Menu from '../pages/perfil/Menu'
import Editar from '../pages/perfil/Editar'

import Admin from 'pages/admin/Admin'
import Dashboard from 'pages/admin/Dashboard'
import Usuarios from 'pages/admin/usuarios/Usuarios'
import Ventas from 'pages/admin/ventas/Ventas'
import { ProtectedRoute } from './ProtectedRoute'
import Libros from 'pages/admin/libros/Libros'
import Categorias from 'pages/admin/categorias/Categorias'
import Tags from 'pages/admin/tags/Tags'

import PedidosAdmin from 'pages/admin/pedidos/PedidosAdmin'

import MasVendidos from 'components/NavBar/MasVendidos'
import Ofertas from 'components/NavBar/Ofertas'
import Contactanos from 'components/NavBar/Contactanos'

import Carrito from 'components/Carrito/Carrito'
import Favoritos from 'pages/perfil/Favoritos'

//Aqui iran todas las rutas
function RoutesApp() {
  return (
    <Routes>
      <Route path="admin" element={<ProtectedRoute component={Admin} />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="usuarios" element={<Usuarios />} />
        <Route path="ventas" element={<Ventas />} />
        <Route path="pedidos" element={<PedidosAdmin />} />
        <Route path="libros" element={<Libros />} />
        <Route path="categorias" element={<Categorias />} />
        <Route path="tags" element={<Tags />} />
      </Route>
      <Route path="menu" element={<Menu />}>
        <Route path="pedidos" element={<Pedidos />} />
        <Route path="editar" element={<Editar />} />
        <Route path="favoritos" element={<Favoritos />} />
      </Route>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Landing />} />

        <Route path="home" element={<Home />} />
        <Route path="ofertas" element={<Ofertas />} />
        <Route path="masVendidos" element={<MasVendidos />} />
        <Route path="contactanos" element={<Contactanos />} />

        {/* <Route path="login" element={<Login />} /> */}
        <Route path="detalle/:id" element={<Detalle />} />
      </Route>
      <Route path="home/carrito" element={<Carrito />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default RoutesApp
