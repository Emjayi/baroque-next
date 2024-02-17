import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// const Loading = () => {
//     const router = useRouter();
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const timeout = setTimeout(() => {
//             setLoading(false);
//             router.push(router.pathname); // reload the page after timeout
//         }, 2000);

//         return () => clearTimeout(timeout);
//     }, []);

//     return (
//         <div><h1>Hello < /h1></div >
//     );
// };

// export default Loading;

export default function Loading() {

    return (
        <>
            {loading && <div className="loading">Loading...</div>}
        </>
    )
}