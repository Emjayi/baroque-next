// // src/hooks/useDeviceType.ts

// import { useEffect } from 'react'; // Import useEffect from React
// import { useDispatch } from 'react-redux'; // Import useDispatch from react-redux
// import { setDeviceType } from '../store/slices/deviceSlice'; // Import the setDeviceType action
// import { AppDispatch } from '../store/store'; // Import the AppDispatch type

// // Custom hook to determine the device type
// const useDeviceType = () => {
//     const dispatch = useDispatch<AppDispatch>(); // Get the dispatch function from the store

//     useEffect(() => {
//         // Function to update the device type based on window width
//         const updateDeviceType = () => {
//             const width = window.innerWidth;
//             let deviceType = 'desktop';
//             if (width < 768) {
//                 deviceType = 'mobile';
//             } else if (width < 1024) {
//                 deviceType = 'tablet';
//             }
//             dispatch(setDeviceType(deviceType)); // Dispatch the action to update the device type
//         };

//         updateDeviceType(); // Update device type on initial load

//         // Add event listener for window resize to update device type
//         window.addEventListener('resize', updateDeviceType);
//         return () => window.removeEventListener('resize', updateDeviceType); // Clean up event listener on component unmount
//     }, [dispatch]); // Re-run effect if dispatch changes
// };

// export default useDeviceType; // Export the custom hook
