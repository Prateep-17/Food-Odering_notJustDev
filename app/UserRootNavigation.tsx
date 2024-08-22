import { Link, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TransitionPresets } from '@react-navigation/stack';
import Login from './screens/Login';
import ToDo from "./screens/ToDo"
import Home from './screens/Home';
import SingleProduct from './screens/[id]';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { findName } from './types';
import Cart from './screens/Cart';
// import CartProvider from './Provider';
import Orders from './screens/Orders';
import OrderDetails from './screens/[orderId]';
import { ReduxProvider } from './Provider';
import Profile from './screens/Profile';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeScreen (){
  return(
      <Stack.Navigator>
        <Stack.Screen name="Menu" component={Home}
          options={{ headerTitleAlign: 'center',
          headerRight: ()=>(
            <Link to={{screen:'Cart'}}>
              <FontAwesome name="shopping-cart" color={"black"} size={30}/>
            </Link>
          )
        }}
        />
        <Stack.Screen name="Details" component={SingleProduct}
          options={({route}:any)=>({title: findName(route.params.productId), 
            headerBackTitle:'Menu',
            headerRight: ()=>(
              <Link to={{screen:'Cart'}}>
                <FontAwesome name="shopping-cart" color={"black"} size={30}/>
              </Link>
            )
          })}
        />
        {/* <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen name="Cart" component={Cart} options={() => ({
            presentation: 'modal'
          })} />
        </Stack.Group> */}  
        <Stack.Screen name="Cart" component={Cart} options={{
          presentation:'modal',
          }}
        />
      </Stack.Navigator>
  )
}

function OrderScreen () {
  return(
  <Stack.Navigator>
    <Stack.Screen name='OrdersList' component={Orders}
      options={{
        title:"Orders",
        headerTitleAlign: 'center'
      }}
    />
    <Stack.Screen name='OrderDetails' component={OrderDetails}
      options={({route}:any)=>({
        title: `Order #${route.params.orderId}`, 
        headerBackTitle:'Orders',
        headerTitleAlign:"center"
      })}
    />
  </Stack.Navigator>
  )
}

function HomeStack (){
  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={{tabBarLabelStyle:{fontSize:14}}}>
    <Tab.Screen name="Home" component={HomeScreen} 
      options={{headerShown: false,
        tabBarIcon:({color}:any)=>(<FontAwesome name='cutlery' size={18} color={color} />)
      }}
      />
    <Tab.Screen name="Orders" component={OrderScreen}
      options={{
        headerShown:false,
        tabBarIcon:({color}:any)=>(<FontAwesome name='list' size={18} color={color} />)
      }}
    />
    <Tab.Screen name="Profile" component={Profile}
      options={{
        headerShown: false,
          tabBarIcon:({color}:any)=>(<FontAwesome name='user' size={18} color={color} />)
      }}
    />
  </Tab.Navigator>
  )
}

const UserRootNavigation = () => {
  return (
    <NavigationContainer>
      <ReduxProvider>
       <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={Login}
            options={{
              headerShown: false,
              // tabBarIcon:({color}:any)=>(<FontAwesome name='user' size={18} color={color} />)
          }}/>
          <Stack.Screen name="HomeStack" component={HomeStack}
            options={{
              headerShown: false,
              // tabBarIcon:({color}:any)=>(<FontAwesome name='user' size={18} color={color} />)
          }}/>
       </Stack.Navigator>
      </ReduxProvider>
    </NavigationContainer>
  )
}

export default UserRootNavigation