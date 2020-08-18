import Authentication from '../components/pages/auth.vue';
import Home from '@/components/pages/Home.vue';
import Cart from '@/components/pages/cart.vue';
import Products from '@/components/pages/Products.vue';
import Profile from '@/components/pages/Profile.vue';
import AddProduct from '@/components/pages/addProduct.vue';
const routes = [
	{
		name: 'Authenticatiion',
		component: Authentication,
		path: '/login',
		meta: {
			requiresGuest: true,
		},
	},
	{
		children: [
			{
				path: '/cart',
				name: 'Cart',
				component: Cart,
			},
			{
				path: '',
				name: 'Products',
				component: Products,
			},
			{
				path: '/profile',
				name: 'Profile',
				component: Profile,
			},
			{
				path: '/admin/add-product',
				name: 'Admin-Add-Product',
				component: AddProduct,
			},
		],
		path: '/',
		meta: {
			requiresAuth: true,
		},
		components: {
			default: Home,
		},
	},
];

export default routes;
