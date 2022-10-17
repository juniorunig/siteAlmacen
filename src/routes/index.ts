import { ClienteRoutes } from './cliente';
import {ventaRoutes  } from './venta';
import { ProductoRoutes} from './producto';
import {TipoProductoRoutes } from './tipoproducto';
 


export class Routes {
    public clienteRoutes: ClienteRoutes = new ClienteRoutes();
    public ventaRoutes: ventaRoutes = new ventaRoutes();
    public productoRoutes: ProductoRoutes = new ProductoRoutes();
    public tipoProductoRoutes: TipoProductoRoutes = new TipoProductoRoutes();
}
